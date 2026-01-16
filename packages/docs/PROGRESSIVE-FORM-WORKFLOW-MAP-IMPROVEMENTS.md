# ProgressiveForm & WorkflowMap Enterprise Improvements

> **Goal**: Apply the same level of enterprise-grade features we added to Wizard components to ProgressiveForm and WorkflowMap

## Research Foundation

Based on analysis of industry leaders and the successful Wizard improvements:

### Industry Best Practices Sources
- **Luke Wroblewski** (Google) - Progressive disclosure, inline validation
- **Nielsen Norman Group** - Save/resume, error recovery, clear progress
- **Microsoft Azure Portal** - Complex workflow management
- **AWS Console** - Multi-step configuration flows
- **Zendesk** - Contextual help and guidance
- **Lemonade Insurance** - Conversational forms with smart defaults
- **GOV.UK Design System** - Accessible, clear task lists

## Current State Analysis

### ProgressiveForm (Accordion-style Progressive Disclosure)
**Strengths:**
- ✅ Accordion UI with expand/collapse
- ✅ Progress tracking
- ✅ Basic validation display
- ✅ Status indicators (not-started, in-progress, completed, error)
- ✅ Optional sections
- ✅ Auto-expand next section

**Missing Critical Features:**
- ❌ **Save & Resume** - No auto-save or manual save functionality
- ❌ **Field-level validation** - Only section-level errors
- ❌ **Navigation guards** - Can lose progress on navigation
- ❌ **Error summary** with focus management
- ❌ **Review step** before final submission
- ❌ **Conditional sections** based on previous answers
- ❌ **Async validation** support
- ❌ **Draft detection** and resume prompts
- ❌ **Last saved timestamp**
- ❌ **Keyboard navigation** between sections
- ❌ **Section completion callbacks**
- ❌ **Data persistence** layer

### WorkflowMap (Visual Journey for Complex Processes)
**Strengths:**
- ✅ Visual task cards with status
- ✅ Dependency management
- ✅ Progress tracking
- ✅ Task metadata (assignee, estimated time, due date)
- ✅ Collapsible sections
- ✅ Blocked task detection

**Missing Critical Features:**
- ❌ **Save & Resume** - No persistence
- ❌ **Task comments/notes** - No collaboration features
- ❌ **Task history/audit log** - Can't see who did what when
- ❌ **Bulk task operations** - Can't mark multiple complete
- ❌ **Search/filter tasks** - Hard to find specific tasks
- ❌ **Task notifications** - No alerts for blocked/overdue tasks
- ❌ **Time tracking** - Can't track actual vs estimated
- ❌ **Attachments** - Can't upload documents per task
- ❌ **Subtasks** - Can't break down complex tasks
- ❌ **Task templates** - Can't save common workflows
- ❌ **Export/print** - Can't generate reports
- ❌ **Mobile optimization** - Layout not responsive enough

## Improvement Roadmap

### Phase 1: Critical Enterprise Features (Priority 1)

#### A) ProgressiveForm Enhancements

**1. Save & Resume System**
```typescript
export interface ProgressiveFormProps {
  // ... existing props

  // NEW: Save & Resume
  autoSave?: boolean;
  autoSaveDelay?: number; // ms, default 2000
  onSave?: (data: FormData) => Promise<void> | void;
  onLoad?: () => Promise<FormData> | FormData;
  storageKey?: string; // For localStorage persistence
  showLastSaved?: boolean;
  enableNavigationGuard?: boolean; // Warn before leaving with unsaved changes
}

// Enhanced hook
export function useProgressiveForm(options: UseProgressiveFormOptions) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Auto-save with debouncing
  useEffect(() => {
    if (autoSave && hasUnsavedChanges) {
      const timer = setTimeout(async () => {
        await saveProgress();
        setLastSaved(new Date());
        setHasUnsavedChanges(false);
      }, autoSaveDelay);

      return () => clearTimeout(timer);
    }
  }, [formData, autoSave, autoSaveDelay]);

  // Navigation guard
  useEffect(() => {
    if (enableNavigationGuard && hasUnsavedChanges) {
      const handler = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = '';
      };
      window.addEventListener('beforeunload', handler);
      return () => window.removeEventListener('beforeunload', handler);
    }
  }, [hasUnsavedChanges, enableNavigationGuard]);

  // Load saved data on mount
  useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const data = JSON.parse(saved);
        // Prompt user to resume
        setFormData(data);
      }
    }
  }, []);

  return {
    // ... existing returns
    formData,
    lastSaved,
    hasUnsavedChanges,
    saveProgress,
    loadProgress,
    clearSavedData,
  };
}
```

