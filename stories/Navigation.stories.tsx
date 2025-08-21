import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../src/components/ui/button';
import { Menu, HelpCircle, ChevronDown, ChevronUp, ChevronRight, Home, Users, Settings, BarChart, FileText, Phone, Shield, Wifi } from 'lucide-react';
import { navigationSpecs, categorizedNavigation, navigationUsage } from '../src/tokens/figma-navigation-specs';

// Icon mapping for navigation
const iconMap = {
  'home': Home,
  'users': Users,
  'settings': Settings,
  'analytics': BarChart,
  'report': FileText,
  'phone': Phone,
  'security': Shield,
  'wifi': Wifi,
  'chevron': ChevronRight,
  'directionup': ChevronUp,
  'directiondown': ChevronDown,
  'menu': Menu,
  'gethelp': HelpCircle,
} as const;

const getIcon = (iconName: string, size = 16, className = '') => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Home;
  return <IconComponent className={`h-${Math.floor(size/4)} w-${Math.floor(size/4)} ${className}`} />;
};

const meta: Meta = {
  title: 'Components/Navigation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navigation components built to Figma specifications from the Comcast Business Design System. Includes headers, sidebars, menus, and navigation patterns.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Header Navigation
export const HeaderNavigation: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Header Navigation</h2>
          <p className="text-gray-600 font-secondary">Primary site navigation based on Figma specifications</p>
        </div>

        {/* Primary Header */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CB</span>
                </div>
                <span className="text-xl font-semibold font-primary">Comcast Business</span>
              </div>

              {/* Navigation Items */}
              <nav className="hidden md:flex items-center gap-6">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: 'analytics' },
                  { id: 'services', label: 'Services', icon: 'configure' },
                  { id: 'network', label: 'Network', icon: 'powerfulnetwork' },
                  { id: 'security', label: 'Security', icon: 'securityquestion' },
                  { id: 'support', label: 'Support', icon: 'gethelp' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors font-secondary ${
                      activeItem === item.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
{getIcon(item.icon, 16)}
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Account Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 font-secondary"
                >
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </div>
                  <span className="hidden sm:block">John Doe</span>
<ChevronDown className="h-4 w-4" />
                </button>

                {isAccountOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-secondary">Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-secondary">Settings</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-secondary">Billing</a>
                      <hr className="my-1" />
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-secondary">Sign Out</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="p-6 bg-gray-50 text-center">
            <p className="text-gray-600 font-secondary">Content area - Active section: <strong>{activeItem}</strong></p>
          </div>
        </div>
      </div>
    );
  },
};

// Sidebar Navigation
export const SidebarNavigation: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');
    const [expandedSection, setExpandedSection] = useState('network');

    const navigationSections = [
      {
        id: 'overview',
        label: 'Overview',
        icon: 'analytics',
        items: [
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'reports', label: 'Reports' },
          { id: 'analytics', label: 'Analytics' }
        ]
      },
      {
        id: 'network',
        label: 'Network',
        icon: 'powerfulnetwork',
        items: [
          { id: 'devices', label: 'Devices' },
          { id: 'connections', label: 'Connections' },
          { id: 'bandwidth', label: 'Bandwidth' }
        ]
      },
      {
        id: 'security',
        label: 'Security',
        icon: 'securityquestion',
        items: [
          { id: 'firewall', label: 'Firewall' },
          { id: 'threats', label: 'Threats' },
          { id: 'policies', label: 'Policies' }
        ]
      },
      {
        id: 'support',
        label: 'Support',
        icon: 'gethelp',
        items: [
          { id: 'tickets', label: 'Tickets' },
          { id: 'knowledge', label: 'Knowledge Base' },
          { id: 'contact', label: 'Contact' }
        ]
      }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Sidebar Navigation</h2>
          <p className="text-gray-600 font-secondary">Collapsible sidebar with hierarchical navigation</p>
        </div>

        <div className="flex border border-gray-200 rounded-lg overflow-hidden" style={{ height: '600px' }}>
          {/* Sidebar */}
          <div className={`bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
            {/* Header */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                {!isCollapsed && <span className="text-lg font-semibold font-primary">Menu</span>}
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1 rounded hover:bg-gray-700"
                >
<ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-2">
              {navigationSections.map((section) => (
                <div key={section.id} className="mb-2">
                  <button
                    onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
{getIcon(section.icon, 16)}
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left font-secondary">{section.label}</span>
{expandedSection === section.id ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                      </>
                    )}
                  </button>

                  {!isCollapsed && expandedSection === section.id && (
                    <div className="ml-9 mt-1 space-y-1">
                      {section.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveItem(item.id)}
                          className={`w-full text-left px-3 py-1 text-sm rounded transition-colors font-secondary ${
                            activeItem === item.id
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-4 font-primary">Main Content Area</h3>
            <p className="text-gray-600 font-secondary">
              Active item: <strong>{activeItem}</strong><br />
              Sidebar: <strong>{isCollapsed ? 'Collapsed' : 'Expanded'}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

// Breadcrumb Navigation
export const BreadcrumbNavigation: Story = {
  render: () => {
    const breadcrumbs = [
      { label: 'Dashboard', href: '#' },
      { label: 'Network', href: '#' },
      { label: 'Devices', href: '#' },
      { label: 'Router Configuration', href: '#', current: true }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Breadcrumb Navigation</h2>
          <p className="text-gray-600 font-secondary">Shows user's current location in site hierarchy</p>
        </div>

        <div className="space-y-6">
          {/* Default Breadcrumb */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-3 font-primary">Default Style</h3>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 font-secondary">
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
<ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                    )}
                    {item.current ? (
                      <span className="text-gray-900 font-medium">{item.label}</span>
                    ) : (
                      <a
                        href={item.href}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* Compact Breadcrumb */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-medium mb-3 font-primary">Compact Style</h3>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1 text-sm font-secondary">
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-1 text-gray-400">/</span>
                    )}
                    {item.current ? (
                      <span className="text-gray-900 font-medium">{item.label}</span>
                    ) : (
                      <a
                        href={item.href}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    );
  },
};

// Tab Navigation
export const TabNavigation: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
      { id: 'overview', label: 'Overview', icon: 'analytics' },
      { id: 'details', label: 'Details', icon: 'configure' },
      { id: 'settings', label: 'Settings', icon: 'gethelp' },
      { id: 'history', label: 'History', icon: 'report' }
    ];

    const tabContent = {
      overview: 'Overview content with charts and key metrics.',
      details: 'Detailed information and specifications.',
      settings: 'Configuration options and preferences.',
      history: 'Historical data and activity logs.'
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Tab Navigation</h2>
          <p className="text-gray-600 font-secondary">Switch between related content sections</p>
        </div>

        <div className="space-y-6">
          {/* Default Tabs */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="border-b border-gray-200 bg-gray-50">
              <nav className="flex space-x-1 px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors font-secondary ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 bg-white'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
{getIcon(tab.icon, 16)}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="p-6">
              <p className="text-gray-700 font-secondary">{tabContent[activeTab as keyof typeof tabContent]}</p>
            </div>
          </div>

          {/* Pill Tabs */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 font-primary">Pill Style Tabs</h3>
            <div className="flex space-x-2 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors font-secondary ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
{getIcon(tab.icon, 16)}
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700 font-secondary">{tabContent[activeTab as keyof typeof tabContent]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Mobile Navigation
export const MobileNavigation: Story = {
  render: () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: 'analytics' },
      { id: 'network', label: 'Network', icon: 'powerfulnetwork' },
      { id: 'security', label: 'Security', icon: 'securityquestion' },
      { id: 'billing', label: 'Billing', icon: 'report' },
      { id: 'support', label: 'Support', icon: 'gethelp' }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Mobile Navigation</h2>
          <p className="text-gray-600 font-secondary">Responsive navigation patterns for mobile devices</p>
        </div>

        {/* Mobile Header with Hamburger */}
        <div className="max-w-sm mx-auto border border-gray-200 rounded-lg overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
<Menu className="h-5 w-5" />
              </button>
              <span className="text-lg font-semibold font-primary">Comcast Business</span>
              <button className="p-2 rounded-md hover:bg-gray-100">
<HelpCircle className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Mobile Menu Drawer */}
          {isMobileMenuOpen && (
            <div className="bg-white border-b border-gray-200">
              <nav className="py-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors font-secondary ${
                      activeItem === item.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
{getIcon(item.icon, 20)}
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}

          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600 font-secondary">
              Active: <strong>{activeItem}</strong><br />
              Menu: <strong>{isMobileMenuOpen ? 'Open' : 'Closed'}</strong>
            </p>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="max-w-sm mx-auto">
          <h3 className="text-lg font-medium mb-4 text-center font-primary">Bottom Tab Bar</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-50 flex items-center justify-center">
              <p className="text-gray-600 font-secondary">Content Area</p>
            </div>
            <div className="bg-white border-t border-gray-200">
              <nav className="flex">
                {menuItems.slice(0, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`flex-1 flex flex-col items-center py-2 px-1 transition-colors font-secondary ${
                      activeItem === item.id
                        ? 'text-blue-600'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
{getIcon(item.icon, 20)}
                    <span className="text-xs mt-1">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Figma Specifications
export const FigmaSpecifications: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Figma Specifications</h2>
        <p className="text-gray-600 font-secondary">Navigation components extracted from Figma with specifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Design System Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium font-primary">Total Components</p>
              <p className="text-2xl font-bold text-blue-600">{navigationSpecs.length}</p>
            </div>
            <div className="p-3 bg-green-50 rounded">
              <p className="text-sm font-medium font-primary">Header Components</p>
              <p className="text-2xl font-bold text-green-600">{categorizedNavigation.header?.length || 0}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="text-sm font-medium font-primary">Menu Components</p>
              <p className="text-2xl font-bold text-purple-600">{categorizedNavigation.menu?.length || 0}</p>
            </div>
            <div className="p-3 bg-orange-50 rounded">
              <p className="text-sm font-medium font-primary">Link Components</p>
              <p className="text-2xl font-bold text-orange-600">{categorizedNavigation.link?.length || 0}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Navigation Categories</h3>
          <div className="space-y-2">
            {Object.entries(categorizedNavigation).map(([category, components]) => (
              <div key={category} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium capitalize font-primary">{category}</span>
                <span className="text-sm text-gray-600 font-secondary">{components.length} components</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium font-primary">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(navigationUsage).filter(([key]) => key !== 'guidelines').map(([type, description]) => (
            <div key={type} className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium capitalize mb-2 font-primary">{type}</h4>
              <p className="text-sm text-gray-600 font-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-medium mb-2 font-primary">Implementation Guidelines</h4>
        <ul className="text-sm text-blue-800 font-secondary space-y-1">
          {navigationUsage.guidelines.map((guideline, index) => (
            <li key={index}>• {guideline}</li>
          ))}
        </ul>
      </div>
    </div>
  ),
};