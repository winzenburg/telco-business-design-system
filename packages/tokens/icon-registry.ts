// Comcast Business Design System - Icon Registry
// High-quality icon management system with proper type support

export interface IconMetadata {
  name: string;
  category: 'navigation' | 'status' | 'communication' | 'data' | 'media' | 'interface' | 'security' | 'general';
  description?: string;
  size?: { width: number; height: number };
  tags?: string[];
  source?: 'feather' | 'figma' | 'custom';
  sourceUrl?: string;
  license?: string;
}

// Core icon registry with commonly used icons
export const CORE_ICONS = {
  // Navigation
  'chevron': { 
    name: 'chevron', 
    category: 'navigation' as const, 
    description: 'Chevron arrow for navigation',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'arrow': { 
    name: 'arrow', 
    category: 'navigation' as const, 
    description: 'Basic arrow',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'backarrow': { 
    name: 'backarrow', 
    category: 'navigation' as const, 
    description: 'Back navigation arrow',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'doublechevron': { 
    name: 'doublechevron', 
    category: 'navigation' as const, 
    description: 'Double chevron for pagination',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'menu': { 
    name: 'menu', 
    category: 'navigation' as const, 
    description: 'Hamburger menu',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'globalnav': { 
    name: 'globalnav', 
    category: 'navigation' as const, 
    description: 'Global navigation',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Interface
  'close': { 
    name: 'close', 
    category: 'interface' as const, 
    description: 'Close/X button',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'check': { 
    name: 'check', 
    category: 'interface' as const, 
    description: 'Checkmark',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'plus': { 
    name: 'plus', 
    category: 'interface' as const, 
    description: 'Add/Plus button',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'minus': { 
    name: 'minus', 
    category: 'interface' as const, 
    description: 'Remove/Minus button',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'search': { 
    name: 'search', 
    category: 'interface' as const, 
    description: 'Search icon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'configure': { 
    name: 'configure', 
    category: 'interface' as const, 
    description: 'Settings/Configure',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'refresh': { 
    name: 'refresh', 
    category: 'interface' as const, 
    description: 'Refresh/Reload',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'download': { 
    name: 'download', 
    category: 'interface' as const, 
    description: 'Download',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'upload': { 
    name: 'upload', 
    category: 'interface' as const, 
    description: 'Upload',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'maximize': { 
    name: 'maximize', 
    category: 'interface' as const, 
    description: 'Maximize window',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'minimize': { 
    name: 'minimize', 
    category: 'interface' as const, 
    description: 'Minimize window',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sort': { 
    name: 'sort', 
    category: 'interface' as const, 
    description: 'Sort data',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'filteralt': { 
    name: 'filteralt', 
    category: 'interface' as const, 
    description: 'Filter',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'contextmenu': { 
    name: 'contextmenu', 
    category: 'interface' as const, 
    description: 'Context menu (3 dots)',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'grabber': { 
    name: 'grabber', 
    category: 'interface' as const, 
    description: 'Drag handle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Status & Feedback
  'alert': { 
    name: 'alert', 
    category: 'status' as const, 
    description: 'Alert/Warning',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'complete': { 
    name: 'complete', 
    category: 'status' as const, 
    description: 'Success/Complete',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'bell': { 
    name: 'bell', 
    category: 'status' as const, 
    description: 'Notifications',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'notifications': { 
    name: 'notifications', 
    category: 'status' as const, 
    description: 'Notification center',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feedback': { 
    name: 'feedback', 
    category: 'status' as const, 
    description: 'User feedback',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Communication
  'chat': { 
    name: 'chat', 
    category: 'communication' as const, 
    description: 'Chat/Message',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'message': { 
    name: 'message', 
    category: 'communication' as const, 
    description: 'Message',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'conference': { 
    name: 'conference', 
    category: 'communication' as const, 
    description: 'Conference call',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'video': { 
    name: 'video', 
    category: 'communication' as const, 
    description: 'Video',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'voicemail': { 
    name: 'voicemail', 
    category: 'communication' as const, 
    description: 'Voicemail',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Data & Documents
  'document': { 
    name: 'document', 
    category: 'data' as const, 
    description: 'Document',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'folder': { 
    name: 'folder', 
    category: 'data' as const, 
    description: 'Folder',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'clipboard': { 
    name: 'clipboard', 
    category: 'data' as const, 
    description: 'Clipboard',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'analytics': { 
    name: 'analytics', 
    category: 'data' as const, 
    description: 'Analytics/Charts',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'report': { 
    name: 'report', 
    category: 'data' as const, 
    description: 'Report',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'piechart': { 
    name: 'piechart', 
    category: 'data' as const, 
    description: 'Pie chart',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Security
  'blockers': { 
    name: 'blockers', 
    category: 'security' as const, 
    description: 'Security blockers',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'password': { 
    name: 'password', 
    category: 'security' as const, 
    description: 'Password',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'securityquestion': { 
    name: 'securityquestion', 
    category: 'security' as const, 
    description: 'Security question',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantlockedtypefilled': { 
    name: 'variantlockedtypefilled', 
    category: 'security' as const, 
    description: 'Locked (filled)',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantlockedtypeoutline': { 
    name: 'variantlockedtypeoutline', 
    category: 'security' as const, 
    description: 'Locked (outline)',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantunlockedtypefilled': { 
    name: 'variantunlockedtypefilled', 
    category: 'security' as const, 
    description: 'Unlocked (filled)',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantunlockedtypeoutline': { 
    name: 'variantunlockedtypeoutline', 
    category: 'security' as const, 
    description: 'Unlocked (outline)',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Media
  'avplay': { 
    name: 'avplay', 
    category: 'media' as const, 
    description: 'Play',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'avpause': { 
    name: 'avpause', 
    category: 'media' as const, 
    description: 'Pause',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'avstop': { 
    name: 'avstop', 
    category: 'media' as const, 
    description: 'Stop',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'avrecord': { 
    name: 'avrecord', 
    category: 'media' as const, 
    description: 'Record',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'playcircle': { 
    name: 'playcircle', 
    category: 'media' as const, 
    description: 'Play button (circle)',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'camera': { 
    name: 'camera', 
    category: 'media' as const, 
    description: 'Camera',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Business
  'wallet': { 
    name: 'wallet', 
    category: 'general' as const, 
    description: 'Wallet/Payment',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'paymentcard': { 
    name: 'paymentcard', 
    category: 'general' as const, 
    description: 'Payment card',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'money': { 
    name: 'money', 
    category: 'general' as const, 
    description: 'Money/Currency',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'fees': { 
    name: 'fees', 
    category: 'general' as const, 
    description: 'Fees',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'shoppingbag': { 
    name: 'shoppingbag', 
    category: 'general' as const, 
    description: 'Shopping bag',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'cartempty': { 
    name: 'cartempty', 
    category: 'general' as const, 
    description: 'Empty cart',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'pricetag': { 
    name: 'pricetag', 
    category: 'general' as const, 
    description: 'Price tag',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'percent': { 
    name: 'percent', 
    category: 'general' as const, 
    description: 'Percentage',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Technology
  'internet': { 
    name: 'internet', 
    category: 'general' as const, 
    description: 'Internet connection',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'wifi': { 
    name: 'wifi', 
    category: 'general' as const, 
    description: 'WiFi',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'ethernet': { 
    name: 'ethernet', 
    category: 'general' as const, 
    description: 'Ethernet connection',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'cloud': { 
    name: 'cloud', 
    category: 'general' as const, 
    description: 'Cloud',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'cloudupload': { 
    name: 'cloudupload', 
    category: 'general' as const, 
    description: 'Cloud upload',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'device': { 
    name: 'device', 
    category: 'general' as const, 
    description: 'Device',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'browser': { 
    name: 'browser', 
    category: 'general' as const, 
    description: 'Browser',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'portal': { 
    name: 'portal', 
    category: 'general' as const, 
    description: 'Portal',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  
  // Users & Account
  'users': { 
    name: 'users', 
    category: 'general' as const, 
    description: 'Users/People',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'login': { 
    name: 'login', 
    category: 'general' as const, 
    description: 'Login',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'logout': { 
    name: 'logout', 
    category: 'general' as const, 
    description: 'Logout',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'switchaccounts': { 
    name: 'switchaccounts', 
    category: 'general' as const, 
    description: 'Switch accounts',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },

  // Feather Icons - Communication
  'at-sign': { 
    name: 'at-sign', 
    category: 'communication' as const, 
    description: 'Feather icon: at sign',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'bell-off': { 
    name: 'bell-off', 
    category: 'communication' as const, 
    description: 'Feather icon: bell off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'headphones': { 
    name: 'headphones', 
    category: 'communication' as const, 
    description: 'Feather icon: headphones',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'mail': { 
    name: 'mail', 
    category: 'communication' as const, 
    description: 'Feather icon: mail',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'message-circle': { 
    name: 'message-circle', 
    category: 'communication' as const, 
    description: 'Feather icon: message circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'message-square': { 
    name: 'message-square', 
    category: 'communication' as const, 
    description: 'Feather icon: message square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'mic': { 
    name: 'mic', 
    category: 'communication' as const, 
    description: 'Feather icon: mic',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'mic-off': { 
    name: 'mic-off', 
    category: 'communication' as const, 
    description: 'Feather icon: mic off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'phone': { 
    name: 'phone', 
    category: 'communication' as const, 
    description: 'Feather icon: phone',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'phone-call': { 
    name: 'phone-call', 
    category: 'communication' as const, 
    description: 'Feather icon: phone call',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'phone-forwarded': { 
    name: 'phone-forwarded', 
    category: 'communication' as const, 
    description: 'Feather icon: phone forwarded',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'phone-incoming': { 
    name: 'phone-incoming', 
    category: 'communication' as const, 
    description: 'Feather icon: phone incoming',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'phone-missed': { 
    name: 'phone-missed', 
    category: 'communication' as const, 
    description: 'Feather icon: phone missed',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'phone-off': { 
    name: 'phone-off', 
    category: 'communication' as const, 
    description: 'Feather icon: phone off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'phone-outgoing': { 
    name: 'phone-outgoing', 
    category: 'communication' as const, 
    description: 'Feather icon: phone outgoing',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'rss': { 
    name: 'rss', 
    category: 'communication' as const, 
    description: 'Feather icon: rss',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'send': { 
    name: 'send', 
    category: 'communication' as const, 
    description: 'Feather icon: send',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'speaker': { 
    name: 'speaker', 
    category: 'communication' as const, 
    description: 'Feather icon: speaker',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'volume': { 
    name: 'volume', 
    category: 'communication' as const, 
    description: 'Feather icon: volume',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'volume-1': { 
    name: 'volume-1', 
    category: 'communication' as const, 
    description: 'Feather icon: volume 1',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'volume-2': { 
    name: 'volume-2', 
    category: 'communication' as const, 
    description: 'Feather icon: volume 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'volume-x': { 
    name: 'volume-x', 
    category: 'communication' as const, 
    description: 'Feather icon: volume x',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },

  // Feather Icons - Data
  'align-center': { 
    name: 'align-center', 
    category: 'data' as const, 
    description: 'Feather icon: align center',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'align-justify': { 
    name: 'align-justify', 
    category: 'data' as const, 
    description: 'Feather icon: align justify',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'align-left': { 
    name: 'align-left', 
    category: 'data' as const, 
    description: 'Feather icon: align left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'align-right': { 
    name: 'align-right', 
    category: 'data' as const, 
    description: 'Feather icon: align right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'bar-chart': { 
    name: 'bar-chart', 
    category: 'data' as const, 
    description: 'Feather icon: bar chart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'bar-chart-2': { 
    name: 'bar-chart-2', 
    category: 'data' as const, 
    description: 'Feather icon: bar chart 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'bold': { 
    name: 'bold', 
    category: 'data' as const, 
    description: 'Feather icon: bold',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'code': { 
    name: 'code', 
    category: 'data' as const, 
    description: 'Feather icon: code',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'columns': { 
    name: 'columns', 
    category: 'data' as const, 
    description: 'Feather icon: columns',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'database': { 
    name: 'database', 
    category: 'data' as const, 
    description: 'Feather icon: database',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'divide': { 
    name: 'divide', 
    category: 'data' as const, 
    description: 'Feather icon: divide',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'divide-circle': { 
    name: 'divide-circle', 
    category: 'data' as const, 
    description: 'Feather icon: divide circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'divide-square': { 
    name: 'divide-square', 
    category: 'data' as const, 
    description: 'Feather icon: divide square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'file': { 
    name: 'file', 
    category: 'data' as const, 
    description: 'Feather icon: file',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'file-minus': { 
    name: 'file-minus', 
    category: 'data' as const, 
    description: 'Feather icon: file minus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'file-plus': { 
    name: 'file-plus', 
    category: 'data' as const, 
    description: 'Feather icon: file plus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'file-text': { 
    name: 'file-text', 
    category: 'data' as const, 
    description: 'Feather icon: file text',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'folder-minus': { 
    name: 'folder-minus', 
    category: 'data' as const, 
    description: 'Feather icon: folder minus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'folder-plus': { 
    name: 'folder-plus', 
    category: 'data' as const, 
    description: 'Feather icon: folder plus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'grid': { 
    name: 'grid', 
    category: 'data' as const, 
    description: 'Feather icon: grid',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'hard-drive': { 
    name: 'hard-drive', 
    category: 'data' as const, 
    description: 'Feather icon: hard drive',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'hash': { 
    name: 'hash', 
    category: 'data' as const, 
    description: 'Feather icon: hash',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'italic': { 
    name: 'italic', 
    category: 'data' as const, 
    description: 'Feather icon: italic',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'layers': { 
    name: 'layers', 
    category: 'data' as const, 
    description: 'Feather icon: layers',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'list': { 
    name: 'list', 
    category: 'data' as const, 
    description: 'Feather icon: list',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'pie-chart': { 
    name: 'pie-chart', 
    category: 'data' as const, 
    description: 'Feather icon: pie chart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'server': { 
    name: 'server', 
    category: 'data' as const, 
    description: 'Feather icon: server',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'slash': { 
    name: 'slash', 
    category: 'data' as const, 
    description: 'Feather icon: slash',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'table': { 
    name: 'table', 
    category: 'data' as const, 
    description: 'Feather icon: table',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'terminal': { 
    name: 'terminal', 
    category: 'data' as const, 
    description: 'Feather icon: terminal',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'type': { 
    name: 'type', 
    category: 'data' as const, 
    description: 'Feather icon: type',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'underline': { 
    name: 'underline', 
    category: 'data' as const, 
    description: 'Feather icon: underline',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },

  // Feather Icons - General
  'anchor': { 
    name: 'anchor', 
    category: 'general' as const, 
    description: 'Feather icon: anchor',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'aperture': { 
    name: 'aperture', 
    category: 'general' as const, 
    description: 'Feather icon: aperture',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'archive': { 
    name: 'archive', 
    category: 'general' as const, 
    description: 'Feather icon: archive',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'bluetooth': { 
    name: 'bluetooth', 
    category: 'general' as const, 
    description: 'Feather icon: bluetooth',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'book': { 
    name: 'book', 
    category: 'general' as const, 
    description: 'Feather icon: book',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'book-open': { 
    name: 'book-open', 
    category: 'general' as const, 
    description: 'Feather icon: book open',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'box': { 
    name: 'box', 
    category: 'general' as const, 
    description: 'Feather icon: box',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'briefcase': { 
    name: 'briefcase', 
    category: 'general' as const, 
    description: 'Feather icon: briefcase',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'calendar': { 
    name: 'calendar', 
    category: 'general' as const, 
    description: 'Feather icon: calendar',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chrome': { 
    name: 'chrome', 
    category: 'general' as const, 
    description: 'Feather icon: chrome',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'clock': { 
    name: 'clock', 
    category: 'general' as const, 
    description: 'Feather icon: clock',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'cloud-drizzle': { 
    name: 'cloud-drizzle', 
    category: 'general' as const, 
    description: 'Feather icon: cloud drizzle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'cloud-lightning': { 
    name: 'cloud-lightning', 
    category: 'general' as const, 
    description: 'Feather icon: cloud lightning',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'cloud-off': { 
    name: 'cloud-off', 
    category: 'general' as const, 
    description: 'Feather icon: cloud off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'cloud-rain': { 
    name: 'cloud-rain', 
    category: 'general' as const, 
    description: 'Feather icon: cloud rain',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'cloud-snow': { 
    name: 'cloud-snow', 
    category: 'general' as const, 
    description: 'Feather icon: cloud snow',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'codepen': { 
    name: 'codepen', 
    category: 'general' as const, 
    description: 'Feather icon: codepen',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'codesandbox': { 
    name: 'codesandbox', 
    category: 'general' as const, 
    description: 'Feather icon: codesandbox',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'coffee': { 
    name: 'coffee', 
    category: 'general' as const, 
    description: 'Feather icon: coffee',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'command': { 
    name: 'command', 
    category: 'general' as const, 
    description: 'Feather icon: command',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'cpu': { 
    name: 'cpu', 
    category: 'general' as const, 
    description: 'Feather icon: cpu',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'credit-card': { 
    name: 'credit-card', 
    category: 'general' as const, 
    description: 'Feather icon: credit card',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'delete': { 
    name: 'delete', 
    category: 'general' as const, 
    description: 'Feather icon: delete',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'dollar-sign': { 
    name: 'dollar-sign', 
    category: 'general' as const, 
    description: 'Feather icon: dollar sign',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'dribbble': { 
    name: 'dribbble', 
    category: 'general' as const, 
    description: 'Feather icon: dribbble',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'droplet': { 
    name: 'droplet', 
    category: 'general' as const, 
    description: 'Feather icon: droplet',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'facebook': { 
    name: 'facebook', 
    category: 'general' as const, 
    description: 'Feather icon: facebook',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'feather': { 
    name: 'feather', 
    category: 'general' as const, 
    description: 'Feather icon: feather',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'figma': { 
    name: 'figma', 
    category: 'general' as const, 
    description: 'Feather icon: figma',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'framer': { 
    name: 'framer', 
    category: 'general' as const, 
    description: 'Feather icon: framer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'gift': { 
    name: 'gift', 
    category: 'general' as const, 
    description: 'Feather icon: gift',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'git-branch': { 
    name: 'git-branch', 
    category: 'general' as const, 
    description: 'Feather icon: git branch',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'git-commit': { 
    name: 'git-commit', 
    category: 'general' as const, 
    description: 'Feather icon: git commit',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'git-merge': { 
    name: 'git-merge', 
    category: 'general' as const, 
    description: 'Feather icon: git merge',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'git-pull-request': { 
    name: 'git-pull-request', 
    category: 'general' as const, 
    description: 'Feather icon: git pull request',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'github': { 
    name: 'github', 
    category: 'general' as const, 
    description: 'Feather icon: github',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'gitlab': { 
    name: 'gitlab', 
    category: 'general' as const, 
    description: 'Feather icon: gitlab',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'globe': { 
    name: 'globe', 
    category: 'general' as const, 
    description: 'Feather icon: globe',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'inbox': { 
    name: 'inbox', 
    category: 'general' as const, 
    description: 'Feather icon: inbox',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'instagram': { 
    name: 'instagram', 
    category: 'general' as const, 
    description: 'Feather icon: instagram',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'layout': { 
    name: 'layout', 
    category: 'general' as const, 
    description: 'Feather icon: layout',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'linkedin': { 
    name: 'linkedin', 
    category: 'general' as const, 
    description: 'Feather icon: linkedin',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'moon': { 
    name: 'moon', 
    category: 'general' as const, 
    description: 'Feather icon: moon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'package': { 
    name: 'package', 
    category: 'general' as const, 
    description: 'Feather icon: package',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'paperclip': { 
    name: 'paperclip', 
    category: 'general' as const, 
    description: 'Feather icon: paperclip',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'pocket': { 
    name: 'pocket', 
    category: 'general' as const, 
    description: 'Feather icon: pocket',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'power': { 
    name: 'power', 
    category: 'general' as const, 
    description: 'Feather icon: power',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'printer': { 
    name: 'printer', 
    category: 'general' as const, 
    description: 'Feather icon: printer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'shopping-bag': { 
    name: 'shopping-bag', 
    category: 'general' as const, 
    description: 'Feather icon: shopping bag',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'shopping-cart': { 
    name: 'shopping-cart', 
    category: 'general' as const, 
    description: 'Feather icon: shopping cart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'sidebar': { 
    name: 'sidebar', 
    category: 'general' as const, 
    description: 'Feather icon: sidebar',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'slack': { 
    name: 'slack', 
    category: 'general' as const, 
    description: 'Feather icon: slack',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'sun': { 
    name: 'sun', 
    category: 'general' as const, 
    description: 'Feather icon: sun',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'sunrise': { 
    name: 'sunrise', 
    category: 'general' as const, 
    description: 'Feather icon: sunrise',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'sunset': { 
    name: 'sunset', 
    category: 'general' as const, 
    description: 'Feather icon: sunset',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'thermometer': { 
    name: 'thermometer', 
    category: 'general' as const, 
    description: 'Feather icon: thermometer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'toggle-left': { 
    name: 'toggle-left', 
    category: 'general' as const, 
    description: 'Feather icon: toggle left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'toggle-right': { 
    name: 'toggle-right', 
    category: 'general' as const, 
    description: 'Feather icon: toggle right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'tool': { 
    name: 'tool', 
    category: 'general' as const, 
    description: 'Feather icon: tool',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'trash': { 
    name: 'trash', 
    category: 'general' as const, 
    description: 'Feather icon: trash',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'trash-2': { 
    name: 'trash-2', 
    category: 'general' as const, 
    description: 'Feather icon: trash 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'trello': { 
    name: 'trello', 
    category: 'general' as const, 
    description: 'Feather icon: trello',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'truck': { 
    name: 'truck', 
    category: 'general' as const, 
    description: 'Feather icon: truck',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'twitch': { 
    name: 'twitch', 
    category: 'general' as const, 
    description: 'Feather icon: twitch',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'twitter': { 
    name: 'twitter', 
    category: 'general' as const, 
    description: 'Feather icon: twitter',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'umbrella': { 
    name: 'umbrella', 
    category: 'general' as const, 
    description: 'Feather icon: umbrella',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'wind': { 
    name: 'wind', 
    category: 'general' as const, 
    description: 'Feather icon: wind',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'youtube': { 
    name: 'youtube', 
    category: 'general' as const, 
    description: 'Feather icon: youtube',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'zoom-in': { 
    name: 'zoom-in', 
    category: 'general' as const, 
    description: 'Feather icon: zoom in',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'zoom-out': { 
    name: 'zoom-out', 
    category: 'general' as const, 
    description: 'Feather icon: zoom out',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },

  // Feather Icons - Interface
  'bookmark': { 
    name: 'bookmark', 
    category: 'interface' as const, 
    description: 'Feather icon: bookmark',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'check-circle': { 
    name: 'check-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: check circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'check-square': { 
    name: 'check-square', 
    category: 'interface' as const, 
    description: 'Feather icon: check square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'copy': { 
    name: 'copy', 
    category: 'interface' as const, 
    description: 'Feather icon: copy',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'crop': { 
    name: 'crop', 
    category: 'interface' as const, 
    description: 'Feather icon: crop',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'download-cloud': { 
    name: 'download-cloud', 
    category: 'interface' as const, 
    description: 'Feather icon: download cloud',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'edit': { 
    name: 'edit', 
    category: 'interface' as const, 
    description: 'Feather icon: edit',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'edit-2': { 
    name: 'edit-2', 
    category: 'interface' as const, 
    description: 'Feather icon: edit 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'edit-3': { 
    name: 'edit-3', 
    category: 'interface' as const, 
    description: 'Feather icon: edit 3',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'external-link': { 
    name: 'external-link', 
    category: 'interface' as const, 
    description: 'Feather icon: external link',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'filter': { 
    name: 'filter', 
    category: 'interface' as const, 
    description: 'Feather icon: filter',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'flag': { 
    name: 'flag', 
    category: 'interface' as const, 
    description: 'Feather icon: flag',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'frown': { 
    name: 'frown', 
    category: 'interface' as const, 
    description: 'Feather icon: frown',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'heart': { 
    name: 'heart', 
    category: 'interface' as const, 
    description: 'Feather icon: heart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'link': { 
    name: 'link', 
    category: 'interface' as const, 
    description: 'Feather icon: link',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'link-2': { 
    name: 'link-2', 
    category: 'interface' as const, 
    description: 'Feather icon: link 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'maximize-2': { 
    name: 'maximize-2', 
    category: 'interface' as const, 
    description: 'Feather icon: maximize 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'meh': { 
    name: 'meh', 
    category: 'interface' as const, 
    description: 'Feather icon: meh',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'minimize-2': { 
    name: 'minimize-2', 
    category: 'interface' as const, 
    description: 'Feather icon: minimize 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'minus-circle': { 
    name: 'minus-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: minus circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'minus-square': { 
    name: 'minus-square', 
    category: 'interface' as const, 
    description: 'Feather icon: minus square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'more-horizontal': { 
    name: 'more-horizontal', 
    category: 'interface' as const, 
    description: 'Feather icon: more horizontal',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'more-vertical': { 
    name: 'more-vertical', 
    category: 'interface' as const, 
    description: 'Feather icon: more vertical',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'mouse-pointer': { 
    name: 'mouse-pointer', 
    category: 'interface' as const, 
    description: 'Feather icon: mouse pointer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'move': { 
    name: 'move', 
    category: 'interface' as const, 
    description: 'Feather icon: move',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'pen-tool': { 
    name: 'pen-tool', 
    category: 'interface' as const, 
    description: 'Feather icon: pen tool',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'plus-circle': { 
    name: 'plus-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: plus circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'plus-square': { 
    name: 'plus-square', 
    category: 'interface' as const, 
    description: 'Feather icon: plus square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'refresh-ccw': { 
    name: 'refresh-ccw', 
    category: 'interface' as const, 
    description: 'Feather icon: refresh ccw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'refresh-cw': { 
    name: 'refresh-cw', 
    category: 'interface' as const, 
    description: 'Feather icon: refresh cw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'rotate-ccw': { 
    name: 'rotate-ccw', 
    category: 'interface' as const, 
    description: 'Feather icon: rotate ccw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'rotate-cw': { 
    name: 'rotate-cw', 
    category: 'interface' as const, 
    description: 'Feather icon: rotate cw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'save': { 
    name: 'save', 
    category: 'interface' as const, 
    description: 'Feather icon: save',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'scissors': { 
    name: 'scissors', 
    category: 'interface' as const, 
    description: 'Feather icon: scissors',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'settings': { 
    name: 'settings', 
    category: 'interface' as const, 
    description: 'Feather icon: settings',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'share': { 
    name: 'share', 
    category: 'interface' as const, 
    description: 'Feather icon: share',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'share-2': { 
    name: 'share-2', 
    category: 'interface' as const, 
    description: 'Feather icon: share 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'sliders': { 
    name: 'sliders', 
    category: 'interface' as const, 
    description: 'Feather icon: sliders',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'smile': { 
    name: 'smile', 
    category: 'interface' as const, 
    description: 'Feather icon: smile',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'star': { 
    name: 'star', 
    category: 'interface' as const, 
    description: 'Feather icon: star',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'tag': { 
    name: 'tag', 
    category: 'interface' as const, 
    description: 'Feather icon: tag',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'thumbs-down': { 
    name: 'thumbs-down', 
    category: 'interface' as const, 
    description: 'Feather icon: thumbs down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'thumbs-up': { 
    name: 'thumbs-up', 
    category: 'interface' as const, 
    description: 'Feather icon: thumbs up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'upload-cloud': { 
    name: 'upload-cloud', 
    category: 'interface' as const, 
    description: 'Feather icon: upload cloud',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'x': { 
    name: 'x', 
    category: 'interface' as const, 
    description: 'Feather icon: x',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'x-circle': { 
    name: 'x-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: x circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'x-octagon': { 
    name: 'x-octagon', 
    category: 'interface' as const, 
    description: 'Feather icon: x octagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'x-square': { 
    name: 'x-square', 
    category: 'interface' as const, 
    description: 'Feather icon: x square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'zap': { 
    name: 'zap', 
    category: 'interface' as const, 
    description: 'Feather icon: zap',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'zap-off': { 
    name: 'zap-off', 
    category: 'interface' as const, 
    description: 'Feather icon: zap off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },

  // Feather Icons - Media
  'airplay': { 
    name: 'airplay', 
    category: 'media' as const, 
    description: 'Feather icon: airplay',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'camera-off': { 
    name: 'camera-off', 
    category: 'media' as const, 
    description: 'Feather icon: camera off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'cast': { 
    name: 'cast', 
    category: 'media' as const, 
    description: 'Feather icon: cast',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'disc': { 
    name: 'disc', 
    category: 'media' as const, 
    description: 'Feather icon: disc',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'fast-forward': { 
    name: 'fast-forward', 
    category: 'media' as const, 
    description: 'Feather icon: fast forward',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'film': { 
    name: 'film', 
    category: 'media' as const, 
    description: 'Feather icon: film',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'image': { 
    name: 'image', 
    category: 'media' as const, 
    description: 'Feather icon: image',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'monitor': { 
    name: 'monitor', 
    category: 'media' as const, 
    description: 'Feather icon: monitor',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'music': { 
    name: 'music', 
    category: 'media' as const, 
    description: 'Feather icon: music',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'pause': { 
    name: 'pause', 
    category: 'media' as const, 
    description: 'Feather icon: pause',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'pause-circle': { 
    name: 'pause-circle', 
    category: 'media' as const, 
    description: 'Feather icon: pause circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'play': { 
    name: 'play', 
    category: 'media' as const, 
    description: 'Feather icon: play',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'play-circle': { 
    name: 'play-circle', 
    category: 'media' as const, 
    description: 'Feather icon: play circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'radio': { 
    name: 'radio', 
    category: 'media' as const, 
    description: 'Feather icon: radio',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'repeat': { 
    name: 'repeat', 
    category: 'media' as const, 
    description: 'Feather icon: repeat',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'rewind': { 
    name: 'rewind', 
    category: 'media' as const, 
    description: 'Feather icon: rewind',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'shuffle': { 
    name: 'shuffle', 
    category: 'media' as const, 
    description: 'Feather icon: shuffle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'skip-back': { 
    name: 'skip-back', 
    category: 'media' as const, 
    description: 'Feather icon: skip back',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'skip-forward': { 
    name: 'skip-forward', 
    category: 'media' as const, 
    description: 'Feather icon: skip forward',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'smartphone': { 
    name: 'smartphone', 
    category: 'media' as const, 
    description: 'Feather icon: smartphone',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'stop-circle': { 
    name: 'stop-circle', 
    category: 'media' as const, 
    description: 'Feather icon: stop circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'tablet': { 
    name: 'tablet', 
    category: 'media' as const, 
    description: 'Feather icon: tablet',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'tv': { 
    name: 'tv', 
    category: 'media' as const, 
    description: 'Feather icon: tv',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'video-off': { 
    name: 'video-off', 
    category: 'media' as const, 
    description: 'Feather icon: video off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'watch': { 
    name: 'watch', 
    category: 'media' as const, 
    description: 'Feather icon: watch',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },

  // Feather Icons - Navigation
  'arrow-down': { 
    name: 'arrow-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-down-circle': { 
    name: 'arrow-down-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-down-left': { 
    name: 'arrow-down-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-down-right': { 
    name: 'arrow-down-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-left': { 
    name: 'arrow-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-left-circle': { 
    name: 'arrow-left-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow left circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-right': { 
    name: 'arrow-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-right-circle': { 
    name: 'arrow-right-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow right circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-up': { 
    name: 'arrow-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-up-circle': { 
    name: 'arrow-up-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-up-left': { 
    name: 'arrow-up-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'arrow-up-right': { 
    name: 'arrow-up-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevron-down': { 
    name: 'chevron-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevron-left': { 
    name: 'chevron-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevron-right': { 
    name: 'chevron-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevron-up': { 
    name: 'chevron-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevrons-down': { 
    name: 'chevrons-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevrons-left': { 
    name: 'chevrons-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevrons-right': { 
    name: 'chevrons-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'chevrons-up': { 
    name: 'chevrons-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'compass': { 
    name: 'compass', 
    category: 'navigation' as const, 
    description: 'Feather icon: compass',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-down-left': { 
    name: 'corner-down-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner down left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-down-right': { 
    name: 'corner-down-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner down right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-left-down': { 
    name: 'corner-left-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner left down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-left-up': { 
    name: 'corner-left-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner left up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-right-down': { 
    name: 'corner-right-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner right down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-right-up': { 
    name: 'corner-right-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner right up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-up-left': { 
    name: 'corner-up-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner up left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'corner-up-right': { 
    name: 'corner-up-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner up right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'crosshair': { 
    name: 'crosshair', 
    category: 'navigation' as const, 
    description: 'Feather icon: crosshair',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'home': { 
    name: 'home', 
    category: 'navigation' as const, 
    description: 'Feather icon: home',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'map': { 
    name: 'map', 
    category: 'navigation' as const, 
    description: 'Feather icon: map',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'map-pin': { 
    name: 'map-pin', 
    category: 'navigation' as const, 
    description: 'Feather icon: map pin',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'navigation': { 
    name: 'navigation', 
    category: 'navigation' as const, 
    description: 'Feather icon: navigation',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'navigation-2': { 
    name: 'navigation-2', 
    category: 'navigation' as const, 
    description: 'Feather icon: navigation 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'target': { 
    name: 'target', 
    category: 'navigation' as const, 
    description: 'Feather icon: target',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },

  // Feather Icons - Security
  'award': { 
    name: 'award', 
    category: 'security' as const, 
    description: 'Feather icon: award',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'eye': { 
    name: 'eye', 
    category: 'security' as const, 
    description: 'Feather icon: eye',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'eye-off': { 
    name: 'eye-off', 
    category: 'security' as const, 
    description: 'Feather icon: eye off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'log-in': { 
    name: 'log-in', 
    category: 'security' as const, 
    description: 'Feather icon: log in',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'log-out': { 
    name: 'log-out', 
    category: 'security' as const, 
    description: 'Feather icon: log out',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'user': { 
    name: 'user', 
    category: 'security' as const, 
    description: 'Feather icon: user',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'user-check': { 
    name: 'user-check', 
    category: 'security' as const, 
    description: 'Feather icon: user check',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'user-minus': { 
    name: 'user-minus', 
    category: 'security' as const, 
    description: 'Feather icon: user minus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'user-plus': { 
    name: 'user-plus', 
    category: 'security' as const, 
    description: 'Feather icon: user plus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'user-x': { 
    name: 'user-x', 
    category: 'security' as const, 
    description: 'Feather icon: user x',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },

  // Feather Icons - Status
  'activity': { 
    name: 'activity', 
    category: 'status' as const, 
    description: 'Feather icon: activity',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'alert-circle': { 
    name: 'alert-circle', 
    category: 'status' as const, 
    description: 'Feather icon: alert circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'alert-octagon': { 
    name: 'alert-octagon', 
    category: 'status' as const, 
    description: 'Feather icon: alert octagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'alert-triangle': { 
    name: 'alert-triangle', 
    category: 'status' as const, 
    description: 'Feather icon: alert triangle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'battery': { 
    name: 'battery', 
    category: 'status' as const, 
    description: 'Feather icon: battery',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'battery-charging': { 
    name: 'battery-charging', 
    category: 'status' as const, 
    description: 'Feather icon: battery charging',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'circle': { 
    name: 'circle', 
    category: 'status' as const, 
    description: 'Feather icon: circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'help-circle': { 
    name: 'help-circle', 
    category: 'status' as const, 
    description: 'Feather icon: help circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'hexagon': { 
    name: 'hexagon', 
    category: 'status' as const, 
    description: 'Feather icon: hexagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'info': { 
    name: 'info', 
    category: 'status' as const, 
    description: 'Feather icon: info',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'key': { 
    name: 'key', 
    category: 'status' as const, 
    description: 'Feather icon: key',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'life-buoy': { 
    name: 'life-buoy', 
    category: 'status' as const, 
    description: 'Feather icon: life buoy',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'loader': { 
    name: 'loader', 
    category: 'status' as const, 
    description: 'Feather icon: loader',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'lock': { 
    name: 'lock', 
    category: 'status' as const, 
    description: 'Feather icon: lock',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'octagon': { 
    name: 'octagon', 
    category: 'status' as const, 
    description: 'Feather icon: octagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'shield': { 
    name: 'shield', 
    category: 'status' as const, 
    description: 'Feather icon: shield',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'shield-off': { 
    name: 'shield-off', 
    category: 'status' as const, 
    description: 'Feather icon: shield off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'square': { 
    name: 'square', 
    category: 'status' as const, 
    description: 'Feather icon: square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'trending-down': { 
    name: 'trending-down', 
    category: 'status' as const, 
    description: 'Feather icon: trending down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'trending-up': { 
    name: 'trending-up', 
    category: 'status' as const, 
    description: 'Feather icon: trending up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'triangle': { 
    name: 'triangle', 
    category: 'status' as const, 
    description: 'Feather icon: triangle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'unlock': { 
    name: 'unlock', 
    category: 'status' as const, 
    description: 'Feather icon: unlock',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  },
  'wifi-off': { 
    name: 'wifi-off', 
    category: 'status' as const, 
    description: 'Feather icon: wifi off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  }} as const;

// Type for icon names
export type CoreIconName = keyof typeof CORE_ICONS;

// Get all available icons from the assets directory
export const getAllAvailableIcons = (): string[] => {
  // This would normally be generated at build time
  // For now, we'll return the core icons
  return Object.keys(CORE_ICONS);
};

// Icon utilities
export const getIconMetadata = (name: CoreIconName): IconMetadata => {
  return CORE_ICONS[name];
};

export const getIconsByCategory = (category: IconMetadata['category']): IconMetadata[] => {
  return Object.values(CORE_ICONS).filter(icon => icon.category === category);
};

export const searchIcons = (query: string): IconMetadata[] => {
  const lowercaseQuery = query.toLowerCase();
  return Object.values(CORE_ICONS).filter(icon =>
    icon.name.toLowerCase().includes(lowercaseQuery) ||
    icon.description?.toLowerCase().includes(lowercaseQuery) ||
    icon.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Icon path helper
export const getIconPath = (name: string): string => {
  return `/icons/${name}.svg`;
};

// Preload critical icons
export const CRITICAL_ICONS: CoreIconName[] = [
  'chevron',
  'close',
  'check',
  'plus',
  'minus',
  'search',
  'alert',
  'menu',
  'bell',
  'configure'
];