**2. Enhanced Validation with Zod**
```typescript
import { z } from 'zod';

export interface FormSection {
  // ... existing props

  // NEW: Schema-based validation
  schema?: z.ZodSchema;
  fieldErrors?: Record<string, string[]>; // Field-level errors
  onValidate?: (data: any) => Promise<ValidationResult> | ValidationResult;
}

// Validation helpers
export interface ValidationResult {
  isValid: boolean;
  errors?: Record<string, string[]>; // Field-level
  globalErrors?: string[]; // Section-level
}

// Enhanced validation display
const renderFieldErrors = (field: string, errors: string[]) => (
  <div className="mt-1">
    {errors.map((error, i) => (
      <p key={i} className="text-sm text-destructive flex items-center gap-1">
        <Icon name="alert" size={12} />
        {error}
      </p>
    ))}
  </div>
);
```

**3. Review Step Component**
```typescript
export interface ReviewStepProps {
  sections: FormSection[];
  formData: Record<string, any>;
  onEdit: (sectionId: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({
  sections,
  formData,
  onEdit,
  onSubmit,
  isSubmitting
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Review Your Information</h2>
        <p className="text-muted-foreground">Please review before submitting</p>
      </div>

      {sections.map((section) => (
        <Card key={section.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{section.title}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => onEdit(section.id)}>
                <Icon name="edit" size={16} className="mr-1" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Display summary of section data */}
            <ReviewSectionData data={formData[section.id]} />
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={onSubmit}
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </div>
    </div>
  );
};
```

**4. Conditional Sections (Branching Logic)**
```typescript
export interface FormSection {
  // ... existing props

  // NEW: Conditional rendering
  condition?: (formData: Record<string, any>) => boolean;
  dependencies?: string[]; // Must complete these sections first
}

// In ProgressiveForm render
const visibleSections = sections.filter((section) => {
  // Check condition
  if (section.condition && !section.condition(formData)) {
    return false;
  }

  // Check dependencies
  if (section.dependencies) {
    const allComplete = section.dependencies.every((depId) =>
      sections.find((s) => s.id === depId)?.status === 'completed'
    );
    if (!allComplete) return false;
  }

  return true;
});
```

#### B) WorkflowMap Enhancements

**1. Task History & Audit Log**
```typescript
export interface TaskHistoryEntry {
  id: string;
  taskId: string;
  action: 'started' | 'completed' | 'blocked' | 'commented' | 'assigned';
  user: string;
  timestamp: Date;
  details?: string;
  attachments?: string[];
}

export interface WorkflowTask {
  // ... existing props

  // NEW: History tracking
  history?: TaskHistoryEntry[];
  comments?: TaskComment[];
  attachments?: TaskAttachment[];
  subtasks?: WorkflowTask[];
  actualTime?: string; // vs estimatedTime
  completedAt?: Date;
  completedBy?: string;
}

// History sidebar component
export const TaskHistoryPanel: React.FC<{ task: WorkflowTask }> = ({ task }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <Icon name="history" size={16} className="mr-1" />
          View History
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px]">
        <SheetHeader>
          <SheetTitle>{task.title} - Activity Log</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 mt-6">
          {task.history?.map((entry) => (
            <div key={entry.id} className="flex gap-3">
              <div className="flex-shrink-0">
                <Avatar size="sm">{entry.user[0]}</Avatar>
              </div>
              <div className="flex-1">
                <p className="text-sm">
                  <strong>{entry.user}</strong> {entry.action} this task
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(entry.timestamp)} ago
                </p>
                {entry.details && (
                  <p className="text-sm mt-1">{entry.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
```

**2. Task Comments & Collaboration**
```typescript
export interface TaskComment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  mentions?: string[]; // @username mentions
}

export const TaskCommentsSection: React.FC<{
  task: WorkflowTask;
  onAddComment: (comment: string) => void;
}> = ({ task, onAddComment }) => {
  const [comment, setComment] = useState('');

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {task.comments?.map((c) => (
          <Card key={c.id}>
            <CardContent className="pt-3">
              <div className="flex items-start gap-3">
                <Avatar size="sm">{c.author[0]}</Avatar>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{c.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(c.timestamp)} ago
                  </p>
                  <p className="text-sm mt-2">{c.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={() => {
          onAddComment(comment);
          setComment('');
        }}>
          Post
        </Button>
      </div>
    </div>
  );
};
```

**3. Bulk Operations & Search**
```typescript
export interface WorkflowMapProps {
  // ... existing props

  // NEW: Bulk operations
  enableBulkActions?: boolean;
  onBulkComplete?: (taskIds: string[]) => void;
  onBulkAssign?: (taskIds: string[], assignee: string) => void;

  // NEW: Search & filter
  enableSearch?: boolean;
  searchPlaceholder?: string;
  filterOptions?: {
    status?: WorkflowTask['status'][];
    assignee?: string[];
    section?: string[];
  };
}

// Bulk actions bar
const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set());

{selectedTasks.size > 0 && (
  <div className="sticky top-0 z-10 bg-blue-50 border-blue-200 border-b p-4">
    <div className="flex items-center justify-between">
      <p className="font-semibold">
        {selectedTasks.size} task{selectedTasks.size !== 1 ? 's' : ''} selected
      </p>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onBulkComplete?.(Array.from(selectedTasks))}
        >
          Mark Complete
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSelectedTasks(new Set())}
        >
          Clear Selection
        </Button>
      </div>
    </div>
  </div>
)}
```

