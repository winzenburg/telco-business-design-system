import * as React from "react"
import { cn } from "../utils/cn"

/**
 * Live Region Component for Screen Reader Announcements
 * Provides accessible status updates for dynamic content changes
 *
 * WCAG 2.1 Compliance:
 * - Uses role="status" for non-critical updates
 * - Uses role="alert" for important/error messages
 * - Implements aria-live regions for dynamic content
 */

export interface LiveRegionProps {
  /**
   * The message to announce to screen readers
   */
  message?: string
  /**
   * Type of announcement
   * - status: Non-critical updates (polite)
   * - alert: Important/error messages (assertive)
   */
  type?: 'status' | 'alert'
  /**
   * Politeness level for the announcement
   * - polite: Waits for screen reader to finish current task
   * - assertive: Interrupts current screen reader task
   */
  politeness?: 'polite' | 'assertive'
  /**
   * Whether to visually hide the message (still announced to screen readers)
   */
  visuallyHidden?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * LiveRegion component for accessible status announcements
 *
 * @example
 * // Loading state announcement
 * <LiveRegion message="Loading results..." type="status" />
 *
 * // Error announcement
 * <LiveRegion message="Error: Invalid email address" type="alert" />
 *
 * // Visually hidden announcement
 * <LiveRegion message="Form submitted successfully" visuallyHidden />
 */
export const LiveRegion = React.forwardRef<HTMLDivElement, LiveRegionProps>(
  ({
    message,
    type = 'status',
    politeness,
    visuallyHidden = true,
    className,
    ...props
  }, ref) => {
    // Determine the actual politeness level
    const ariaPoliteness = politeness || (type === 'alert' ? 'assertive' : 'polite')

    // Only render if there's a message
    if (!message) return null

    return (
      <div
        ref={ref}
        role={type}
        aria-live={ariaPoliteness}
        aria-atomic="true"
        className={cn(
          visuallyHidden && "sr-only",
          className
        )}
        {...props}
      >
        {message}
      </div>
    )
  }
)

LiveRegion.displayName = "LiveRegion"

/**
 * Hook for managing live region announcements
 *
 * @example
 * const { announce, clearAnnouncement } = useLiveAnnouncer()
 *
 * // Announce a status
 * announce("Processing your request...")
 *
 * // Announce an error
 * announce("Error: Please try again", 'alert')
 */
export function useLiveAnnouncer() {
  const [announcement, setAnnouncement] = React.useState<{
    message: string
    type: 'status' | 'alert'
  } | null>(null)

  const announce = React.useCallback((message: string, type: 'status' | 'alert' = 'status') => {
    // Clear previous announcement first to ensure re-announcement
    setAnnouncement(null)

    // Small delay to ensure screen readers pick up the change
    setTimeout(() => {
      setAnnouncement({ message, type })
    }, 100)

    // Auto-clear after 5 seconds for status messages
    if (type === 'status') {
      setTimeout(() => {
        setAnnouncement(null)
      }, 5000)
    }
  }, [])

  const clearAnnouncement = React.useCallback(() => {
    setAnnouncement(null)
  }, [])

  return {
    announcement,
    announce,
    clearAnnouncement
  }
}

/**
 * Loading Announcer Component
 * Provides accessible loading state announcements
 */
export interface LoadingAnnouncerProps {
  /**
   * Whether the component is in loading state
   */
  loading: boolean
  /**
   * Custom loading message
   */
  loadingMessage?: string
  /**
   * Custom completion message
   */
  completionMessage?: string
  /**
   * Additional CSS classes
   */
  className?: string
}

export const LoadingAnnouncer: React.FC<LoadingAnnouncerProps> = ({
  loading,
  loadingMessage = "Loading, please wait...",
  completionMessage = "Loading complete",
  className
}) => {
  const [message, setMessage] = React.useState<string>("")
  const wasLoading = React.useRef(false)

  React.useEffect(() => {
    if (loading && !wasLoading.current) {
      // Started loading
      setMessage(loadingMessage)
      wasLoading.current = true
    } else if (!loading && wasLoading.current) {
      // Finished loading
      setMessage(completionMessage)
      wasLoading.current = false

      // Clear message after 3 seconds
      const timer = setTimeout(() => {
        setMessage("")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [loading, loadingMessage, completionMessage])

  return (
    <LiveRegion
      message={message}
      type="status"
      visuallyHidden
      className={className}
    />
  )
}

/**
 * Form Validation Announcer
 * Announces form validation errors to screen readers
 */
export interface ValidationAnnouncerProps {
  /**
   * Array of error messages
   */
  errors?: string[]
  /**
   * Whether to announce immediately
   */
  immediate?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
}

export const ValidationAnnouncer: React.FC<ValidationAnnouncerProps> = ({
  errors = [],
  immediate = true,
  className
}) => {
  const [announcement, setAnnouncement] = React.useState<string>("")

  React.useEffect(() => {
    if (errors.length > 0) {
      const errorCount = errors.length
      const message = errorCount === 1
        ? `There is ${errorCount} error in the form: ${errors[0]}`
        : `There are ${errorCount} errors in the form. First error: ${errors[0]}`

      if (immediate) {
        setAnnouncement(message)
      } else {
        // Delay for non-immediate announcements
        const timer = setTimeout(() => {
          setAnnouncement(message)
        }, 500)

        return () => clearTimeout(timer)
      }
    } else {
      setAnnouncement("")
    }
  }, [errors, immediate])

  return (
    <LiveRegion
      message={announcement}
      type="alert"
      visuallyHidden
      className={className}
    />
  )
}

export default LiveRegion