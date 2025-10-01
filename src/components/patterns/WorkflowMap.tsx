import * as React from 'react';
import { cn } from '../../utils/cn';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface WorkflowTask {
  id: string;
  title: string;
  description?: string;
  icon?: IconName;
  status: 'not-started' | 'in-progress' | 'completed' | 'blocked' | 'skipped';
  optional?: boolean;
  dependencies?: string[]; // IDs of tasks that must be completed first
  assignee?: string;
  dueDate?: Date;
  estimatedTime?: string;
}

export interface WorkflowSection {
  id: string;
  title: string;
  description?: string;
  tasks: WorkflowTask[];
  collapsible?: boolean;
}

export interface WorkflowMapProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Workflow sections
   */
  sections: WorkflowSection[];

  /**
   * Callback when a task is clicked
   */
  onTaskClick?: (task: WorkflowTask) => void;

  /**
   * Show overall progress
   */
  showProgress?: boolean;

  /**
   * Allow task resumption
   */
  allowResume?: boolean;

  /**
   * Saved progress timestamp
   */
  lastSaved?: Date;

  /**
   * Actions (Save & Exit, Submit, etc.)
   */
  actions?: React.ReactNode;
}

const statusConfig = {
  'not-started': {
    colorClass: 'text-[var(--ds-color-neutral-600)]',
    bgClass: 'bg-[var(--ds-color-neutral-100)]',
    icon: 'document' as IconName,
    label: 'Not Started',
  },
  'in-progress': {
    colorClass: 'text-[var(--ds-color-blue-600)]',
    bgClass: 'bg-[var(--ds-color-blue-50)]',
    icon: 'refresh' as IconName,
    label: 'In Progress',
  },
  completed: {
    colorClass: 'text-[var(--ds-color-success-600)]',
    bgClass: 'bg-[var(--ds-color-success-50)]',
    icon: 'check' as IconName,
    label: 'Completed',
  },
  blocked: {
    colorClass: 'text-[var(--ds-color-error-600)]',
    bgClass: 'bg-[var(--ds-color-error-50)]',
    icon: 'alert' as IconName,
    label: 'Blocked',
  },
  skipped: {
    colorClass: 'text-[var(--ds-color-neutral-500)]',
    bgClass: 'bg-[var(--ds-color-neutral-50)]',
    icon: 'chevron' as IconName,
    label: 'Skipped',
  },
} as const;

/**
 * WorkflowMap component - visual journey map for complex, non-linear processes
 */