**4. Task Templates & Export**
```typescript
// Save workflow as template
export const saveWorkflowTemplate = (sections: WorkflowSection[], name: string) => {
  const template = {
    id: generateId(),
    name,
    sections: sections.map((s) => ({
      ...s,
      tasks: s.tasks.map((t) => ({
        ...t,
        status: 'not-started', // Reset status
        assignee: undefined, // Clear assignee
      })),
    })),
    createdAt: new Date(),
  };

  // Save to localStorage or API
  const templates = JSON.parse(localStorage.getItem('workflow-templates') || '[]');
  templates.push(template);
  localStorage.setItem('workflow-templates', JSON.stringify(templates));
};

// Export to CSV/PDF
export const exportWorkflow = (sections: WorkflowSection[], format: 'csv' | 'pdf') => {
  if (format === 'csv') {
    const tasks = sections.flatMap((s) =>
      s.tasks.map((t) => ({
        Section: s.title,
        Task: t.title,
        Status: t.status,
        Assignee: t.assignee || 'Unassigned',
        'Estimated Time': t.estimatedTime || 'N/A',
        Dependencies: t.dependencies?.join(', ') || 'None',
      }))
    );

    // Convert to CSV and download
    const csv = convertToCSV(tasks);
    downloadFile(csv, `workflow-${Date.now()}.csv`, 'text/csv');
  }
};
```

### Phase 2: Advanced Features (Priority 2)

#### ProgressiveForm
- **Smart defaults** - Pre-fill based on previous submissions
- **Field suggestions** - Autocomplete from common values
- **Inline help** - Contextual tooltips and guidance
- **Progress persistence** - Continue on different devices
- **Accessibility enhancements** - Screen reader announcements for section changes

#### WorkflowMap
- **Gantt chart view** - Timeline visualization
- **Kanban board view** - Drag-and-drop status changes
- **Calendar integration** - Sync due dates
- **Email notifications** - Task reminders and updates
- **Mobile app** - Native iOS/Android experience

### Phase 3: AI-Powered Features (Future)

- **Smart validation** - AI suggests fixes for common errors
- **Predictive fields** - Auto-fill based on context
- **Task estimation** - ML predicts actual time needed
- **Workflow optimization** - Suggests better task ordering
- **Natural language queries** - "Show me all overdue tasks assigned to me"

## Implementation Priority

### Must Have (Sprint 1-2)
1. ✅ Save & Resume with auto-save
2. ✅ Navigation guards
3. ✅ Enhanced validation with field-level errors
4. ✅ Review step for ProgressiveForm
5. ✅ Task history for WorkflowMap

### Should Have (Sprint 3-4)
6. Conditional sections/branching
7. Task comments and collaboration
8. Bulk operations
9. Search and filter
10. Last saved timestamp display

### Nice to Have (Sprint 5+)
11. Task templates
12. Export functionality
13. Subtasks
14. Mobile optimization
15. Accessibility audit and fixes

## Success Metrics

**ProgressiveForm:**
- ⬆️ Form completion rate (target: +15%)
- ⬇️ Form abandonment rate (target: -25%)
- ⬇️ Validation errors per submission (target: -40%)
- ⬆️ User satisfaction score (target: 4.5/5)

**WorkflowMap:**
- ⬆️ Task completion velocity (target: +20%)
- ⬇️ Overdue tasks (target: -30%)
- ⬆️ Team collaboration (comments/task) (target: 2+)
- ⬆️ Workflow visibility (target: 90% of team checks daily)

## Testing Requirements

1. **Unit tests** for all new hooks and utilities
2. **Integration tests** for save/resume flows
3. **E2E tests** for complete form submissions
4. **Accessibility tests** with axe-core
5. **Performance tests** for large workflows (50+ tasks)
6. **Mobile tests** on iOS and Android

## Documentation Needs

1. **Migration guide** from old to new ProgressiveForm/WorkflowMap
2. **API reference** for all new props and methods
3. **Examples** for common use cases (onboarding, project setup, etc.)
4. **Best practices** guide
5. **Troubleshooting** FAQ

---

## Next Steps

1. **Review this proposal** with team
2. **Prioritize features** based on user research
3. **Create Jira tickets** for each feature
4. **Start Sprint 1** with Save & Resume implementation
5. **Get early user feedback** after Sprint 2

## Questions for Discussion

1. Should we version these as v2 components or enhance existing?
2. What's our backward compatibility strategy?
3. Should WorkflowMap support real-time collaboration (WebSockets)?
4. What's our data persistence strategy (localStorage vs API)?
5. Do we need a migration CLI tool for existing implementations?
