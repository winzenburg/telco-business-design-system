import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Switch,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Alert,
  AlertDescription,
  Badge,
  Separator,
  Avatar,
  AvatarFallback,
  AvatarImage,
  RadioGroup,
  RadioGroupItem,
  Slider,
  Toast,
  Combobox,
  Textarea,
} from '../../src/components';
import {
  User,
  Bell,
  Shield,
  Globe,
  Palette,
  Save,
  Camera,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Key,
  AlertCircle,
  Check,
  Smartphone,
  Monitor,
  Moon,
  Sun,
} from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/Settings Management',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive settings management interface demonstrating various configuration options and preferences.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// US States for location Combobox
const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

// Timezone options
const TIMEZONES = [
  { value: 'EST', label: 'Eastern Time (ET)' },
  { value: 'CST', label: 'Central Time (CT)' },
  { value: 'MST', label: 'Mountain Time (MT)' },
  { value: 'PST', label: 'Pacific Time (PT)' },
  { value: 'AKST', label: 'Alaska Time (AKT)' },
  { value: 'HST', label: 'Hawaii Time (HT)' },
];

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  bio?: string;
}

interface SettingsFlowProps {
  showErrors?: boolean;
}

const SettingsFlow: React.FC<SettingsFlowProps> = ({ showErrors = false }) => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '(555) 123-4567',
    company: 'Acme Corporation',
    role: 'IT Manager',
    state: 'PA',
    timezone: 'EST',
    bio: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const [notifications, setNotifications] = useState({
    email: {
      marketing: true,
      security: true,
      updates: false,
      newsletter: true,
    },
    push: {
      desktop: true,
      mobile: false,
    },
    sms: false,
    frequency: 'instant',
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: '30',
    passwordExpiry: '90',
    ipRestriction: false,
    allowedIPs: '',
  });

  const [appearance, setAppearance] = useState({
    theme: 'light',
    fontSize: '16',
    compactMode: false,
    animations: true,
    colorBlind: false,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-[var(--ds-color-text-muted)]">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Billing</span>
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and contact details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="secondary" size="sm">
                    <Camera className="mr-2 h-4 w-4" />
                    Change Avatar
                  </Button>
                  <p className="text-xs text-[var(--ds-color-text-muted)]">
                    JPG, GIF or PNG. Max size of 2MB
                  </p>
                </div>
              </div>

              <Separator />

              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="inline h-3 w-3 mr-1" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="inline h-3 w-3 mr-1" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={profile.company}
                    onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={profile.role} onValueChange={(value) => setProfile({ ...profile, role: value })}>
                    <SelectTrigger id="role">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IT Manager">IT Manager</SelectItem>
                      <SelectItem value="Developer">Developer</SelectItem>
                      <SelectItem value="Designer">Designer</SelectItem>
                      <SelectItem value="Product Manager">Product Manager</SelectItem>
                      <SelectItem value="Executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">
                    <MapPin className="inline h-3 w-3 mr-1" />
                    State
                  </Label>
                  <Combobox
                    options={US_STATES}
                    value={profile.state}
                    onValueChange={(value) => setProfile({ ...profile, state: value })}
                    placeholder="Select state"
                    searchPlaceholder="Search states..."
                    width="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Combobox
                    options={TIMEZONES}
                    value={profile.timezone}
                    onValueChange={(value) => setProfile({ ...profile, timezone: value })}
                    placeholder="Select timezone"
                    searchPlaceholder="Search timezones..."
                    width="w-full"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="bio">Bio (Optional)</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us a bit about yourself..."
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    rows={4}
                  />
                  <p className="text-xs text-[var(--ds-color-text-muted)]">
                    {profile.bio.length}/500 characters
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Choose what emails you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing">Marketing emails</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Receive emails about new products and features
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={notifications.email.marketing}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      email: { ...notifications.email, marketing: checked }
                    })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="security-emails">Security alerts</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Receive emails about your account security
                  </p>
                </div>
                <Switch
                  id="security-emails"
                  checked={notifications.email.security}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      email: { ...notifications.email, security: checked }
                    })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="updates">Product updates</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Receive emails about product updates and changes
                  </p>
                </div>
                <Switch
                  id="updates"
                  checked={notifications.email.updates}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      email: { ...notifications.email, updates: checked }
                    })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="newsletter">Newsletter</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Our monthly newsletter with tips and best practices
                  </p>
                </div>
                <Switch
                  id="newsletter"
                  checked={notifications.email.newsletter}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      email: { ...notifications.email, newsletter: checked }
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Push Notifications</CardTitle>
              <CardDescription>
                Manage your push notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="desktop-push" className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                    Desktop notifications
                  </Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Show notifications on your desktop
                  </p>
                </div>
                <Switch
                  id="desktop-push"
                  checked={notifications.push.desktop}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      push: { ...notifications.push, desktop: checked }
                    })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="mobile-push" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    Mobile notifications
                  </Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Push notifications to your mobile device
                  </p>
                </div>
                <Switch
                  id="mobile-push"
                  checked={notifications.push.mobile}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      push: { ...notifications.push, mobile: checked }
                    })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Frequency</CardTitle>
              <CardDescription>
                How often do you want to receive notifications?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={notifications.frequency}
                onValueChange={(value) => setNotifications({ ...notifications, frequency: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="instant" id="instant" />
                  <Label htmlFor="instant">Instant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily">Daily digest</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly">Weekly summary</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Keep your account secure with these recommended settings
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="2fa">Enable 2FA</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Require a verification code in addition to your password
                  </p>
                </div>
                <Switch
                  id="2fa"
                  checked={security.twoFactor}
                  onCheckedChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
                />
              </div>
              {security.twoFactor && (
                <Alert>
                  <Check className="h-4 w-4" />
                  <AlertDescription>
                    Two-factor authentication is enabled. You'll receive codes via SMS.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Management</CardTitle>
              <CardDescription>
                Control your session timeout and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="timeout">Session timeout (minutes)</Label>
                <Select
                  value={security.sessionTimeout}
                  onValueChange={(value) => setSecurity({ ...security, sessionTimeout: value })}
                >
                  <SelectTrigger id="timeout">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-expiry">Password expiry (days)</Label>
                <Select
                  value={security.passwordExpiry}
                  onValueChange={(value) => setSecurity({ ...security, passwordExpiry: value })}
                >
                  <SelectTrigger id="password-expiry">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password or set up password recovery
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="secondary">
                <Key className="mr-2 h-4 w-4" />
                Change Password
              </Button>
              <p className="text-sm text-[var(--ds-color-text-muted)]">
                Last changed: 23 days ago
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>
                Customize how the application looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RadioGroup
                value={appearance.theme}
                onValueChange={(value) => setAppearance({ ...appearance, theme: value })}
              >
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="flex flex-col items-center space-y-2">
                      <RadioGroupItem value="light" id="light-theme" />
                      <Label htmlFor="light-theme" className="flex flex-col items-center">
                        <Sun className="h-8 w-8 mb-2" />
                        Light
                      </Label>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center space-y-2">
                      <RadioGroupItem value="dark" id="dark-theme" />
                      <Label htmlFor="dark-theme" className="flex flex-col items-center">
                        <Moon className="h-8 w-8 mb-2" />
                        Dark
                      </Label>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex flex-col items-center space-y-2">
                      <RadioGroupItem value="system" id="system-theme" />
                      <Label htmlFor="system-theme" className="flex flex-col items-center">
                        <Globe className="h-8 w-8 mb-2" />
                        System
                      </Label>
                    </div>
                  </Card>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Display Preferences</CardTitle>
              <CardDescription>
                Adjust display settings for better readability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size: {appearance.fontSize}px</Label>
                <Slider
                  id="font-size"
                  min={12}
                  max={20}
                  step={1}
                  value={[parseInt(appearance.fontSize)]}
                  onValueChange={(value) => setAppearance({ ...appearance, fontSize: value[0].toString() })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compact">Compact mode</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Reduce spacing between elements
                  </p>
                </div>
                <Switch
                  id="compact"
                  checked={appearance.compactMode}
                  onCheckedChange={(checked) => setAppearance({ ...appearance, compactMode: checked })}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="animations">Animations</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Enable smooth transitions and animations
                  </p>
                </div>
                <Switch
                  id="animations"
                  checked={appearance.animations}
                  onCheckedChange={(checked) => setAppearance({ ...appearance, animations: checked })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Settings */}
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>
                You are currently on the Professional plan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Professional Plan</h4>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Up to 50 users • Advanced features
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$149</div>
                  <div className="text-sm text-[var(--ds-color-text-muted)]">per month</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">Change Plan</Button>
                <Button variant="ghost">Cancel Subscription</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                Manage your payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-8 w-8" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Expires 12/24</p>
                  </div>
                </div>
                <Badge variant="secondary">Default</Badge>
              </div>
              <Button variant="secondary" size="sm">
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>
                Download your past invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">November 2024</p>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Paid on Nov 1, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">Download</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">October 2024</p>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Paid on Oct 1, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">Download</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">September 2024</p>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Paid on Sep 1, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">Download</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="sticky bottom-4 mt-6 flex justify-end">
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="shadow-lg"
        >
          {saved ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Saved
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      {saved && (
        <Alert className="fixed bottom-4 right-4 w-auto">
          <Check className="h-4 w-4" />
          <AlertDescription>
            Your settings have been saved successfully.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => <SettingsFlow showErrors={false} />,
};

export const WithValidationErrors: Story = {
  render: () => <SettingsFlow showErrors={true} />,
};