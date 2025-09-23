'use client';

import * as React from 'react';
import * as RechartsPrimitive from 'recharts';
import { cn } from '../../utils/cn';

// Chart container
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    config: Record<string, any>
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children']
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`;

  return (
    <div
      data-chart={chartId}
      ref={ref}
      className={cn(
        "flex justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='var(--ds-color-neutral-300)']]:stroke-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='var(--ds-color-bg-canvas)']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='var(--ds-color-neutral-300)']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='var(--ds-color-neutral-300)']]:stroke-border [&_.recharts-sector[stroke='var(--ds-color-bg-canvas)']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className || 'w-full h-full',
      )}
      {...props}
    >
      <ChartStyle id={chartId} config={config} />
      <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
        {children}
      </RechartsPrimitive.ResponsiveContainer>
    </div>
  );
});
ChartContainer.displayName = 'Chart';

const ChartStyle = ({ id, config }: { id: string; config: Record<string, any> }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: [
          `[data-chart=${id}] {`,
          ...colorConfig.map(
            ([key, itemConfig]) => {
              const color = itemConfig.theme?.light ?? itemConfig.color;
              return color ? `  --color-${key}: ${color};` : null;
            },
          ),
          '}',
          `.dark [data-chart=${id}] {`,
          ...colorConfig.map(
            ([key, itemConfig]) => {
              const color = itemConfig.theme?.dark ?? itemConfig.theme?.light ?? itemConfig.color;
              return color ? `  --color-${key}: ${color};` : null;
            },
          ),
          '}',
        ]
          .filter(Boolean)
          .join('\n'),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

interface ChartTooltipContentProps extends React.ComponentProps<'div'> {
  active?: boolean
  payload?: Array<{
    value?: any
    name?: string
    color?: string
    payload?: any
  }>
  label?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'line' | 'dot' | 'dashed'
  nameKey?: string
  labelKey?: string
  labelFormatter?: (value: any) => string
  formatter?: (value: any, name: string) => React.ReactNode
  labelClassName?: string
  color?: string
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      className,
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload as any[];
      const key = `${labelKey || (item as any).dataKey || item.name || 'value'}`;
      const itemConfig = item.payload?.[key];
      const value =
        !labelKey && typeof label === 'string'
          ? label
          : itemConfig?.label || (item.payload?.[(item as any).dataKey || item.name || '']);

      if (labelFormatter) {
        return labelFormatter(label as any);
      }

      return value;
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelKey,
    ]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== 'dot';

    return (
      <div
        ref={ref}
        className={cn(
          'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 px-2.5 py-1.5 text-xs shadow-xl',
          className,
        )}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.86)',
        }}
      >
        {!nestLabel ? (
          <div className={cn('grid gap-1.5', labelClassName)}>
            {tooltipLabel && (
              <div className="font-medium text-foreground">{tooltipLabel}</div>
            )}
          </div>
        ) : null}
        <div className="grid gap-1.5">
          {payload.map((item) => {
            const key = `${nameKey || item.name || (item as any).dataKey || 'value'}`;
            const itemConfig = item.payload?.[key];
            const indicatorColor = color || item.payload?.fill || item.color;

            return (
              <div
                key={(item as any).dataKey}
                className={cn(
                  'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                  indicator === 'dot' && 'items-center',
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            'shrink-0 rounded-sm border-[--color-border] bg-[--color-bg]',
                            {
                              'h-2.5 w-2.5': indicator === 'dot',
                              'w-1': indicator === 'line',
                              'w-0 border border-dashed bg-transparent':
                                indicator === 'dashed',
                              'my-0.5': nestLabel && indicator === 'dashed',
                            },
                          )}
                          style={
                            {
                              '--color-bg': indicatorColor,
                              '--color-border': indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        'flex flex-1 justify-between leading-none',
                        nestLabel ? 'items-end' : 'items-center',
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? (
                          <div className={cn('font-medium text-foreground', labelClassName)}>
                            {tooltipLabel}
                          </div>
                        ) : null}
                        <div className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </div>
                      </div>
                      {item.value && (
                        <div className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = 'ChartTooltipContent';

const ChartLegend = RechartsPrimitive.Legend;

interface ChartLegendContentProps extends React.ComponentProps<'div'> {
  payload?: Array<{
    value?: string
    type?: string
    color?: string
  }>
  verticalAlign?: 'top' | 'middle' | 'bottom'
  hideIcon?: boolean
  nameKey?: string
}

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(({ className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className,
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.value || (item as any).dataKey || 'value'}`;
        const itemConfig = (item as any).payload?.[key];

        return (
          <div
            key={item.value}
            className={cn(
              'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground',
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              !hideIcon && (
                <div
                  className="h-2 w-2 shrink-0 rounded-sm"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )
            )}
            <div className="text-muted-foreground">{itemConfig?.label || item.value}</div>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = 'ChartLegendContent';

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};
