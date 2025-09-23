import { cn } from '../../utils/cn';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative rounded-[4px] bg-gray-200 overflow-hidden',
        'before:absolute before:inset-0',
        'before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent',
        'before:animate-[shimmer_1.5s_ease-in-out_infinite]',
        className,
      )}
      {...props}
    />
  );
}

// Input-specific skeleton component that matches the input field dimensions
function InputSkeleton({
  size = 'default',
  hasLabel = false,
  hasSubcopy = false,
  hasIcon = false,
  className,
  ...props
}: {
  size?: 'sm' | 'default' | 'lg'
  hasLabel?: boolean
  hasSubcopy?: boolean
  hasIcon?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const sizeClasses = {
    sm: 'h-8',
    default: 'h-10',
    lg: 'h-12',
  };

  return (
    <div className={cn('space-y-0', className)} {...props}>
      {/* Label skeleton */}
      {hasLabel && (
        <div className="space-y-1 mb-2">
          <Skeleton className="h-4 w-24" />
        </div>
      )}

      {/* Input field skeleton */}
      <div className="relative">
        <Skeleton className={cn(
          'w-full rounded-[4px]',
          sizeClasses[size],
        )} />
      </div>
    </div>
  );
}

export { Skeleton, InputSkeleton };