export const WorkflowMap = React.forwardRef<HTMLDivElement, WorkflowMapProps>(
  (
    {
      sections,
      onTaskClick,
      showProgress = true,
      allowResume = true,
      lastSaved,
      actions,
      className,
      ...props
    },
    ref,
  ) => {
    const [collapsedSections, setCollapsedSections] = React.useState<Set<string>>(new Set());

    const allTasks = sections.flatMap((s) => s.tasks);
    const completedTasks = allTasks.filter((t) => t.status === 'completed').length;
    const totalTasks = allTasks.length;
    const progress = (completedTasks / totalTasks) * 100;

    const toggleSection = (sectionId: string) => {
      setCollapsedSections((prev) => {
        const next = new Set(prev);
        if (next.has(sectionId)) {
          next.delete(sectionId);
        } else {
          next.add(sectionId);
        }
        return next;
      });
    };

    const isTaskClickable = (task: WorkflowTask) => {
      if (!onTaskClick) return false;
      if (task.status === 'blocked') return false;

      // Check dependencies
      if (task.dependencies && task.dependencies.length > 0) {
        const dependencyTasks = allTasks.filter((t) => task.dependencies?.includes(t.id));
        const allDependenciesComplete = dependencyTasks.every((t) => t.status === 'completed');
        if (!allDependenciesComplete) return false;
      }

      return true;
    };

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {/* Header with Progress */}
        {showProgress && (
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Overall Progress</h3>
                    <p className="text-sm text-[var(--ds-color-text-secondary)]">
                      {completedTasks} of {totalTasks} tasks completed
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--ds-color-blue-600)]">
                      {Math.round(progress)}%
                    </div>
                    {lastSaved && allowResume && (
                      <p className="text-xs text-[var(--ds-color-text-tertiary)]">
                        Last saved: {lastSaved.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>

                <div className="h-2 bg-[var(--ds-color-neutral-100)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--ds-color-blue-600)] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Workflow Sections */}
        <div className="space-y-4">
          {sections.map((section) => {
            const isCollapsed = section.collapsible && collapsedSections.has(section.id);
            const sectionCompletedTasks = section.tasks.filter((t) => t.status === 'completed').length;
            const sectionProgress = (sectionCompletedTasks / section.tasks.length) * 100;

            return (
              <Card key={section.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        {section.collapsible && (
                          <button
                            type="button"
                            onClick={() => toggleSection(section.id)}
                            className="p-1 hover:bg-[var(--ds-color-neutral-100)] rounded transition-colors"
                          >
                            <Icon
                              name="chevron"
                              size={20}
                              className={cn(
                                'transition-transform',
                                isCollapsed && '-rotate-90',
                              )}
                            />
                          </button>
                        )}
                        <div>
                          <CardTitle>{section.title}</CardTitle>
                          {section.description && (
                            <p className="text-sm text-[var(--ds-color-text-secondary)] mt-1">
                              {section.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant="outline">
                        {sectionCompletedTasks}/{section.tasks.length}
                      </Badge>
                      <div className="w-24 h-2 bg-[var(--ds-color-neutral-100)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--ds-color-blue-600)] transition-all"
                          style={{ width: `${sectionProgress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {!isCollapsed && (
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.tasks.map((task) => {
                        const config = statusConfig[task.status];
                        const clickable = isTaskClickable(task);
                        const hasUnmetDependencies =
                          task.dependencies &&
                          task.dependencies.length > 0 &&
                          !task.dependencies.every((depId) => {
                            const depTask = allTasks.find((t) => t.id === depId);
                            return depTask?.status === 'completed';
                          });

                        return (
                          <button
                            key={task.id}
                            type="button"
                            onClick={() => clickable && onTaskClick?.(task)}
                            disabled={!clickable}
                            className={cn(
                              'p-4 rounded-lg border-2 text-left transition-all',
                              clickable && 'cursor-pointer hover:shadow-md hover:border-[var(--ds-color-blue-500)]',
                              !clickable && 'cursor-not-allowed opacity-60',
                              task.status === 'completed' && 'border-[var(--ds-color-success-300)]',
                              task.status === 'in-progress' && 'border-[var(--ds-color-blue-300)]',
                              task.status === 'blocked' && 'border-[var(--ds-color-error-300)]',
                              task.status === 'not-started' && 'border-[var(--ds-color-neutral-300)]',
                              config.bgClass,
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <Icon
                                // @ts-ignore - config.icon type is correct but TS infers wrong union
                                name={config.icon}
                                size={24}
                                className={cn('flex-shrink-0 mt-0.5', config.colorClass)}
                              />

                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <h4 className="font-semibold text-sm text-[var(--ds-color-text-primary)]">
                                    {task.title}
                                  </h4>
                                  <Badge
                                    variant="secondary"
                                    className={cn(
                                      'flex-shrink-0 text-xs',
                                      config.bgClass,
                                      config.colorClass,
                                    )}
                                  >
                                    {config.label}
                                  </Badge>
                                </div>

                                {task.description && (
                                  <p className="text-xs text-[var(--ds-color-text-secondary)] mb-2">
                                    {task.description}
                                  </p>
                                )}

                                <div className="flex items-center gap-2 flex-wrap text-xs text-[var(--ds-color-text-tertiary)]">
                                  {task.estimatedTime && (
                                    <span className="flex items-center gap-1">
                                      <Icon name="refresh" size={12} />
                                      {task.estimatedTime}
                                    </span>
                                  )}
                                  {task.assignee && (
                                    <span className="flex items-center gap-1">
                                      <Icon name="users" size={12} />
                                      {task.assignee}
                                    </span>
                                  )}
                                  {task.optional && <Badge variant="outline" className="text-xs">Optional</Badge>}
                                </div>

                                {hasUnmetDependencies && (
                                  <p className="text-xs text-[var(--ds-color-warning-600)] mt-2 flex items-center gap-1">
                                    <Icon name="alert" size={12} />
                                    Waiting for dependencies
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Actions */}
        {actions && (
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between gap-4">{actions}</div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  },
);

WorkflowMap.displayName = 'WorkflowMap';
