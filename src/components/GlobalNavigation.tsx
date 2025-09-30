import * as React from 'react';
import { cn } from '../utils/cn';
import { Icon } from './Icon';
import comcastBusinessLogoWhite from '../assets/comcast-business-logo-white.png';
import userAvatar from '../assets/user-avatar.png';

// Global Navigation component following Comcast Business Design System
// Blue gradient background with logo, navigation, and user info

export interface GlobalNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Current user's name to display in greeting
   */
  userName?: string
  /**
   * Current section/page title
   */
  sectionTitle?: string
  /**
   * Show search icon
   */
  showSearch?: boolean
  /**
   * Show user profile section
   */
  showUserProfile?: boolean
}

export const GlobalNavigation = React.forwardRef<
  HTMLElement,
  GlobalNavigationProps
>(({
  className,
  userName = 'David',
  sectionTitle = 'ENTERPRISE SOLUTIONS',
  showSearch = true,
  showUserProfile = true,
  ...props
}, ref) => {
  return (
    <nav
      ref={ref}
      className={cn(
        // Base layout
        'flex items-center justify-between px-6 py-3 h-16',
        // Comcast brand blue background
        'bg-[var(--ds-color-blue-600)]',
        className,
      )}
      {...props}
    >
      {/* Left Section - Logo and Hamburger */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu */}
        <button
          className="text-white hover:text-white/80 transition-colors p-1"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-6"
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* Comcast Business Logo */}
        <div className="flex items-center">
          <img
            src={comcastBusinessLogoWhite}
            alt="Comcast Business"
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Center Section - Page Title */}
      <div className="flex-1 text-center">
        <h1 className="text-white font-bold text-lg font-primary tracking-wider">
          {sectionTitle}
        </h1>
      </div>

      {/* Right Section - Search and User */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        {showSearch && (
          <button
            className="text-white hover:text-white/80 transition-colors p-2"
            aria-label="Search"
          >
            <Icon name="analytics" className="size-5" />
          </button>
        )}

        {/* User Profile */}
        {showUserProfile && (
          <div className="flex items-center gap-3">
            <span className="text-white font-medium font-secondary">
              Hello, {userName}
            </span>
            <button
              className="flex items-center justify-center rounded-full hover:bg-white/20 transition-colors p-1"
              aria-label="User profile"
            >
              <img
                src={userAvatar}
                alt="User avatar"
                className="w-[42px] h-[36px]"
              />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
});

GlobalNavigation.displayName = 'GlobalNavigation';
