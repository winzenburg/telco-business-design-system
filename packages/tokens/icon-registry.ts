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
    fileName: 'feather-at-sign.svg',
    license: 'MIT'
  },
  'bell-off': { 
    name: 'bell-off', 
    category: 'communication' as const, 
    description: 'Feather icon: bell off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-bell-off.svg',
    license: 'MIT'
  },
  'headphones': { 
    name: 'headphones', 
    category: 'communication' as const, 
    description: 'Feather icon: headphones',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-headphones.svg',
    license: 'MIT'
  },
  'mail': { 
    name: 'mail', 
    category: 'communication' as const, 
    description: 'Feather icon: mail',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-mail.svg',
    license: 'MIT'
  },
  'message-circle': { 
    name: 'message-circle', 
    category: 'communication' as const, 
    description: 'Feather icon: message circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-message-circle.svg',
    license: 'MIT'
  },
  'message-square': { 
    name: 'message-square', 
    category: 'communication' as const, 
    description: 'Feather icon: message square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-message-square.svg',
    license: 'MIT'
  },
  'mic': { 
    name: 'mic', 
    category: 'communication' as const, 
    description: 'Feather icon: mic',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-mic.svg',
    license: 'MIT'
  },
  'mic-off': { 
    name: 'mic-off', 
    category: 'communication' as const, 
    description: 'Feather icon: mic off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-mic-off.svg',
    license: 'MIT'
  },
  'phone': { 
    name: 'phone', 
    category: 'communication' as const, 
    description: 'Feather icon: phone',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-phone.svg',
    license: 'MIT'
  },
  'phone-call': { 
    name: 'phone-call', 
    category: 'communication' as const, 
    description: 'Feather icon: phone call',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-phone-call.svg',
    license: 'MIT'
  },
  'phone-forwarded': { 
    name: 'phone-forwarded', 
    category: 'communication' as const, 
    description: 'Feather icon: phone forwarded',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-phone-forwarded.svg',
    license: 'MIT'
  },
  'phone-incoming': { 
    name: 'phone-incoming', 
    category: 'communication' as const, 
    description: 'Feather icon: phone incoming',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-phone-incoming.svg',
    license: 'MIT'
  },
  'phone-missed': { 
    name: 'phone-missed', 
    category: 'communication' as const, 
    description: 'Feather icon: phone missed',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-phone-missed.svg',
    license: 'MIT'
  },
  'phone-off': { 
    name: 'phone-off', 
    category: 'communication' as const, 
    description: 'Feather icon: phone off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-phone-off.svg',
    license: 'MIT'
  },
  'phone-outgoing': { 
    name: 'phone-outgoing', 
    category: 'communication' as const, 
    description: 'Feather icon: phone outgoing',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-phone-outgoing.svg',
    license: 'MIT'
  },
  'rss': { 
    name: 'rss', 
    category: 'communication' as const, 
    description: 'Feather icon: rss',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-rss.svg',
    license: 'MIT'
  },
  'send': { 
    name: 'send', 
    category: 'communication' as const, 
    description: 'Feather icon: send',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-send.svg',
    license: 'MIT'
  },
  'speaker': { 
    name: 'speaker', 
    category: 'communication' as const, 
    description: 'Feather icon: speaker',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-speaker.svg',
    license: 'MIT'
  },
  'volume': { 
    name: 'volume', 
    category: 'communication' as const, 
    description: 'Feather icon: volume',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-volume.svg',
    license: 'MIT'
  },
  'volume-1': { 
    name: 'volume-1', 
    category: 'communication' as const, 
    description: 'Feather icon: volume 1',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-volume-1.svg',
    license: 'MIT'
  },
  'volume-2': { 
    name: 'volume-2', 
    category: 'communication' as const, 
    description: 'Feather icon: volume 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-volume-2.svg',
    license: 'MIT'
  },
  'volume-x': { 
    name: 'volume-x', 
    category: 'communication' as const, 
    description: 'Feather icon: volume x',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-volume-x.svg',
    license: 'MIT'
  },

  // Feather Icons - Data
  'align-center': { 
    name: 'align-center', 
    category: 'data' as const, 
    description: 'Feather icon: align center',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-align-center.svg',
    license: 'MIT'
  },
  'align-justify': { 
    name: 'align-justify', 
    category: 'data' as const, 
    description: 'Feather icon: align justify',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-align-justify.svg',
    license: 'MIT'
  },
  'align-left': { 
    name: 'align-left', 
    category: 'data' as const, 
    description: 'Feather icon: align left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-align-left.svg',
    license: 'MIT'
  },
  'align-right': { 
    name: 'align-right', 
    category: 'data' as const, 
    description: 'Feather icon: align right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-align-right.svg',
    license: 'MIT'
  },
  'bar-chart': { 
    name: 'bar-chart', 
    category: 'data' as const, 
    description: 'Feather icon: bar chart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-bar-chart.svg',
    license: 'MIT'
  },
  'bar-chart-2': { 
    name: 'bar-chart-2', 
    category: 'data' as const, 
    description: 'Feather icon: bar chart 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-bar-chart-2.svg',
    license: 'MIT'
  },
  'bold': { 
    name: 'bold', 
    category: 'data' as const, 
    description: 'Feather icon: bold',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-bold.svg',
    license: 'MIT'
  },
  'code': { 
    name: 'code', 
    category: 'data' as const, 
    description: 'Feather icon: code',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-code.svg',
    license: 'MIT'
  },
  'columns': { 
    name: 'columns', 
    category: 'data' as const, 
    description: 'Feather icon: columns',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-columns.svg',
    license: 'MIT'
  },
  'database': { 
    name: 'database', 
    category: 'data' as const, 
    description: 'Feather icon: database',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-database.svg',
    license: 'MIT'
  },
  'divide': { 
    name: 'divide', 
    category: 'data' as const, 
    description: 'Feather icon: divide',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-divide.svg',
    license: 'MIT'
  },
  'divide-circle': { 
    name: 'divide-circle', 
    category: 'data' as const, 
    description: 'Feather icon: divide circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-divide-circle.svg',
    license: 'MIT'
  },
  'divide-square': { 
    name: 'divide-square', 
    category: 'data' as const, 
    description: 'Feather icon: divide square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-divide-square.svg',
    license: 'MIT'
  },
  'file': { 
    name: 'file', 
    category: 'data' as const, 
    description: 'Feather icon: file',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-file.svg',
    license: 'MIT'
  },
  'file-minus': { 
    name: 'file-minus', 
    category: 'data' as const, 
    description: 'Feather icon: file minus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-file-minus.svg',
    license: 'MIT'
  },
  'file-plus': { 
    name: 'file-plus', 
    category: 'data' as const, 
    description: 'Feather icon: file plus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-file-plus.svg',
    license: 'MIT'
  },
  'file-text': { 
    name: 'file-text', 
    category: 'data' as const, 
    description: 'Feather icon: file text',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-file-text.svg',
    license: 'MIT'
  },
  'folder-minus': { 
    name: 'folder-minus', 
    category: 'data' as const, 
    description: 'Feather icon: folder minus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-folder-minus.svg',
    license: 'MIT'
  },
  'folder-plus': { 
    name: 'folder-plus', 
    category: 'data' as const, 
    description: 'Feather icon: folder plus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-folder-plus.svg',
    license: 'MIT'
  },
  'grid': { 
    name: 'grid', 
    category: 'data' as const, 
    description: 'Feather icon: grid',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-grid.svg',
    license: 'MIT'
  },
  'hard-drive': { 
    name: 'hard-drive', 
    category: 'data' as const, 
    description: 'Feather icon: hard drive',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-hard-drive.svg',
    license: 'MIT'
  },
  'hash': { 
    name: 'hash', 
    category: 'data' as const, 
    description: 'Feather icon: hash',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-hash.svg',
    license: 'MIT'
  },
  'italic': { 
    name: 'italic', 
    category: 'data' as const, 
    description: 'Feather icon: italic',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-italic.svg',
    license: 'MIT'
  },
  'layers': { 
    name: 'layers', 
    category: 'data' as const, 
    description: 'Feather icon: layers',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-layers.svg',
    license: 'MIT'
  },
  'list': { 
    name: 'list', 
    category: 'data' as const, 
    description: 'Feather icon: list',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-list.svg',
    license: 'MIT'
  },
  'pie-chart': { 
    name: 'pie-chart', 
    category: 'data' as const, 
    description: 'Feather icon: pie chart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-pie-chart.svg',
    license: 'MIT'
  },
  'server': { 
    name: 'server', 
    category: 'data' as const, 
    description: 'Feather icon: server',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-server.svg',
    license: 'MIT'
  },
  'slash': { 
    name: 'slash', 
    category: 'data' as const, 
    description: 'Feather icon: slash',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-slash.svg',
    license: 'MIT'
  },
  'table': { 
    name: 'table', 
    category: 'data' as const, 
    description: 'Feather icon: table',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-table.svg',
    license: 'MIT'
  },
  'terminal': { 
    name: 'terminal', 
    category: 'data' as const, 
    description: 'Feather icon: terminal',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-terminal.svg',
    license: 'MIT'
  },
  'type': { 
    name: 'type', 
    category: 'data' as const, 
    description: 'Feather icon: type',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-type.svg',
    license: 'MIT'
  },
  'underline': { 
    name: 'underline', 
    category: 'data' as const, 
    description: 'Feather icon: underline',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-underline.svg',
    license: 'MIT'
  },

  // Feather Icons - General
  'anchor': { 
    name: 'anchor', 
    category: 'general' as const, 
    description: 'Feather icon: anchor',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-anchor.svg',
    license: 'MIT'
  },
  'aperture': { 
    name: 'aperture', 
    category: 'general' as const, 
    description: 'Feather icon: aperture',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-aperture.svg',
    license: 'MIT'
  },
  'archive': { 
    name: 'archive', 
    category: 'general' as const, 
    description: 'Feather icon: archive',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-archive.svg',
    license: 'MIT'
  },
  'bluetooth': { 
    name: 'bluetooth', 
    category: 'general' as const, 
    description: 'Feather icon: bluetooth',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-bluetooth.svg',
    license: 'MIT'
  },
  'book': { 
    name: 'book', 
    category: 'general' as const, 
    description: 'Feather icon: book',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-book.svg',
    license: 'MIT'
  },
  'book-open': { 
    name: 'book-open', 
    category: 'general' as const, 
    description: 'Feather icon: book open',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-book-open.svg',
    license: 'MIT'
  },
  'box': { 
    name: 'box', 
    category: 'general' as const, 
    description: 'Feather icon: box',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-box.svg',
    license: 'MIT'
  },
  'briefcase': { 
    name: 'briefcase', 
    category: 'general' as const, 
    description: 'Feather icon: briefcase',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-briefcase.svg',
    license: 'MIT'
  },
  'calendar': { 
    name: 'calendar', 
    category: 'general' as const, 
    description: 'Feather icon: calendar',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-calendar.svg',
    license: 'MIT'
  },
  'chrome': { 
    name: 'chrome', 
    category: 'general' as const, 
    description: 'Feather icon: chrome',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chrome.svg',
    license: 'MIT'
  },
  'clock': { 
    name: 'clock', 
    category: 'general' as const, 
    description: 'Feather icon: clock',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-clock.svg',
    license: 'MIT'
  },
  'cloud-drizzle': { 
    name: 'cloud-drizzle', 
    category: 'general' as const, 
    description: 'Feather icon: cloud drizzle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-cloud-drizzle.svg',
    license: 'MIT'
  },
  'cloud-lightning': { 
    name: 'cloud-lightning', 
    category: 'general' as const, 
    description: 'Feather icon: cloud lightning',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-cloud-lightning.svg',
    license: 'MIT'
  },
  'cloud-off': { 
    name: 'cloud-off', 
    category: 'general' as const, 
    description: 'Feather icon: cloud off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-cloud-off.svg',
    license: 'MIT'
  },
  'cloud-rain': { 
    name: 'cloud-rain', 
    category: 'general' as const, 
    description: 'Feather icon: cloud rain',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-cloud-rain.svg',
    license: 'MIT'
  },
  'cloud-snow': { 
    name: 'cloud-snow', 
    category: 'general' as const, 
    description: 'Feather icon: cloud snow',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-cloud-snow.svg',
    license: 'MIT'
  },
  'codepen': { 
    name: 'codepen', 
    category: 'general' as const, 
    description: 'Feather icon: codepen',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-codepen.svg',
    license: 'MIT'
  },
  'codesandbox': { 
    name: 'codesandbox', 
    category: 'general' as const, 
    description: 'Feather icon: codesandbox',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-codesandbox.svg',
    license: 'MIT'
  },
  'coffee': { 
    name: 'coffee', 
    category: 'general' as const, 
    description: 'Feather icon: coffee',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-coffee.svg',
    license: 'MIT'
  },
  'command': { 
    name: 'command', 
    category: 'general' as const, 
    description: 'Feather icon: command',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-command.svg',
    license: 'MIT'
  },
  'cpu': { 
    name: 'cpu', 
    category: 'general' as const, 
    description: 'Feather icon: cpu',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-cpu.svg',
    license: 'MIT'
  },
  'credit-card': { 
    name: 'credit-card', 
    category: 'general' as const, 
    description: 'Feather icon: credit card',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-credit-card.svg',
    license: 'MIT'
  },
  'delete': { 
    name: 'delete', 
    category: 'general' as const, 
    description: 'Feather icon: delete',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-delete.svg',
    license: 'MIT'
  },
  'dollar-sign': { 
    name: 'dollar-sign', 
    category: 'general' as const, 
    description: 'Feather icon: dollar sign',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-dollar-sign.svg',
    license: 'MIT'
  },
  'dribbble': { 
    name: 'dribbble', 
    category: 'general' as const, 
    description: 'Feather icon: dribbble',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-dribbble.svg',
    license: 'MIT'
  },
  'droplet': { 
    name: 'droplet', 
    category: 'general' as const, 
    description: 'Feather icon: droplet',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-droplet.svg',
    license: 'MIT'
  },
  'facebook': { 
    name: 'facebook', 
    category: 'general' as const, 
    description: 'Feather icon: facebook',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-facebook.svg',
    license: 'MIT'
  },
  'feather': { 
    name: 'feather', 
    category: 'general' as const, 
    description: 'Feather icon: feather',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-feather.svg',
    license: 'MIT'
  },
  'figma': { 
    name: 'figma', 
    category: 'general' as const, 
    description: 'Feather icon: figma',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-figma.svg',
    license: 'MIT'
  },
  'framer': { 
    name: 'framer', 
    category: 'general' as const, 
    description: 'Feather icon: framer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-framer.svg',
    license: 'MIT'
  },
  'gift': { 
    name: 'gift', 
    category: 'general' as const, 
    description: 'Feather icon: gift',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-gift.svg',
    license: 'MIT'
  },
  'git-branch': { 
    name: 'git-branch', 
    category: 'general' as const, 
    description: 'Feather icon: git branch',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-git-branch.svg',
    license: 'MIT'
  },
  'git-commit': { 
    name: 'git-commit', 
    category: 'general' as const, 
    description: 'Feather icon: git commit',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-git-commit.svg',
    license: 'MIT'
  },
  'git-merge': { 
    name: 'git-merge', 
    category: 'general' as const, 
    description: 'Feather icon: git merge',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-git-merge.svg',
    license: 'MIT'
  },
  'git-pull-request': { 
    name: 'git-pull-request', 
    category: 'general' as const, 
    description: 'Feather icon: git pull request',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-git-pull-request.svg',
    license: 'MIT'
  },
  'github': { 
    name: 'github', 
    category: 'general' as const, 
    description: 'Feather icon: github',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-github.svg',
    license: 'MIT'
  },
  'gitlab': { 
    name: 'gitlab', 
    category: 'general' as const, 
    description: 'Feather icon: gitlab',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-gitlab.svg',
    license: 'MIT'
  },
  'globe': { 
    name: 'globe', 
    category: 'general' as const, 
    description: 'Feather icon: globe',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-globe.svg',
    license: 'MIT'
  },
  'inbox': { 
    name: 'inbox', 
    category: 'general' as const, 
    description: 'Feather icon: inbox',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-inbox.svg',
    license: 'MIT'
  },
  'instagram': { 
    name: 'instagram', 
    category: 'general' as const, 
    description: 'Feather icon: instagram',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-instagram.svg',
    license: 'MIT'
  },
  'layout': { 
    name: 'layout', 
    category: 'general' as const, 
    description: 'Feather icon: layout',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-layout.svg',
    license: 'MIT'
  },
  'linkedin': { 
    name: 'linkedin', 
    category: 'general' as const, 
    description: 'Feather icon: linkedin',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-linkedin.svg',
    license: 'MIT'
  },
  'moon': { 
    name: 'moon', 
    category: 'general' as const, 
    description: 'Feather icon: moon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-moon.svg',
    license: 'MIT'
  },
  'package': { 
    name: 'package', 
    category: 'general' as const, 
    description: 'Feather icon: package',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-package.svg',
    license: 'MIT'
  },
  'paperclip': { 
    name: 'paperclip', 
    category: 'general' as const, 
    description: 'Feather icon: paperclip',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-paperclip.svg',
    license: 'MIT'
  },
  'pocket': { 
    name: 'pocket', 
    category: 'general' as const, 
    description: 'Feather icon: pocket',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-pocket.svg',
    license: 'MIT'
  },
  'power': { 
    name: 'power', 
    category: 'general' as const, 
    description: 'Feather icon: power',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-power.svg',
    license: 'MIT'
  },
  'printer': { 
    name: 'printer', 
    category: 'general' as const, 
    description: 'Feather icon: printer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-printer.svg',
    license: 'MIT'
  },
  'shopping-bag': { 
    name: 'shopping-bag', 
    category: 'general' as const, 
    description: 'Feather icon: shopping bag',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-shopping-bag.svg',
    license: 'MIT'
  },
  'shopping-cart': { 
    name: 'shopping-cart', 
    category: 'general' as const, 
    description: 'Feather icon: shopping cart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-shopping-cart.svg',
    license: 'MIT'
  },
  'sidebar': { 
    name: 'sidebar', 
    category: 'general' as const, 
    description: 'Feather icon: sidebar',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-sidebar.svg',
    license: 'MIT'
  },
  'slack': { 
    name: 'slack', 
    category: 'general' as const, 
    description: 'Feather icon: slack',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-slack.svg',
    license: 'MIT'
  },
  'sun': { 
    name: 'sun', 
    category: 'general' as const, 
    description: 'Feather icon: sun',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-sun.svg',
    license: 'MIT'
  },
  'sunrise': { 
    name: 'sunrise', 
    category: 'general' as const, 
    description: 'Feather icon: sunrise',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-sunrise.svg',
    license: 'MIT'
  },
  'sunset': { 
    name: 'sunset', 
    category: 'general' as const, 
    description: 'Feather icon: sunset',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-sunset.svg',
    license: 'MIT'
  },
  'thermometer': { 
    name: 'thermometer', 
    category: 'general' as const, 
    description: 'Feather icon: thermometer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-thermometer.svg',
    license: 'MIT'
  },
  'toggle-left': { 
    name: 'toggle-left', 
    category: 'general' as const, 
    description: 'Feather icon: toggle left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-toggle-left.svg',
    license: 'MIT'
  },
  'toggle-right': { 
    name: 'toggle-right', 
    category: 'general' as const, 
    description: 'Feather icon: toggle right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-toggle-right.svg',
    license: 'MIT'
  },
  'tool': { 
    name: 'tool', 
    category: 'general' as const, 
    description: 'Feather icon: tool',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-tool.svg',
    license: 'MIT'
  },
  'trash': { 
    name: 'trash', 
    category: 'general' as const, 
    description: 'Feather icon: trash',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-trash.svg',
    license: 'MIT'
  },
  'trash-2': { 
    name: 'trash-2', 
    category: 'general' as const, 
    description: 'Feather icon: trash 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-trash-2.svg',
    license: 'MIT'
  },
  'trello': { 
    name: 'trello', 
    category: 'general' as const, 
    description: 'Feather icon: trello',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-trello.svg',
    license: 'MIT'
  },
  'truck': { 
    name: 'truck', 
    category: 'general' as const, 
    description: 'Feather icon: truck',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-truck.svg',
    license: 'MIT'
  },
  'twitch': { 
    name: 'twitch', 
    category: 'general' as const, 
    description: 'Feather icon: twitch',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-twitch.svg',
    license: 'MIT'
  },
  'twitter': { 
    name: 'twitter', 
    category: 'general' as const, 
    description: 'Feather icon: twitter',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-twitter.svg',
    license: 'MIT'
  },
  'umbrella': { 
    name: 'umbrella', 
    category: 'general' as const, 
    description: 'Feather icon: umbrella',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-umbrella.svg',
    license: 'MIT'
  },
  'wind': { 
    name: 'wind', 
    category: 'general' as const, 
    description: 'Feather icon: wind',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-wind.svg',
    license: 'MIT'
  },
  'youtube': { 
    name: 'youtube', 
    category: 'general' as const, 
    description: 'Feather icon: youtube',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-youtube.svg',
    license: 'MIT'
  },
  'zoom-in': { 
    name: 'zoom-in', 
    category: 'general' as const, 
    description: 'Feather icon: zoom in',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-zoom-in.svg',
    license: 'MIT'
  },
  'zoom-out': { 
    name: 'zoom-out', 
    category: 'general' as const, 
    description: 'Feather icon: zoom out',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-zoom-out.svg',
    license: 'MIT'
  },

  // Feather Icons - Interface
  'bookmark': { 
    name: 'bookmark', 
    category: 'interface' as const, 
    description: 'Feather icon: bookmark',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-bookmark.svg',
    license: 'MIT'
  },
  'check-circle': { 
    name: 'check-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: check circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-check-circle.svg',
    license: 'MIT'
  },
  'check-square': { 
    name: 'check-square', 
    category: 'interface' as const, 
    description: 'Feather icon: check square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-check-square.svg',
    license: 'MIT'
  },
  'copy': { 
    name: 'copy', 
    category: 'interface' as const, 
    description: 'Feather icon: copy',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-copy.svg',
    license: 'MIT'
  },
  'crop': { 
    name: 'crop', 
    category: 'interface' as const, 
    description: 'Feather icon: crop',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-crop.svg',
    license: 'MIT'
  },
  'download-cloud': { 
    name: 'download-cloud', 
    category: 'interface' as const, 
    description: 'Feather icon: download cloud',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-download-cloud.svg',
    license: 'MIT'
  },
  'edit': { 
    name: 'edit', 
    category: 'interface' as const, 
    description: 'Feather icon: edit',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-edit.svg',
    license: 'MIT'
  },
  'edit-2': { 
    name: 'edit-2', 
    category: 'interface' as const, 
    description: 'Feather icon: edit 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-edit-2.svg',
    license: 'MIT'
  },
  'edit-3': { 
    name: 'edit-3', 
    category: 'interface' as const, 
    description: 'Feather icon: edit 3',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-edit-3.svg',
    license: 'MIT'
  },
  'external-link': { 
    name: 'external-link', 
    category: 'interface' as const, 
    description: 'Feather icon: external link',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-external-link.svg',
    license: 'MIT'
  },
  'filter': { 
    name: 'filter', 
    category: 'interface' as const, 
    description: 'Feather icon: filter',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-filter.svg',
    license: 'MIT'
  },
  'flag': { 
    name: 'flag', 
    category: 'interface' as const, 
    description: 'Feather icon: flag',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-flag.svg',
    license: 'MIT'
  },
  'frown': { 
    name: 'frown', 
    category: 'interface' as const, 
    description: 'Feather icon: frown',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-frown.svg',
    license: 'MIT'
  },
  'heart': { 
    name: 'heart', 
    category: 'interface' as const, 
    description: 'Feather icon: heart',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-heart.svg',
    license: 'MIT'
  },
  'link': { 
    name: 'link', 
    category: 'interface' as const, 
    description: 'Feather icon: link',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-link.svg',
    license: 'MIT'
  },
  'link-2': { 
    name: 'link-2', 
    category: 'interface' as const, 
    description: 'Feather icon: link 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-link-2.svg',
    license: 'MIT'
  },
  'maximize-2': { 
    name: 'maximize-2', 
    category: 'interface' as const, 
    description: 'Feather icon: maximize 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-maximize-2.svg',
    license: 'MIT'
  },
  'meh': { 
    name: 'meh', 
    category: 'interface' as const, 
    description: 'Feather icon: meh',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-meh.svg',
    license: 'MIT'
  },
  'minimize-2': { 
    name: 'minimize-2', 
    category: 'interface' as const, 
    description: 'Feather icon: minimize 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-minimize-2.svg',
    license: 'MIT'
  },
  'minus-circle': { 
    name: 'minus-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: minus circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-minus-circle.svg',
    license: 'MIT'
  },
  'minus-square': { 
    name: 'minus-square', 
    category: 'interface' as const, 
    description: 'Feather icon: minus square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-minus-square.svg',
    license: 'MIT'
  },
  'more-horizontal': { 
    name: 'more-horizontal', 
    category: 'interface' as const, 
    description: 'Feather icon: more horizontal',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-more-horizontal.svg',
    license: 'MIT'
  },
  'more-vertical': { 
    name: 'more-vertical', 
    category: 'interface' as const, 
    description: 'Feather icon: more vertical',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-more-vertical.svg',
    license: 'MIT'
  },
  'mouse-pointer': { 
    name: 'mouse-pointer', 
    category: 'interface' as const, 
    description: 'Feather icon: mouse pointer',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-mouse-pointer.svg',
    license: 'MIT'
  },
  'move': { 
    name: 'move', 
    category: 'interface' as const, 
    description: 'Feather icon: move',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-move.svg',
    license: 'MIT'
  },
  'pen-tool': { 
    name: 'pen-tool', 
    category: 'interface' as const, 
    description: 'Feather icon: pen tool',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-pen-tool.svg',
    license: 'MIT'
  },
  'plus-circle': { 
    name: 'plus-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: plus circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-plus-circle.svg',
    license: 'MIT'
  },
  'plus-square': { 
    name: 'plus-square', 
    category: 'interface' as const, 
    description: 'Feather icon: plus square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-plus-square.svg',
    license: 'MIT'
  },
  'refresh-ccw': { 
    name: 'refresh-ccw', 
    category: 'interface' as const, 
    description: 'Feather icon: refresh ccw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-refresh-ccw.svg',
    license: 'MIT'
  },
  'refresh-cw': { 
    name: 'refresh-cw', 
    category: 'interface' as const, 
    description: 'Feather icon: refresh cw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-refresh-cw.svg',
    license: 'MIT'
  },
  'rotate-ccw': { 
    name: 'rotate-ccw', 
    category: 'interface' as const, 
    description: 'Feather icon: rotate ccw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-rotate-ccw.svg',
    license: 'MIT'
  },
  'rotate-cw': { 
    name: 'rotate-cw', 
    category: 'interface' as const, 
    description: 'Feather icon: rotate cw',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-rotate-cw.svg',
    license: 'MIT'
  },
  'save': { 
    name: 'save', 
    category: 'interface' as const, 
    description: 'Feather icon: save',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-save.svg',
    license: 'MIT'
  },
  'scissors': { 
    name: 'scissors', 
    category: 'interface' as const, 
    description: 'Feather icon: scissors',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-scissors.svg',
    license: 'MIT'
  },
  'settings': { 
    name: 'settings', 
    category: 'interface' as const, 
    description: 'Feather icon: settings',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-settings.svg',
    license: 'MIT'
  },
  'share': { 
    name: 'share', 
    category: 'interface' as const, 
    description: 'Feather icon: share',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-share.svg',
    license: 'MIT'
  },
  'share-2': { 
    name: 'share-2', 
    category: 'interface' as const, 
    description: 'Feather icon: share 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-share-2.svg',
    license: 'MIT'
  },
  'sliders': { 
    name: 'sliders', 
    category: 'interface' as const, 
    description: 'Feather icon: sliders',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-sliders.svg',
    license: 'MIT'
  },
  'smile': { 
    name: 'smile', 
    category: 'interface' as const, 
    description: 'Feather icon: smile',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-smile.svg',
    license: 'MIT'
  },
  'star': { 
    name: 'star', 
    category: 'interface' as const, 
    description: 'Feather icon: star',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-star.svg',
    license: 'MIT'
  },
  'tag': { 
    name: 'tag', 
    category: 'interface' as const, 
    description: 'Feather icon: tag',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-tag.svg',
    license: 'MIT'
  },
  'thumbs-down': { 
    name: 'thumbs-down', 
    category: 'interface' as const, 
    description: 'Feather icon: thumbs down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-thumbs-down.svg',
    license: 'MIT'
  },
  'thumbs-up': { 
    name: 'thumbs-up', 
    category: 'interface' as const, 
    description: 'Feather icon: thumbs up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-thumbs-up.svg',
    license: 'MIT'
  },
  'upload-cloud': { 
    name: 'upload-cloud', 
    category: 'interface' as const, 
    description: 'Feather icon: upload cloud',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-upload-cloud.svg',
    license: 'MIT'
  },
  'x': { 
    name: 'x', 
    category: 'interface' as const, 
    description: 'Feather icon: x',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-x.svg',
    license: 'MIT'
  },
  'x-circle': { 
    name: 'x-circle', 
    category: 'interface' as const, 
    description: 'Feather icon: x circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-x-circle.svg',
    license: 'MIT'
  },
  'x-octagon': { 
    name: 'x-octagon', 
    category: 'interface' as const, 
    description: 'Feather icon: x octagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-x-octagon.svg',
    license: 'MIT'
  },
  'x-square': { 
    name: 'x-square', 
    category: 'interface' as const, 
    description: 'Feather icon: x square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-x-square.svg',
    license: 'MIT'
  },
  'zap': { 
    name: 'zap', 
    category: 'interface' as const, 
    description: 'Feather icon: zap',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-zap.svg',
    license: 'MIT'
  },
  'zap-off': { 
    name: 'zap-off', 
    category: 'interface' as const, 
    description: 'Feather icon: zap off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-zap-off.svg',
    license: 'MIT'
  },

  // Feather Icons - Media
  'airplay': { 
    name: 'airplay', 
    category: 'media' as const, 
    description: 'Feather icon: airplay',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-airplay.svg',
    license: 'MIT'
  },
  'camera-off': { 
    name: 'camera-off', 
    category: 'media' as const, 
    description: 'Feather icon: camera off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-camera-off.svg',
    license: 'MIT'
  },
  'cast': { 
    name: 'cast', 
    category: 'media' as const, 
    description: 'Feather icon: cast',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-cast.svg',
    license: 'MIT'
  },
  'disc': { 
    name: 'disc', 
    category: 'media' as const, 
    description: 'Feather icon: disc',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-disc.svg',
    license: 'MIT'
  },
  'fast-forward': { 
    name: 'fast-forward', 
    category: 'media' as const, 
    description: 'Feather icon: fast forward',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-fast-forward.svg',
    license: 'MIT'
  },
  'film': { 
    name: 'film', 
    category: 'media' as const, 
    description: 'Feather icon: film',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-film.svg',
    license: 'MIT'
  },
  'image': { 
    name: 'image', 
    category: 'media' as const, 
    description: 'Feather icon: image',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-image.svg',
    license: 'MIT'
  },
  'monitor': { 
    name: 'monitor', 
    category: 'media' as const, 
    description: 'Feather icon: monitor',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-monitor.svg',
    license: 'MIT'
  },
  'music': { 
    name: 'music', 
    category: 'media' as const, 
    description: 'Feather icon: music',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-music.svg',
    license: 'MIT'
  },
  'pause': { 
    name: 'pause', 
    category: 'media' as const, 
    description: 'Feather icon: pause',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-pause.svg',
    license: 'MIT'
  },
  'pause-circle': { 
    name: 'pause-circle', 
    category: 'media' as const, 
    description: 'Feather icon: pause circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-pause-circle.svg',
    license: 'MIT'
  },
  'play': { 
    name: 'play', 
    category: 'media' as const, 
    description: 'Feather icon: play',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-play.svg',
    license: 'MIT'
  },
  'play-circle': { 
    name: 'play-circle', 
    category: 'media' as const, 
    description: 'Feather icon: play circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-play-circle.svg',
    license: 'MIT'
  },
  'radio': { 
    name: 'radio', 
    category: 'media' as const, 
    description: 'Feather icon: radio',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-radio.svg',
    license: 'MIT'
  },
  'repeat': { 
    name: 'repeat', 
    category: 'media' as const, 
    description: 'Feather icon: repeat',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-repeat.svg',
    license: 'MIT'
  },
  'rewind': { 
    name: 'rewind', 
    category: 'media' as const, 
    description: 'Feather icon: rewind',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-rewind.svg',
    license: 'MIT'
  },
  'shuffle': { 
    name: 'shuffle', 
    category: 'media' as const, 
    description: 'Feather icon: shuffle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-shuffle.svg',
    license: 'MIT'
  },
  'skip-back': { 
    name: 'skip-back', 
    category: 'media' as const, 
    description: 'Feather icon: skip back',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-skip-back.svg',
    license: 'MIT'
  },
  'skip-forward': { 
    name: 'skip-forward', 
    category: 'media' as const, 
    description: 'Feather icon: skip forward',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-skip-forward.svg',
    license: 'MIT'
  },
  'smartphone': { 
    name: 'smartphone', 
    category: 'media' as const, 
    description: 'Feather icon: smartphone',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-smartphone.svg',
    license: 'MIT'
  },
  'stop-circle': { 
    name: 'stop-circle', 
    category: 'media' as const, 
    description: 'Feather icon: stop circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-stop-circle.svg',
    license: 'MIT'
  },
  'tablet': { 
    name: 'tablet', 
    category: 'media' as const, 
    description: 'Feather icon: tablet',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-tablet.svg',
    license: 'MIT'
  },
  'tv': { 
    name: 'tv', 
    category: 'media' as const, 
    description: 'Feather icon: tv',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-tv.svg',
    license: 'MIT'
  },
  'video-off': { 
    name: 'video-off', 
    category: 'media' as const, 
    description: 'Feather icon: video off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-video-off.svg',
    license: 'MIT'
  },
  'watch': { 
    name: 'watch', 
    category: 'media' as const, 
    description: 'Feather icon: watch',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-watch.svg',
    license: 'MIT'
  },

  // Feather Icons - Navigation
  'arrow-down': { 
    name: 'arrow-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-down.svg',
    license: 'MIT'
  },
  'arrow-down-circle': { 
    name: 'arrow-down-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-down-circle.svg',
    license: 'MIT'
  },
  'arrow-down-left': { 
    name: 'arrow-down-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-down-left.svg',
    license: 'MIT'
  },
  'arrow-down-right': { 
    name: 'arrow-down-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow down right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-down-right.svg',
    license: 'MIT'
  },
  'arrow-left': { 
    name: 'arrow-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-left.svg',
    license: 'MIT'
  },
  'arrow-left-circle': { 
    name: 'arrow-left-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow left circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-left-circle.svg',
    license: 'MIT'
  },
  'arrow-right': { 
    name: 'arrow-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-right.svg',
    license: 'MIT'
  },
  'arrow-right-circle': { 
    name: 'arrow-right-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow right circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-right-circle.svg',
    license: 'MIT'
  },
  'arrow-up': { 
    name: 'arrow-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-up.svg',
    license: 'MIT'
  },
  'arrow-up-circle': { 
    name: 'arrow-up-circle', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-up-circle.svg',
    license: 'MIT'
  },
  'arrow-up-left': { 
    name: 'arrow-up-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-up-left.svg',
    license: 'MIT'
  },
  'arrow-up-right': { 
    name: 'arrow-up-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: arrow up right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-arrow-up-right.svg',
    license: 'MIT'
  },
  'chevron-down': { 
    name: 'chevron-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevron-down.svg',
    license: 'MIT'
  },
  'chevron-left': { 
    name: 'chevron-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevron-left.svg',
    license: 'MIT'
  },
  'chevron-right': { 
    name: 'chevron-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevron-right.svg',
    license: 'MIT'
  },
  'chevron-up': { 
    name: 'chevron-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevron up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevron-up.svg',
    license: 'MIT'
  },
  'chevrons-down': { 
    name: 'chevrons-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevrons-down.svg',
    license: 'MIT'
  },
  'chevrons-left': { 
    name: 'chevrons-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevrons-left.svg',
    license: 'MIT'
  },
  'chevrons-right': { 
    name: 'chevrons-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevrons-right.svg',
    license: 'MIT'
  },
  'chevrons-up': { 
    name: 'chevrons-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: chevrons up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-chevrons-up.svg',
    license: 'MIT'
  },
  'compass': { 
    name: 'compass', 
    category: 'navigation' as const, 
    description: 'Feather icon: compass',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-compass.svg',
    license: 'MIT'
  },
  'corner-down-left': { 
    name: 'corner-down-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner down left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-down-left.svg',
    license: 'MIT'
  },
  'corner-down-right': { 
    name: 'corner-down-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner down right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-down-right.svg',
    license: 'MIT'
  },
  'corner-left-down': { 
    name: 'corner-left-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner left down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-left-down.svg',
    license: 'MIT'
  },
  'corner-left-up': { 
    name: 'corner-left-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner left up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-left-up.svg',
    license: 'MIT'
  },
  'corner-right-down': { 
    name: 'corner-right-down', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner right down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-right-down.svg',
    license: 'MIT'
  },
  'corner-right-up': { 
    name: 'corner-right-up', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner right up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-right-up.svg',
    license: 'MIT'
  },
  'corner-up-left': { 
    name: 'corner-up-left', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner up left',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-up-left.svg',
    license: 'MIT'
  },
  'corner-up-right': { 
    name: 'corner-up-right', 
    category: 'navigation' as const, 
    description: 'Feather icon: corner up right',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-corner-up-right.svg',
    license: 'MIT'
  },
  'crosshair': { 
    name: 'crosshair', 
    category: 'navigation' as const, 
    description: 'Feather icon: crosshair',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-crosshair.svg',
    license: 'MIT'
  },
  'home': { 
    name: 'home', 
    category: 'navigation' as const, 
    description: 'Feather icon: home',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-home.svg',
    license: 'MIT'
  },
  'map': { 
    name: 'map', 
    category: 'navigation' as const, 
    description: 'Feather icon: map',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-map.svg',
    license: 'MIT'
  },
  'map-pin': { 
    name: 'map-pin', 
    category: 'navigation' as const, 
    description: 'Feather icon: map pin',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-map-pin.svg',
    license: 'MIT'
  },
  'navigation': { 
    name: 'navigation', 
    category: 'navigation' as const, 
    description: 'Feather icon: navigation',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-navigation.svg',
    license: 'MIT'
  },
  'navigation-2': { 
    name: 'navigation-2', 
    category: 'navigation' as const, 
    description: 'Feather icon: navigation 2',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-navigation-2.svg',
    license: 'MIT'
  },
  'target': { 
    name: 'target', 
    category: 'navigation' as const, 
    description: 'Feather icon: target',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-target.svg',
    license: 'MIT'
  },

  // Feather Icons - Security
  'award': { 
    name: 'award', 
    category: 'security' as const, 
    description: 'Feather icon: award',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-award.svg',
    license: 'MIT'
  },
  'eye': { 
    name: 'eye', 
    category: 'security' as const, 
    description: 'Feather icon: eye',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-eye.svg',
    license: 'MIT'
  },
  'eye-off': { 
    name: 'eye-off', 
    category: 'security' as const, 
    description: 'Feather icon: eye off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-eye-off.svg',
    license: 'MIT'
  },
  'log-in': { 
    name: 'log-in', 
    category: 'security' as const, 
    description: 'Feather icon: log in',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-log-in.svg',
    license: 'MIT'
  },
  'log-out': { 
    name: 'log-out', 
    category: 'security' as const, 
    description: 'Feather icon: log out',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-log-out.svg',
    license: 'MIT'
  },
  'user': { 
    name: 'user', 
    category: 'security' as const, 
    description: 'Feather icon: user',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-user.svg',
    license: 'MIT'
  },
  'user-check': { 
    name: 'user-check', 
    category: 'security' as const, 
    description: 'Feather icon: user check',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-user-check.svg',
    license: 'MIT'
  },
  'user-minus': { 
    name: 'user-minus', 
    category: 'security' as const, 
    description: 'Feather icon: user minus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-user-minus.svg',
    license: 'MIT'
  },
  'user-plus': { 
    name: 'user-plus', 
    category: 'security' as const, 
    description: 'Feather icon: user plus',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-user-plus.svg',
    license: 'MIT'
  },
  'user-x': { 
    name: 'user-x', 
    category: 'security' as const, 
    description: 'Feather icon: user x',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-user-x.svg',
    license: 'MIT'
  },

  // Feather Icons - Status
  'activity': { 
    name: 'activity', 
    category: 'status' as const, 
    description: 'Feather icon: activity',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-activity.svg',
    license: 'MIT'
  },
  'alert-circle': { 
    name: 'alert-circle', 
    category: 'status' as const, 
    description: 'Feather icon: alert circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-alert-circle.svg',
    license: 'MIT'
  },
  'alert-octagon': { 
    name: 'alert-octagon', 
    category: 'status' as const, 
    description: 'Feather icon: alert octagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-alert-octagon.svg',
    license: 'MIT'
  },
  'alert-triangle': { 
    name: 'alert-triangle', 
    category: 'status' as const, 
    description: 'Feather icon: alert triangle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-alert-triangle.svg',
    license: 'MIT'
  },
  'battery': { 
    name: 'battery', 
    category: 'status' as const, 
    description: 'Feather icon: battery',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-battery.svg',
    license: 'MIT'
  },
  'battery-charging': { 
    name: 'battery-charging', 
    category: 'status' as const, 
    description: 'Feather icon: battery charging',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-battery-charging.svg',
    license: 'MIT'
  },
  'circle': { 
    name: 'circle', 
    category: 'status' as const, 
    description: 'Feather icon: circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-circle.svg',
    license: 'MIT'
  },
  'help-circle': { 
    name: 'help-circle', 
    category: 'status' as const, 
    description: 'Feather icon: help circle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-help-circle.svg',
    license: 'MIT'
  },
  'hexagon': { 
    name: 'hexagon', 
    category: 'status' as const, 
    description: 'Feather icon: hexagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-hexagon.svg',
    license: 'MIT'
  },
  'info': { 
    name: 'info', 
    category: 'status' as const, 
    description: 'Feather icon: info',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-info.svg',
    license: 'MIT'
  },
  'key': { 
    name: 'key', 
    category: 'status' as const, 
    description: 'Feather icon: key',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-key.svg',
    license: 'MIT'
  },
  'life-buoy': { 
    name: 'life-buoy', 
    category: 'status' as const, 
    description: 'Feather icon: life buoy',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-life-buoy.svg',
    license: 'MIT'
  },
  'loader': { 
    name: 'loader', 
    category: 'status' as const, 
    description: 'Feather icon: loader',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-loader.svg',
    license: 'MIT'
  },
  'lock': { 
    name: 'lock', 
    category: 'status' as const, 
    description: 'Feather icon: lock',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-lock.svg',
    license: 'MIT'
  },
  'octagon': { 
    name: 'octagon', 
    category: 'status' as const, 
    description: 'Feather icon: octagon',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-octagon.svg',
    license: 'MIT'
  },
  'shield': { 
    name: 'shield', 
    category: 'status' as const, 
    description: 'Feather icon: shield',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-shield.svg',
    license: 'MIT'
  },
  'shield-off': { 
    name: 'shield-off', 
    category: 'status' as const, 
    description: 'Feather icon: shield off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-shield-off.svg',
    license: 'MIT'
  },
  'square': { 
    name: 'square', 
    category: 'status' as const, 
    description: 'Feather icon: square',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-square.svg',
    license: 'MIT'
  },
  'trending-down': { 
    name: 'trending-down', 
    category: 'status' as const, 
    description: 'Feather icon: trending down',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-trending-down.svg',
    license: 'MIT'
  },
  'trending-up': { 
    name: 'trending-up', 
    category: 'status' as const, 
    description: 'Feather icon: trending up',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-trending-up.svg',
    license: 'MIT'
  },
  'triangle': { 
    name: 'triangle', 
    category: 'status' as const, 
    description: 'Feather icon: triangle',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-triangle.svg',
    license: 'MIT'
  },
  'unlock': { 
    name: 'unlock', 
    category: 'status' as const, 
    description: 'Feather icon: unlock',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-unlock.svg',
    license: 'MIT'
  },
  'wifi-off': { 
    name: 'wifi-off', 
    category: 'status' as const, 
    description: 'Feather icon: wifi off',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    fileName: 'feather-wifi-off.svg',
    license: 'MIT'
  },
  // Communication Icons
  'videomonitoring': {
    name: 'videomonitoring',
    category: 'communication' as const,
    description: 'Videomonitoring',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },

  // General Icons
  '5g': {
    name: '5g',
    category: 'general' as const,
    description: '5g',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'activecore': {
    name: 'activecore',
    category: 'general' as const,
    description: 'Activecore',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'addchannels': {
    name: 'addchannels',
    category: 'general' as const,
    description: 'Addchannels',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'addnewservices': {
    name: 'addnewservices',
    category: 'general' as const,
    description: 'Addnewservices',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'ar': {
    name: 'ar',
    category: 'general' as const,
    description: 'Ar',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'article': {
    name: 'article',
    category: 'general' as const,
    description: 'Article',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'attachment': {
    name: 'attachment',
    category: 'general' as const,
    description: 'Attachment',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'autopay': {
    name: 'autopay',
    category: 'general' as const,
    description: 'Autopay',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'billsummarydefault': {
    name: 'billsummarydefault',
    category: 'general' as const,
    description: 'Billsummarydefault',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'brackets': {
    name: 'brackets',
    category: 'general' as const,
    description: 'Brackets',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'buildingwip': {
    name: 'buildingwip',
    category: 'general' as const,
    description: 'Buildingwip',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'bullet': {
    name: 'bullet',
    category: 'general' as const,
    description: 'Bullet',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'byod': {
    name: 'byod',
    category: 'general' as const,
    description: 'Byod',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'cloudstorm': {
    name: 'cloudstorm',
    category: 'general' as const,
    description: 'Cloudstorm',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizel32x32': {
    name: 'colorblacksizel32x32',
    category: 'general' as const,
    description: 'Colorblacksizel32x32',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizem24x24': {
    name: 'colorblacksizem24x24',
    category: 'general' as const,
    description: 'Colorblacksizem24x24',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizes20x20': {
    name: 'colorblacksizes20x20',
    category: 'general' as const,
    description: 'Colorblacksizes20x20',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizexl48x48': {
    name: 'colorblacksizexl48x48',
    category: 'general' as const,
    description: 'Colorblacksizexl48x48',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizexs16x16': {
    name: 'colorblacksizexs16x16',
    category: 'general' as const,
    description: 'Colorblacksizexs16x16',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizexxl64x64': {
    name: 'colorblacksizexxl64x64',
    category: 'general' as const,
    description: 'Colorblacksizexxl64x64',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizexxs12x12': {
    name: 'colorblacksizexxs12x12',
    category: 'general' as const,
    description: 'Colorblacksizexxs12x12',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorblacksizexxxl80x80': {
    name: 'colorblacksizexxxl80x80',
    category: 'general' as const,
    description: 'Colorblacksizexxxl80x80',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizel32x32': {
    name: 'colorbluesizel32x32',
    category: 'general' as const,
    description: 'Colorbluesizel32x32',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizem24x24': {
    name: 'colorbluesizem24x24',
    category: 'general' as const,
    description: 'Colorbluesizem24x24',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizes20x20': {
    name: 'colorbluesizes20x20',
    category: 'general' as const,
    description: 'Colorbluesizes20x20',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizexl48x48': {
    name: 'colorbluesizexl48x48',
    category: 'general' as const,
    description: 'Colorbluesizexl48x48',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizexs16x16': {
    name: 'colorbluesizexs16x16',
    category: 'general' as const,
    description: 'Colorbluesizexs16x16',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizexxl64x64': {
    name: 'colorbluesizexxl64x64',
    category: 'general' as const,
    description: 'Colorbluesizexxl64x64',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizexxs12x12': {
    name: 'colorbluesizexxs12x12',
    category: 'general' as const,
    description: 'Colorbluesizexxs12x12',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorbluesizexxxl80x80': {
    name: 'colorbluesizexxxl80x80',
    category: 'general' as const,
    description: 'Colorbluesizexxxl80x80',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizel32x32': {
    name: 'colorwhitesizel32x32',
    category: 'general' as const,
    description: 'Colorwhitesizel32x32',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizem24x24': {
    name: 'colorwhitesizem24x24',
    category: 'general' as const,
    description: 'Colorwhitesizem24x24',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizes20x20': {
    name: 'colorwhitesizes20x20',
    category: 'general' as const,
    description: 'Colorwhitesizes20x20',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizexl48x48': {
    name: 'colorwhitesizexl48x48',
    category: 'general' as const,
    description: 'Colorwhitesizexl48x48',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizexs16x16': {
    name: 'colorwhitesizexs16x16',
    category: 'general' as const,
    description: 'Colorwhitesizexs16x16',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizexxl64x64': {
    name: 'colorwhitesizexxl64x64',
    category: 'general' as const,
    description: 'Colorwhitesizexxl64x64',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizexxs12x12': {
    name: 'colorwhitesizexxs12x12',
    category: 'general' as const,
    description: 'Colorwhitesizexxs12x12',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'colorwhitesizexxxl80x80': {
    name: 'colorwhitesizexxxl80x80',
    category: 'general' as const,
    description: 'Colorwhitesizexxxl80x80',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'deployment': {
    name: 'deployment',
    category: 'general' as const,
    description: 'Deployment',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'doccallout': {
    name: 'doccallout',
    category: 'general' as const,
    description: 'Doccallout',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'ecobill': {
    name: 'ecobill',
    category: 'general' as const,
    description: 'Ecobill',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'ellipse32': {
    name: 'ellipse32',
    category: 'general' as const,
    description: 'Ellipse32',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'expandedtextbox': {
    name: 'expandedtextbox',
    category: 'general' as const,
    description: 'Expandedtextbox',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'externallink': {
    name: 'externallink',
    category: 'general' as const,
    description: 'Externallink',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'externallink1': {
    name: 'externallink1',
    category: 'general' as const,
    description: 'Externallink1',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'externallink2': {
    name: 'externallink2',
    category: 'general' as const,
    description: 'Externallink2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-activity': {
    name: 'feather-activity',
    category: 'general' as const,
    description: 'Feather activity',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-airplay': {
    name: 'feather-airplay',
    category: 'general' as const,
    description: 'Feather airplay',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-alert-circle': {
    name: 'feather-alert-circle',
    category: 'general' as const,
    description: 'Feather alert circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-alert-octagon': {
    name: 'feather-alert-octagon',
    category: 'general' as const,
    description: 'Feather alert octagon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-alert-triangle': {
    name: 'feather-alert-triangle',
    category: 'general' as const,
    description: 'Feather alert triangle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-align-center': {
    name: 'feather-align-center',
    category: 'general' as const,
    description: 'Feather align center',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-align-justify': {
    name: 'feather-align-justify',
    category: 'general' as const,
    description: 'Feather align justify',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-align-left': {
    name: 'feather-align-left',
    category: 'general' as const,
    description: 'Feather align left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-align-right': {
    name: 'feather-align-right',
    category: 'general' as const,
    description: 'Feather align right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-anchor': {
    name: 'feather-anchor',
    category: 'general' as const,
    description: 'Feather anchor',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-aperture': {
    name: 'feather-aperture',
    category: 'general' as const,
    description: 'Feather aperture',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-archive': {
    name: 'feather-archive',
    category: 'general' as const,
    description: 'Feather archive',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-down': {
    name: 'feather-arrow-down',
    category: 'general' as const,
    description: 'Feather arrow down',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-down-circle': {
    name: 'feather-arrow-down-circle',
    category: 'general' as const,
    description: 'Feather arrow down circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-down-left': {
    name: 'feather-arrow-down-left',
    category: 'general' as const,
    description: 'Feather arrow down left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-down-right': {
    name: 'feather-arrow-down-right',
    category: 'general' as const,
    description: 'Feather arrow down right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-left': {
    name: 'feather-arrow-left',
    category: 'general' as const,
    description: 'Feather arrow left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-left-circle': {
    name: 'feather-arrow-left-circle',
    category: 'general' as const,
    description: 'Feather arrow left circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-right': {
    name: 'feather-arrow-right',
    category: 'general' as const,
    description: 'Feather arrow right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-right-circle': {
    name: 'feather-arrow-right-circle',
    category: 'general' as const,
    description: 'Feather arrow right circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-up': {
    name: 'feather-arrow-up',
    category: 'general' as const,
    description: 'Feather arrow up',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-up-circle': {
    name: 'feather-arrow-up-circle',
    category: 'general' as const,
    description: 'Feather arrow up circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-up-left': {
    name: 'feather-arrow-up-left',
    category: 'general' as const,
    description: 'Feather arrow up left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-arrow-up-right': {
    name: 'feather-arrow-up-right',
    category: 'general' as const,
    description: 'Feather arrow up right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-at-sign': {
    name: 'feather-at-sign',
    category: 'general' as const,
    description: 'Feather at sign',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-award': {
    name: 'feather-award',
    category: 'general' as const,
    description: 'Feather award',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-bar-chart': {
    name: 'feather-bar-chart',
    category: 'general' as const,
    description: 'Feather bar chart',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-bar-chart-2': {
    name: 'feather-bar-chart-2',
    category: 'general' as const,
    description: 'Feather bar chart 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-battery': {
    name: 'feather-battery',
    category: 'general' as const,
    description: 'Feather battery',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-battery-charging': {
    name: 'feather-battery-charging',
    category: 'general' as const,
    description: 'Feather battery charging',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-bell': {
    name: 'feather-bell',
    category: 'general' as const,
    description: 'Feather bell',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-bell-off': {
    name: 'feather-bell-off',
    category: 'general' as const,
    description: 'Feather bell off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-bluetooth': {
    name: 'feather-bluetooth',
    category: 'general' as const,
    description: 'Feather bluetooth',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-bold': {
    name: 'feather-bold',
    category: 'general' as const,
    description: 'Feather bold',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-book': {
    name: 'feather-book',
    category: 'general' as const,
    description: 'Feather book',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-book-open': {
    name: 'feather-book-open',
    category: 'general' as const,
    description: 'Feather book open',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-bookmark': {
    name: 'feather-bookmark',
    category: 'general' as const,
    description: 'Feather bookmark',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-box': {
    name: 'feather-box',
    category: 'general' as const,
    description: 'Feather box',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-briefcase': {
    name: 'feather-briefcase',
    category: 'general' as const,
    description: 'Feather briefcase',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-calendar': {
    name: 'feather-calendar',
    category: 'general' as const,
    description: 'Feather calendar',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-camera': {
    name: 'feather-camera',
    category: 'general' as const,
    description: 'Feather camera',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-camera-off': {
    name: 'feather-camera-off',
    category: 'general' as const,
    description: 'Feather camera off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cast': {
    name: 'feather-cast',
    category: 'general' as const,
    description: 'Feather cast',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-check': {
    name: 'feather-check',
    category: 'general' as const,
    description: 'Feather check',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-check-circle': {
    name: 'feather-check-circle',
    category: 'general' as const,
    description: 'Feather check circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-check-square': {
    name: 'feather-check-square',
    category: 'general' as const,
    description: 'Feather check square',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevron-down': {
    name: 'feather-chevron-down',
    category: 'general' as const,
    description: 'Feather chevron down',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevron-left': {
    name: 'feather-chevron-left',
    category: 'general' as const,
    description: 'Feather chevron left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevron-right': {
    name: 'feather-chevron-right',
    category: 'general' as const,
    description: 'Feather chevron right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevron-up': {
    name: 'feather-chevron-up',
    category: 'general' as const,
    description: 'Feather chevron up',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevrons-down': {
    name: 'feather-chevrons-down',
    category: 'general' as const,
    description: 'Feather chevrons down',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevrons-left': {
    name: 'feather-chevrons-left',
    category: 'general' as const,
    description: 'Feather chevrons left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevrons-right': {
    name: 'feather-chevrons-right',
    category: 'general' as const,
    description: 'Feather chevrons right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chevrons-up': {
    name: 'feather-chevrons-up',
    category: 'general' as const,
    description: 'Feather chevrons up',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-chrome': {
    name: 'feather-chrome',
    category: 'general' as const,
    description: 'Feather chrome',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-circle': {
    name: 'feather-circle',
    category: 'general' as const,
    description: 'Feather circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-clipboard': {
    name: 'feather-clipboard',
    category: 'general' as const,
    description: 'Feather clipboard',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-clock': {
    name: 'feather-clock',
    category: 'general' as const,
    description: 'Feather clock',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cloud': {
    name: 'feather-cloud',
    category: 'general' as const,
    description: 'Feather cloud',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cloud-drizzle': {
    name: 'feather-cloud-drizzle',
    category: 'general' as const,
    description: 'Feather cloud drizzle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cloud-lightning': {
    name: 'feather-cloud-lightning',
    category: 'general' as const,
    description: 'Feather cloud lightning',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cloud-off': {
    name: 'feather-cloud-off',
    category: 'general' as const,
    description: 'Feather cloud off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cloud-rain': {
    name: 'feather-cloud-rain',
    category: 'general' as const,
    description: 'Feather cloud rain',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cloud-snow': {
    name: 'feather-cloud-snow',
    category: 'general' as const,
    description: 'Feather cloud snow',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-code': {
    name: 'feather-code',
    category: 'general' as const,
    description: 'Feather code',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-codepen': {
    name: 'feather-codepen',
    category: 'general' as const,
    description: 'Feather codepen',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-codesandbox': {
    name: 'feather-codesandbox',
    category: 'general' as const,
    description: 'Feather codesandbox',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-coffee': {
    name: 'feather-coffee',
    category: 'general' as const,
    description: 'Feather coffee',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-columns': {
    name: 'feather-columns',
    category: 'general' as const,
    description: 'Feather columns',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-command': {
    name: 'feather-command',
    category: 'general' as const,
    description: 'Feather command',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-compass': {
    name: 'feather-compass',
    category: 'general' as const,
    description: 'Feather compass',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-copy': {
    name: 'feather-copy',
    category: 'general' as const,
    description: 'Feather copy',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-down-left': {
    name: 'feather-corner-down-left',
    category: 'general' as const,
    description: 'Feather corner down left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-down-right': {
    name: 'feather-corner-down-right',
    category: 'general' as const,
    description: 'Feather corner down right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-left-down': {
    name: 'feather-corner-left-down',
    category: 'general' as const,
    description: 'Feather corner left down',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-left-up': {
    name: 'feather-corner-left-up',
    category: 'general' as const,
    description: 'Feather corner left up',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-right-down': {
    name: 'feather-corner-right-down',
    category: 'general' as const,
    description: 'Feather corner right down',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-right-up': {
    name: 'feather-corner-right-up',
    category: 'general' as const,
    description: 'Feather corner right up',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-up-left': {
    name: 'feather-corner-up-left',
    category: 'general' as const,
    description: 'Feather corner up left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-corner-up-right': {
    name: 'feather-corner-up-right',
    category: 'general' as const,
    description: 'Feather corner up right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-cpu': {
    name: 'feather-cpu',
    category: 'general' as const,
    description: 'Feather cpu',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-credit-card': {
    name: 'feather-credit-card',
    category: 'general' as const,
    description: 'Feather credit card',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-crop': {
    name: 'feather-crop',
    category: 'general' as const,
    description: 'Feather crop',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-crosshair': {
    name: 'feather-crosshair',
    category: 'general' as const,
    description: 'Feather crosshair',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-database': {
    name: 'feather-database',
    category: 'general' as const,
    description: 'Feather database',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-delete': {
    name: 'feather-delete',
    category: 'general' as const,
    description: 'Feather delete',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-disc': {
    name: 'feather-disc',
    category: 'general' as const,
    description: 'Feather disc',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-divide': {
    name: 'feather-divide',
    category: 'general' as const,
    description: 'Feather divide',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-divide-circle': {
    name: 'feather-divide-circle',
    category: 'general' as const,
    description: 'Feather divide circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-divide-square': {
    name: 'feather-divide-square',
    category: 'general' as const,
    description: 'Feather divide square',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-dollar-sign': {
    name: 'feather-dollar-sign',
    category: 'general' as const,
    description: 'Feather dollar sign',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-download': {
    name: 'feather-download',
    category: 'general' as const,
    description: 'Feather download',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-download-cloud': {
    name: 'feather-download-cloud',
    category: 'general' as const,
    description: 'Feather download cloud',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-dribbble': {
    name: 'feather-dribbble',
    category: 'general' as const,
    description: 'Feather dribbble',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-droplet': {
    name: 'feather-droplet',
    category: 'general' as const,
    description: 'Feather droplet',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-edit': {
    name: 'feather-edit',
    category: 'general' as const,
    description: 'Feather edit',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-edit-2': {
    name: 'feather-edit-2',
    category: 'general' as const,
    description: 'Feather edit 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-edit-3': {
    name: 'feather-edit-3',
    category: 'general' as const,
    description: 'Feather edit 3',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-external-link': {
    name: 'feather-external-link',
    category: 'general' as const,
    description: 'Feather external link',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-eye': {
    name: 'feather-eye',
    category: 'general' as const,
    description: 'Feather eye',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-eye-off': {
    name: 'feather-eye-off',
    category: 'general' as const,
    description: 'Feather eye off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-facebook': {
    name: 'feather-facebook',
    category: 'general' as const,
    description: 'Feather facebook',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-fast-forward': {
    name: 'feather-fast-forward',
    category: 'general' as const,
    description: 'Feather fast forward',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-feather': {
    name: 'feather-feather',
    category: 'general' as const,
    description: 'Feather feather',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-figma': {
    name: 'feather-figma',
    category: 'general' as const,
    description: 'Feather figma',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-file': {
    name: 'feather-file',
    category: 'general' as const,
    description: 'Feather file',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-file-minus': {
    name: 'feather-file-minus',
    category: 'general' as const,
    description: 'Feather file minus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-file-plus': {
    name: 'feather-file-plus',
    category: 'general' as const,
    description: 'Feather file plus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-file-text': {
    name: 'feather-file-text',
    category: 'general' as const,
    description: 'Feather file text',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-film': {
    name: 'feather-film',
    category: 'general' as const,
    description: 'Feather film',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-filter': {
    name: 'feather-filter',
    category: 'general' as const,
    description: 'Feather filter',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-flag': {
    name: 'feather-flag',
    category: 'general' as const,
    description: 'Feather flag',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-folder': {
    name: 'feather-folder',
    category: 'general' as const,
    description: 'Feather folder',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-folder-minus': {
    name: 'feather-folder-minus',
    category: 'general' as const,
    description: 'Feather folder minus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-folder-plus': {
    name: 'feather-folder-plus',
    category: 'general' as const,
    description: 'Feather folder plus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-framer': {
    name: 'feather-framer',
    category: 'general' as const,
    description: 'Feather framer',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-frown': {
    name: 'feather-frown',
    category: 'general' as const,
    description: 'Feather frown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-gift': {
    name: 'feather-gift',
    category: 'general' as const,
    description: 'Feather gift',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-git-branch': {
    name: 'feather-git-branch',
    category: 'general' as const,
    description: 'Feather git branch',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-git-commit': {
    name: 'feather-git-commit',
    category: 'general' as const,
    description: 'Feather git commit',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-git-merge': {
    name: 'feather-git-merge',
    category: 'general' as const,
    description: 'Feather git merge',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-git-pull-request': {
    name: 'feather-git-pull-request',
    category: 'general' as const,
    description: 'Feather git pull request',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-github': {
    name: 'feather-github',
    category: 'general' as const,
    description: 'Feather github',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-gitlab': {
    name: 'feather-gitlab',
    category: 'general' as const,
    description: 'Feather gitlab',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-globe': {
    name: 'feather-globe',
    category: 'general' as const,
    description: 'Feather globe',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-grid': {
    name: 'feather-grid',
    category: 'general' as const,
    description: 'Feather grid',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-hard-drive': {
    name: 'feather-hard-drive',
    category: 'general' as const,
    description: 'Feather hard drive',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-hash': {
    name: 'feather-hash',
    category: 'general' as const,
    description: 'Feather hash',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-headphones': {
    name: 'feather-headphones',
    category: 'general' as const,
    description: 'Feather headphones',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-heart': {
    name: 'feather-heart',
    category: 'general' as const,
    description: 'Feather heart',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-help-circle': {
    name: 'feather-help-circle',
    category: 'general' as const,
    description: 'Feather help circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-hexagon': {
    name: 'feather-hexagon',
    category: 'general' as const,
    description: 'Feather hexagon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-home': {
    name: 'feather-home',
    category: 'general' as const,
    description: 'Feather home',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-image': {
    name: 'feather-image',
    category: 'general' as const,
    description: 'Feather image',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-inbox': {
    name: 'feather-inbox',
    category: 'general' as const,
    description: 'Feather inbox',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-info': {
    name: 'feather-info',
    category: 'general' as const,
    description: 'Feather info',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-instagram': {
    name: 'feather-instagram',
    category: 'general' as const,
    description: 'Feather instagram',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-italic': {
    name: 'feather-italic',
    category: 'general' as const,
    description: 'Feather italic',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-key': {
    name: 'feather-key',
    category: 'general' as const,
    description: 'Feather key',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-layers': {
    name: 'feather-layers',
    category: 'general' as const,
    description: 'Feather layers',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-layout': {
    name: 'feather-layout',
    category: 'general' as const,
    description: 'Feather layout',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-life-buoy': {
    name: 'feather-life-buoy',
    category: 'general' as const,
    description: 'Feather life buoy',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-link': {
    name: 'feather-link',
    category: 'general' as const,
    description: 'Feather link',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-link-2': {
    name: 'feather-link-2',
    category: 'general' as const,
    description: 'Feather link 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-linkedin': {
    name: 'feather-linkedin',
    category: 'general' as const,
    description: 'Feather linkedin',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-list': {
    name: 'feather-list',
    category: 'general' as const,
    description: 'Feather list',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-loader': {
    name: 'feather-loader',
    category: 'general' as const,
    description: 'Feather loader',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-lock': {
    name: 'feather-lock',
    category: 'general' as const,
    description: 'Feather lock',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-log-in': {
    name: 'feather-log-in',
    category: 'general' as const,
    description: 'Feather log in',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-log-out': {
    name: 'feather-log-out',
    category: 'general' as const,
    description: 'Feather log out',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-mail': {
    name: 'feather-mail',
    category: 'general' as const,
    description: 'Feather mail',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-map': {
    name: 'feather-map',
    category: 'general' as const,
    description: 'Feather map',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-map-pin': {
    name: 'feather-map-pin',
    category: 'general' as const,
    description: 'Feather map pin',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-maximize': {
    name: 'feather-maximize',
    category: 'general' as const,
    description: 'Feather maximize',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-maximize-2': {
    name: 'feather-maximize-2',
    category: 'general' as const,
    description: 'Feather maximize 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-meh': {
    name: 'feather-meh',
    category: 'general' as const,
    description: 'Feather meh',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-menu': {
    name: 'feather-menu',
    category: 'general' as const,
    description: 'Feather menu',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-message-circle': {
    name: 'feather-message-circle',
    category: 'general' as const,
    description: 'Feather message circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-message-square': {
    name: 'feather-message-square',
    category: 'general' as const,
    description: 'Feather message square',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-mic': {
    name: 'feather-mic',
    category: 'general' as const,
    description: 'Feather mic',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-mic-off': {
    name: 'feather-mic-off',
    category: 'general' as const,
    description: 'Feather mic off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-minimize': {
    name: 'feather-minimize',
    category: 'general' as const,
    description: 'Feather minimize',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-minimize-2': {
    name: 'feather-minimize-2',
    category: 'general' as const,
    description: 'Feather minimize 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-minus': {
    name: 'feather-minus',
    category: 'general' as const,
    description: 'Feather minus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-minus-circle': {
    name: 'feather-minus-circle',
    category: 'general' as const,
    description: 'Feather minus circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-minus-square': {
    name: 'feather-minus-square',
    category: 'general' as const,
    description: 'Feather minus square',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-monitor': {
    name: 'feather-monitor',
    category: 'general' as const,
    description: 'Feather monitor',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-moon': {
    name: 'feather-moon',
    category: 'general' as const,
    description: 'Feather moon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-more-horizontal': {
    name: 'feather-more-horizontal',
    category: 'general' as const,
    description: 'Feather more horizontal',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-more-vertical': {
    name: 'feather-more-vertical',
    category: 'general' as const,
    description: 'Feather more vertical',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-mouse-pointer': {
    name: 'feather-mouse-pointer',
    category: 'general' as const,
    description: 'Feather mouse pointer',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-move': {
    name: 'feather-move',
    category: 'general' as const,
    description: 'Feather move',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-music': {
    name: 'feather-music',
    category: 'general' as const,
    description: 'Feather music',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-navigation': {
    name: 'feather-navigation',
    category: 'general' as const,
    description: 'Feather navigation',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-navigation-2': {
    name: 'feather-navigation-2',
    category: 'general' as const,
    description: 'Feather navigation 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-octagon': {
    name: 'feather-octagon',
    category: 'general' as const,
    description: 'Feather octagon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-package': {
    name: 'feather-package',
    category: 'general' as const,
    description: 'Feather package',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-paperclip': {
    name: 'feather-paperclip',
    category: 'general' as const,
    description: 'Feather paperclip',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-pause': {
    name: 'feather-pause',
    category: 'general' as const,
    description: 'Feather pause',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-pause-circle': {
    name: 'feather-pause-circle',
    category: 'general' as const,
    description: 'Feather pause circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-pen-tool': {
    name: 'feather-pen-tool',
    category: 'general' as const,
    description: 'Feather pen tool',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-percent': {
    name: 'feather-percent',
    category: 'general' as const,
    description: 'Feather percent',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-phone': {
    name: 'feather-phone',
    category: 'general' as const,
    description: 'Feather phone',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-phone-call': {
    name: 'feather-phone-call',
    category: 'general' as const,
    description: 'Feather phone call',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-phone-forwarded': {
    name: 'feather-phone-forwarded',
    category: 'general' as const,
    description: 'Feather phone forwarded',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-phone-incoming': {
    name: 'feather-phone-incoming',
    category: 'general' as const,
    description: 'Feather phone incoming',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-phone-missed': {
    name: 'feather-phone-missed',
    category: 'general' as const,
    description: 'Feather phone missed',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-phone-off': {
    name: 'feather-phone-off',
    category: 'general' as const,
    description: 'Feather phone off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-phone-outgoing': {
    name: 'feather-phone-outgoing',
    category: 'general' as const,
    description: 'Feather phone outgoing',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-pie-chart': {
    name: 'feather-pie-chart',
    category: 'general' as const,
    description: 'Feather pie chart',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-play': {
    name: 'feather-play',
    category: 'general' as const,
    description: 'Feather play',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-play-circle': {
    name: 'feather-play-circle',
    category: 'general' as const,
    description: 'Feather play circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-plus': {
    name: 'feather-plus',
    category: 'general' as const,
    description: 'Feather plus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-plus-circle': {
    name: 'feather-plus-circle',
    category: 'general' as const,
    description: 'Feather plus circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-plus-square': {
    name: 'feather-plus-square',
    category: 'general' as const,
    description: 'Feather plus square',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-pocket': {
    name: 'feather-pocket',
    category: 'general' as const,
    description: 'Feather pocket',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-power': {
    name: 'feather-power',
    category: 'general' as const,
    description: 'Feather power',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-printer': {
    name: 'feather-printer',
    category: 'general' as const,
    description: 'Feather printer',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-radio': {
    name: 'feather-radio',
    category: 'general' as const,
    description: 'Feather radio',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-refresh-ccw': {
    name: 'feather-refresh-ccw',
    category: 'general' as const,
    description: 'Feather refresh ccw',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-refresh-cw': {
    name: 'feather-refresh-cw',
    category: 'general' as const,
    description: 'Feather refresh cw',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-repeat': {
    name: 'feather-repeat',
    category: 'general' as const,
    description: 'Feather repeat',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-rewind': {
    name: 'feather-rewind',
    category: 'general' as const,
    description: 'Feather rewind',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-rotate-ccw': {
    name: 'feather-rotate-ccw',
    category: 'general' as const,
    description: 'Feather rotate ccw',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-rotate-cw': {
    name: 'feather-rotate-cw',
    category: 'general' as const,
    description: 'Feather rotate cw',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-rss': {
    name: 'feather-rss',
    category: 'general' as const,
    description: 'Feather rss',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-save': {
    name: 'feather-save',
    category: 'general' as const,
    description: 'Feather save',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-scissors': {
    name: 'feather-scissors',
    category: 'general' as const,
    description: 'Feather scissors',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-search': {
    name: 'feather-search',
    category: 'general' as const,
    description: 'Feather search',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-send': {
    name: 'feather-send',
    category: 'general' as const,
    description: 'Feather send',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-server': {
    name: 'feather-server',
    category: 'general' as const,
    description: 'Feather server',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-settings': {
    name: 'feather-settings',
    category: 'general' as const,
    description: 'Feather settings',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-share': {
    name: 'feather-share',
    category: 'general' as const,
    description: 'Feather share',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-share-2': {
    name: 'feather-share-2',
    category: 'general' as const,
    description: 'Feather share 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-shield': {
    name: 'feather-shield',
    category: 'general' as const,
    description: 'Feather shield',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-shield-off': {
    name: 'feather-shield-off',
    category: 'general' as const,
    description: 'Feather shield off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-shopping-bag': {
    name: 'feather-shopping-bag',
    category: 'general' as const,
    description: 'Feather shopping bag',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-shopping-cart': {
    name: 'feather-shopping-cart',
    category: 'general' as const,
    description: 'Feather shopping cart',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-shuffle': {
    name: 'feather-shuffle',
    category: 'general' as const,
    description: 'Feather shuffle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-sidebar': {
    name: 'feather-sidebar',
    category: 'general' as const,
    description: 'Feather sidebar',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-skip-back': {
    name: 'feather-skip-back',
    category: 'general' as const,
    description: 'Feather skip back',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-skip-forward': {
    name: 'feather-skip-forward',
    category: 'general' as const,
    description: 'Feather skip forward',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-slack': {
    name: 'feather-slack',
    category: 'general' as const,
    description: 'Feather slack',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-slash': {
    name: 'feather-slash',
    category: 'general' as const,
    description: 'Feather slash',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-sliders': {
    name: 'feather-sliders',
    category: 'general' as const,
    description: 'Feather sliders',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-smartphone': {
    name: 'feather-smartphone',
    category: 'general' as const,
    description: 'Feather smartphone',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-smile': {
    name: 'feather-smile',
    category: 'general' as const,
    description: 'Feather smile',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-speaker': {
    name: 'feather-speaker',
    category: 'general' as const,
    description: 'Feather speaker',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-square': {
    name: 'feather-square',
    category: 'general' as const,
    description: 'Feather square',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-star': {
    name: 'feather-star',
    category: 'general' as const,
    description: 'Feather star',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-stop-circle': {
    name: 'feather-stop-circle',
    category: 'general' as const,
    description: 'Feather stop circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-sun': {
    name: 'feather-sun',
    category: 'general' as const,
    description: 'Feather sun',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-sunrise': {
    name: 'feather-sunrise',
    category: 'general' as const,
    description: 'Feather sunrise',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-sunset': {
    name: 'feather-sunset',
    category: 'general' as const,
    description: 'Feather sunset',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-table': {
    name: 'feather-table',
    category: 'general' as const,
    description: 'Feather table',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-tablet': {
    name: 'feather-tablet',
    category: 'general' as const,
    description: 'Feather tablet',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-tag': {
    name: 'feather-tag',
    category: 'general' as const,
    description: 'Feather tag',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-target': {
    name: 'feather-target',
    category: 'general' as const,
    description: 'Feather target',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-terminal': {
    name: 'feather-terminal',
    category: 'general' as const,
    description: 'Feather terminal',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-thermometer': {
    name: 'feather-thermometer',
    category: 'general' as const,
    description: 'Feather thermometer',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-thumbs-down': {
    name: 'feather-thumbs-down',
    category: 'general' as const,
    description: 'Feather thumbs down',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-thumbs-up': {
    name: 'feather-thumbs-up',
    category: 'general' as const,
    description: 'Feather thumbs up',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-toggle-left': {
    name: 'feather-toggle-left',
    category: 'general' as const,
    description: 'Feather toggle left',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-toggle-right': {
    name: 'feather-toggle-right',
    category: 'general' as const,
    description: 'Feather toggle right',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-tool': {
    name: 'feather-tool',
    category: 'general' as const,
    description: 'Feather tool',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-trash': {
    name: 'feather-trash',
    category: 'general' as const,
    description: 'Feather trash',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-trash-2': {
    name: 'feather-trash-2',
    category: 'general' as const,
    description: 'Feather trash 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-trello': {
    name: 'feather-trello',
    category: 'general' as const,
    description: 'Feather trello',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-trending-down': {
    name: 'feather-trending-down',
    category: 'general' as const,
    description: 'Feather trending down',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-trending-up': {
    name: 'feather-trending-up',
    category: 'general' as const,
    description: 'Feather trending up',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-triangle': {
    name: 'feather-triangle',
    category: 'general' as const,
    description: 'Feather triangle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-truck': {
    name: 'feather-truck',
    category: 'general' as const,
    description: 'Feather truck',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-tv': {
    name: 'feather-tv',
    category: 'general' as const,
    description: 'Feather tv',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-twitch': {
    name: 'feather-twitch',
    category: 'general' as const,
    description: 'Feather twitch',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-twitter': {
    name: 'feather-twitter',
    category: 'general' as const,
    description: 'Feather twitter',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-type': {
    name: 'feather-type',
    category: 'general' as const,
    description: 'Feather type',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-umbrella': {
    name: 'feather-umbrella',
    category: 'general' as const,
    description: 'Feather umbrella',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-underline': {
    name: 'feather-underline',
    category: 'general' as const,
    description: 'Feather underline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-unlock': {
    name: 'feather-unlock',
    category: 'general' as const,
    description: 'Feather unlock',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-upload': {
    name: 'feather-upload',
    category: 'general' as const,
    description: 'Feather upload',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-upload-cloud': {
    name: 'feather-upload-cloud',
    category: 'general' as const,
    description: 'Feather upload cloud',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-user': {
    name: 'feather-user',
    category: 'general' as const,
    description: 'Feather user',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-user-check': {
    name: 'feather-user-check',
    category: 'general' as const,
    description: 'Feather user check',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-user-minus': {
    name: 'feather-user-minus',
    category: 'general' as const,
    description: 'Feather user minus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-user-plus': {
    name: 'feather-user-plus',
    category: 'general' as const,
    description: 'Feather user plus',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-user-x': {
    name: 'feather-user-x',
    category: 'general' as const,
    description: 'Feather user x',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-users': {
    name: 'feather-users',
    category: 'general' as const,
    description: 'Feather users',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-video': {
    name: 'feather-video',
    category: 'general' as const,
    description: 'Feather video',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-video-off': {
    name: 'feather-video-off',
    category: 'general' as const,
    description: 'Feather video off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-voicemail': {
    name: 'feather-voicemail',
    category: 'general' as const,
    description: 'Feather voicemail',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-volume': {
    name: 'feather-volume',
    category: 'general' as const,
    description: 'Feather volume',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-volume-1': {
    name: 'feather-volume-1',
    category: 'general' as const,
    description: 'Feather volume 1',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-volume-2': {
    name: 'feather-volume-2',
    category: 'general' as const,
    description: 'Feather volume 2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-volume-x': {
    name: 'feather-volume-x',
    category: 'general' as const,
    description: 'Feather volume x',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-watch': {
    name: 'feather-watch',
    category: 'general' as const,
    description: 'Feather watch',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-wifi': {
    name: 'feather-wifi',
    category: 'general' as const,
    description: 'Feather wifi',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-wifi-off': {
    name: 'feather-wifi-off',
    category: 'general' as const,
    description: 'Feather wifi off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-wind': {
    name: 'feather-wind',
    category: 'general' as const,
    description: 'Feather wind',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-x': {
    name: 'feather-x',
    category: 'general' as const,
    description: 'Feather x',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-x-circle': {
    name: 'feather-x-circle',
    category: 'general' as const,
    description: 'Feather x circle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-x-octagon': {
    name: 'feather-x-octagon',
    category: 'general' as const,
    description: 'Feather x octagon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-x-square': {
    name: 'feather-x-square',
    category: 'general' as const,
    description: 'Feather x square',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-youtube': {
    name: 'feather-youtube',
    category: 'general' as const,
    description: 'Feather youtube',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-zap': {
    name: 'feather-zap',
    category: 'general' as const,
    description: 'Feather zap',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-zap-off': {
    name: 'feather-zap-off',
    category: 'general' as const,
    description: 'Feather zap off',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-zoom-in': {
    name: 'feather-zoom-in',
    category: 'general' as const,
    description: 'Feather zoom in',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'feather-zoom-out': {
    name: 'feather-zoom-out',
    category: 'general' as const,
    description: 'Feather zoom out',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'flow': {
    name: 'flow',
    category: 'general' as const,
    description: 'Flow',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'gethelp': {
    name: 'gethelp',
    category: 'general' as const,
    description: 'Gethelp',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'group1': {
    name: 'group1',
    category: 'general' as const,
    description: 'Group1',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'guide': {
    name: 'guide',
    category: 'general' as const,
    description: 'Guide',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'history': {
    name: 'history',
    category: 'general' as const,
    description: 'History',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'hotspot': {
    name: 'hotspot',
    category: 'general' as const,
    description: 'Hotspot',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'icon': {
    name: 'icon',
    category: 'general' as const,
    description: 'Icon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'iconwrapper': {
    name: 'iconwrapper',
    category: 'general' as const,
    description: 'Iconwrapper',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'increase': {
    name: 'increase',
    category: 'general' as const,
    description: 'Increase',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'keypad': {
    name: 'keypad',
    category: 'general' as const,
    description: 'Keypad',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'kit': {
    name: 'kit',
    category: 'general' as const,
    description: 'Kit',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'layer1': {
    name: 'layer1',
    category: 'general' as const,
    description: 'Layer1',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'logo1': {
    name: 'logo1',
    category: 'general' as const,
    description: 'Logo1',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'mobility': {
    name: 'mobility',
    category: 'general' as const,
    description: 'Mobility',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'networkhealth': {
    name: 'networkhealth',
    category: 'general' as const,
    description: 'Networkhealth',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'noannualcontract': {
    name: 'noannualcontract',
    category: 'general' as const,
    description: 'Noannualcontract',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'noextracharge': {
    name: 'noextracharge',
    category: 'general' as const,
    description: 'Noextracharge',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'numbers': {
    name: 'numbers',
    category: 'general' as const,
    description: 'Numbers',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'performancethreshold': {
    name: 'performancethreshold',
    category: 'general' as const,
    description: 'Performancethreshold',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'pin': {
    name: 'pin',
    category: 'general' as const,
    description: 'Pin',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'powerfulnetwork': {
    name: 'powerfulnetwork',
    category: 'general' as const,
    description: 'Powerfulnetwork',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1arrowdownandleft': {
    name: 'property1arrowdownandleft',
    category: 'general' as const,
    description: 'Property1arrowdownandleft',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1arrowdownandright': {
    name: 'property1arrowdownandright',
    category: 'general' as const,
    description: 'Property1arrowdownandright',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1default': {
    name: 'property1default',
    category: 'general' as const,
    description: 'Property1default',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1filled': {
    name: 'property1filled',
    category: 'general' as const,
    description: 'Property1filled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1outline': {
    name: 'property1outline',
    category: 'general' as const,
    description: 'Property1outline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant10': {
    name: 'property1variant10',
    category: 'general' as const,
    description: 'Property1variant10',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant11': {
    name: 'property1variant11',
    category: 'general' as const,
    description: 'Property1variant11',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant2': {
    name: 'property1variant2',
    category: 'general' as const,
    description: 'Property1variant2',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant3': {
    name: 'property1variant3',
    category: 'general' as const,
    description: 'Property1variant3',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant4': {
    name: 'property1variant4',
    category: 'general' as const,
    description: 'Property1variant4',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant5': {
    name: 'property1variant5',
    category: 'general' as const,
    description: 'Property1variant5',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant6': {
    name: 'property1variant6',
    category: 'general' as const,
    description: 'Property1variant6',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant7': {
    name: 'property1variant7',
    category: 'general' as const,
    description: 'Property1variant7',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant8': {
    name: 'property1variant8',
    category: 'general' as const,
    description: 'Property1variant8',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'property1variant9': {
    name: 'property1variant9',
    category: 'general' as const,
    description: 'Property1variant9',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'qrcode': {
    name: 'qrcode',
    category: 'general' as const,
    description: 'Qrcode',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'remote': {
    name: 'remote',
    category: 'general' as const,
    description: 'Remote',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'shape': {
    name: 'shape',
    category: 'general' as const,
    description: 'Shape',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'shareddata': {
    name: 'shareddata',
    category: 'general' as const,
    description: 'Shareddata',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'simcard': {
    name: 'simcard',
    category: 'general' as const,
    description: 'Simcard',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'size20x20': {
    name: 'size20x20',
    category: 'general' as const,
    description: 'Size20x20',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'size32x32': {
    name: 'size32x32',
    category: 'general' as const,
    description: 'Size32x32',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizel24x24directiondown': {
    name: 'sizel24x24directiondown',
    category: 'general' as const,
    description: 'Sizel24x24directiondown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizel24x24directionleft': {
    name: 'sizel24x24directionleft',
    category: 'general' as const,
    description: 'Sizel24x24directionleft',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizel24x24directionright': {
    name: 'sizel24x24directionright',
    category: 'general' as const,
    description: 'Sizel24x24directionright',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizel24x24directionup': {
    name: 'sizel24x24directionup',
    category: 'general' as const,
    description: 'Sizel24x24directionup',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizel32': {
    name: 'sizel32',
    category: 'general' as const,
    description: 'Sizel32',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizem20x20directiondown': {
    name: 'sizem20x20directiondown',
    category: 'general' as const,
    description: 'Sizem20x20directiondown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizem20x20directionleft': {
    name: 'sizem20x20directionleft',
    category: 'general' as const,
    description: 'Sizem20x20directionleft',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizem20x20directionright': {
    name: 'sizem20x20directionright',
    category: 'general' as const,
    description: 'Sizem20x20directionright',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizem20x20directionup': {
    name: 'sizem20x20directionup',
    category: 'general' as const,
    description: 'Sizem20x20directionup',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizem24': {
    name: 'sizem24',
    category: 'general' as const,
    description: 'Sizem24',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizes16x16directiondown': {
    name: 'sizes16x16directiondown',
    category: 'general' as const,
    description: 'Sizes16x16directiondown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizes16x16directionleft': {
    name: 'sizes16x16directionleft',
    category: 'general' as const,
    description: 'Sizes16x16directionleft',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizes16x16directionright': {
    name: 'sizes16x16directionright',
    category: 'general' as const,
    description: 'Sizes16x16directionright',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizes16x16directionup': {
    name: 'sizes16x16directionup',
    category: 'general' as const,
    description: 'Sizes16x16directionup',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizes20': {
    name: 'sizes20',
    category: 'general' as const,
    description: 'Sizes20',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexl32x32directiondown': {
    name: 'sizexl32x32directiondown',
    category: 'general' as const,
    description: 'Sizexl32x32directiondown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexl32x32directionleft': {
    name: 'sizexl32x32directionleft',
    category: 'general' as const,
    description: 'Sizexl32x32directionleft',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexl32x32directionright': {
    name: 'sizexl32x32directionright',
    category: 'general' as const,
    description: 'Sizexl32x32directionright',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexl32x32directionup': {
    name: 'sizexl32x32directionup',
    category: 'general' as const,
    description: 'Sizexl32x32directionup',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexl64': {
    name: 'sizexl64',
    category: 'general' as const,
    description: 'Sizexl64',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexs12x12directiondown': {
    name: 'sizexs12x12directiondown',
    category: 'general' as const,
    description: 'Sizexs12x12directiondown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexs12x12directionleft': {
    name: 'sizexs12x12directionleft',
    category: 'general' as const,
    description: 'Sizexs12x12directionleft',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexs12x12directionright': {
    name: 'sizexs12x12directionright',
    category: 'general' as const,
    description: 'Sizexs12x12directionright',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexs12x12directionup': {
    name: 'sizexs12x12directionup',
    category: 'general' as const,
    description: 'Sizexs12x12directionup',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexs16': {
    name: 'sizexs16',
    category: 'general' as const,
    description: 'Sizexs16',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexxl80': {
    name: 'sizexxl80',
    category: 'general' as const,
    description: 'Sizexxl80',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'sizexxs12': {
    name: 'sizexxs12',
    category: 'general' as const,
    description: 'Sizexxs12',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'speed': {
    name: 'speed',
    category: 'general' as const,
    description: 'Speed',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'stateascending': {
    name: 'stateascending',
    category: 'general' as const,
    description: 'Stateascending',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'statedescending': {
    name: 'statedescending',
    category: 'general' as const,
    description: 'Statedescending',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'stateunsorted': {
    name: 'stateunsorted',
    category: 'general' as const,
    description: 'Stateunsorted',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'staticip': {
    name: 'staticip',
    category: 'general' as const,
    description: 'Staticip',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'stream': {
    name: 'stream',
    category: 'general' as const,
    description: 'Stream',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'stylefilled': {
    name: 'stylefilled',
    category: 'general' as const,
    description: 'Stylefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'styleoutline': {
    name: 'styleoutline',
    category: 'general' as const,
    description: 'Styleoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'styleoutlined': {
    name: 'styleoutlined',
    category: 'general' as const,
    description: 'Styleoutlined',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'ticketicon': {
    name: 'ticketicon',
    category: 'general' as const,
    description: 'Ticketicon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'toggle': {
    name: 'toggle',
    category: 'general' as const,
    description: 'Toggle',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'tradein': {
    name: 'tradein',
    category: 'general' as const,
    description: 'Tradein',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typefilled': {
    name: 'typefilled',
    category: 'general' as const,
    description: 'Typefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typefilledcolorfalse': {
    name: 'typefilledcolorfalse',
    category: 'general' as const,
    description: 'Typefilledcolorfalse',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typefilledcoloroff': {
    name: 'typefilledcoloroff',
    category: 'general' as const,
    description: 'Typefilledcoloroff',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typefilledcoloron': {
    name: 'typefilledcoloron',
    category: 'general' as const,
    description: 'Typefilledcoloron',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typefilledcolortrue': {
    name: 'typefilledcolortrue',
    category: 'general' as const,
    description: 'Typefilledcolortrue',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typefilledtoasttimerfalse': {
    name: 'typefilledtoasttimerfalse',
    category: 'general' as const,
    description: 'Typefilledtoasttimerfalse',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typeoutline': {
    name: 'typeoutline',
    category: 'general' as const,
    description: 'Typeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typeoutlinecolorfalse': {
    name: 'typeoutlinecolorfalse',
    category: 'general' as const,
    description: 'Typeoutlinecolorfalse',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typeoutlinecoloroff': {
    name: 'typeoutlinecoloroff',
    category: 'general' as const,
    description: 'Typeoutlinecoloroff',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typeoutlinecoloron': {
    name: 'typeoutlinecoloron',
    category: 'general' as const,
    description: 'Typeoutlinecoloron',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typeoutlinetoasttimerfalse': {
    name: 'typeoutlinetoasttimerfalse',
    category: 'general' as const,
    description: 'Typeoutlinetoasttimerfalse',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetoasttimercoloron': {
    name: 'typetoasttimercoloron',
    category: 'general' as const,
    description: 'Typetoasttimercoloron',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetoasttimercoloron-original': {
    name: 'typetoasttimercoloron-original',
    category: 'general' as const,
    description: 'Typetoasttimercoloron original',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetoasttimercolortrue': {
    name: 'typetoasttimercolortrue',
    category: 'general' as const,
    description: 'Typetoasttimercolortrue',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetoasttimercolortrue-original': {
    name: 'typetoasttimercolortrue-original',
    category: 'general' as const,
    description: 'Typetoasttimercolortrue original',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetoasttimertoasttimertrue': {
    name: 'typetoasttimertoasttimertrue',
    category: 'general' as const,
    description: 'Typetoasttimertoasttimertrue',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetoasttimertoasttimertrue-original': {
    name: 'typetoasttimertoasttimertrue-original',
    category: 'general' as const,
    description: 'Typetoasttimertoasttimertrue original',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetype3coloron': {
    name: 'typetype3coloron',
    category: 'general' as const,
    description: 'Typetype3coloron',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'typetype4coloron': {
    name: 'typetype4coloron',
    category: 'general' as const,
    description: 'Typetype4coloron',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'uiarrows': {
    name: 'uiarrows',
    category: 'general' as const,
    description: 'Uiarrows',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'unlink': {
    name: 'unlink',
    category: 'general' as const,
    description: 'Unlink',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantbluetooth': {
    name: 'variantbluetooth',
    category: 'general' as const,
    description: 'Variantbluetooth',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallcompletetypefilled': {
    name: 'variantcallcompletetypefilled',
    category: 'general' as const,
    description: 'Variantcallcompletetypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallcompletetypeoutline': {
    name: 'variantcallcompletetypeoutline',
    category: 'general' as const,
    description: 'Variantcallcompletetypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallforwardingalttypefilled': {
    name: 'variantcallforwardingalttypefilled',
    category: 'general' as const,
    description: 'Variantcallforwardingalttypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallforwardingalttypeoutline': {
    name: 'variantcallforwardingalttypeoutline',
    category: 'general' as const,
    description: 'Variantcallforwardingalttypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallforwardingtypefilled': {
    name: 'variantcallforwardingtypefilled',
    category: 'general' as const,
    description: 'Variantcallforwardingtypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallforwardingtypeoutline': {
    name: 'variantcallforwardingtypeoutline',
    category: 'general' as const,
    description: 'Variantcallforwardingtypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallholdtypefilled': {
    name: 'variantcallholdtypefilled',
    category: 'general' as const,
    description: 'Variantcallholdtypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantcallholdtypeoutline': {
    name: 'variantcallholdtypeoutline',
    category: 'general' as const,
    description: 'Variantcallholdtypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantdisabled': {
    name: 'variantdisabled',
    category: 'general' as const,
    description: 'Variantdisabled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantenabled': {
    name: 'variantenabled',
    category: 'general' as const,
    description: 'Variantenabled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantfacebook': {
    name: 'variantfacebook',
    category: 'general' as const,
    description: 'Variantfacebook',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantformerlytwitter': {
    name: 'variantformerlytwitter',
    category: 'general' as const,
    description: 'Variantformerlytwitter',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'varianthidden': {
    name: 'varianthidden',
    category: 'general' as const,
    description: 'Varianthidden',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'varianthighvolume': {
    name: 'varianthighvolume',
    category: 'general' as const,
    description: 'Varianthighvolume',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantincomingcalltypefilled': {
    name: 'variantincomingcalltypefilled',
    category: 'general' as const,
    description: 'Variantincomingcalltypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantincomingcalltypeoutline': {
    name: 'variantincomingcalltypeoutline',
    category: 'general' as const,
    description: 'Variantincomingcalltypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantlabels': {
    name: 'variantlabels',
    category: 'general' as const,
    description: 'Variantlabels',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantlinkedin': {
    name: 'variantlinkedin',
    category: 'general' as const,
    description: 'Variantlinkedin',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantlowvolume': {
    name: 'variantlowvolume',
    category: 'general' as const,
    description: 'Variantlowvolume',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantmicoff': {
    name: 'variantmicoff',
    category: 'general' as const,
    description: 'Variantmicoff',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantmicon': {
    name: 'variantmicon',
    category: 'general' as const,
    description: 'Variantmicon',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantmissedcalltypefilled': {
    name: 'variantmissedcalltypefilled',
    category: 'general' as const,
    description: 'Variantmissedcalltypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantmissedcalltypeoutline': {
    name: 'variantmissedcalltypeoutline',
    category: 'general' as const,
    description: 'Variantmissedcalltypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantmute': {
    name: 'variantmute',
    category: 'general' as const,
    description: 'Variantmute',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantnovolume': {
    name: 'variantnovolume',
    category: 'general' as const,
    description: 'Variantnovolume',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantoperatingtypefilled': {
    name: 'variantoperatingtypefilled',
    category: 'general' as const,
    description: 'Variantoperatingtypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantoperatingtypeoutline': {
    name: 'variantoperatingtypeoutline',
    category: 'general' as const,
    description: 'Variantoperatingtypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantoutgoingcalltypefilled': {
    name: 'variantoutgoingcalltypefilled',
    category: 'general' as const,
    description: 'Variantoutgoingcalltypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantoutgoingcalltypeoutline': {
    name: 'variantoutgoingcalltypeoutline',
    category: 'general' as const,
    description: 'Variantoutgoingcalltypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantphonetypefilled': {
    name: 'variantphonetypefilled',
    category: 'general' as const,
    description: 'Variantphonetypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantphonetypeoutline': {
    name: 'variantphonetypeoutline',
    category: 'general' as const,
    description: 'Variantphonetypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantshown': {
    name: 'variantshown',
    category: 'general' as const,
    description: 'Variantshown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantthumbdowntypefilled': {
    name: 'variantthumbdowntypefilled',
    category: 'general' as const,
    description: 'Variantthumbdowntypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantthumbdowntypeoutline': {
    name: 'variantthumbdowntypeoutline',
    category: 'general' as const,
    description: 'Variantthumbdowntypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantthumbuptypefilled': {
    name: 'variantthumbuptypefilled',
    category: 'general' as const,
    description: 'Variantthumbuptypefilled',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'variantthumbuptypeoutline': {
    name: 'variantthumbuptypeoutline',
    category: 'general' as const,
    description: 'Variantthumbuptypeoutline',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'varianttwitter': {
    name: 'varianttwitter',
    category: 'general' as const,
    description: 'Varianttwitter',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'virtualassistant': {
    name: 'virtualassistant',
    category: 'general' as const,
    description: 'Virtualassistant',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'vrheadset': {
    name: 'vrheadset',
    category: 'general' as const,
    description: 'Vrheadset',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },

  // Interface Icons
  'minimizealt': {
    name: 'minimizealt',
    category: 'interface' as const,
    description: 'Minimizealt',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },

  // Navigation Icons
  'arrowwithbend': {
    name: 'arrowwithbend',
    category: 'navigation' as const,
    description: 'Arrowwithbend',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'directiondown': {
    name: 'directiondown',
    category: 'navigation' as const,
    description: 'Directiondown',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'directionleft': {
    name: 'directionleft',
    category: 'navigation' as const,
    description: 'Directionleft',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'directionright': {
    name: 'directionright',
    category: 'navigation' as const,
    description: 'Directionright',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
  'directionup': {
    name: 'directionup',
    category: 'navigation' as const,
    description: 'Directionup',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },

  // Security Icons
  '2factor': {
    name: '2factor',
    category: 'security' as const,
    description: '2factor',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },

  // Status Icons
  'infotimer': {
    name: 'infotimer',
    category: 'status' as const,
    description: 'Infotimer',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  },
} as const;

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