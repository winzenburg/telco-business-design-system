import { cn } from "../utils/cn"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[4px] bg-gradient-to-r from-[var(--ds-color-[^]]*]) via-[var(--ds-color-[^]]*]) to-[var(--ds-color-[^]]*]) bg-[length:200%_100%]",
        "animate-[shimmer_1.5s_ease-in-out_infinite]",
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(90deg, var(--ds-color-bg-surface) 25%, var(--ds-color-bg-canvas) 50%, var(--ds-color-bg-surface) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s ease-in-out infinite'
      }}
      {...props}
    />
  )
}

// Add the shimmer keyframes to the CSS
const shimmerKeyframes = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`

// Inject the keyframes into the document head if not already present
if (typeof window !== 'undefined' && !document.querySelector('#skeleton-shimmer-styles')) {
  const style = document.createElement('style')
  style.id = 'skeleton-shimmer-styles'
  style.textContent = shimmerKeyframes
  document.head.appendChild(style)
}

// Input-specific skeleton component that matches the input field dimensions
function InputSkeleton({
  size = "default",
  hasLabel = false,
  hasSubcopy = false,
  hasIcon = false,
  className,
  ...props
}: {
  size?: "sm" | "default" | "lg"
  hasLabel?: boolean
  hasSubcopy?: boolean
  hasIcon?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const sizeClasses = {
    sm: "h-8",
    default: "h-10",
    lg: "h-12"
  }

  return (
    <div className={cn("space-y-0", className)} {...props}>
      {/* Label skeleton */}
      {hasLabel && (
        <div className="space-y-1 mb-2">
          <Skeleton className="h-4 w-24" />
          {hasSubcopy && <div className="h-4 w-48" />} {/* Spacer for subcopy */}
        </div>
      )}
      
      {/* Input field skeleton - only this has the loading effect */}
      <div className="relative">
        <Skeleton className={cn(
          "w-full rounded-[4px]",
          sizeClasses[size]
        )} />
      </div>
      
      {/* Helper text spacer - no skeleton */}
      <div className="h-4 w-32 mt-1" />
    </div>
  )
}

export { Skeleton, InputSkeleton }