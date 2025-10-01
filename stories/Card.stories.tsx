import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardMedia,
  CardActions,
  CardDivider,
  Button
} from '../src/components';
// @ts-expect-error - Some lucide-react icons may not be exported in current version
import { Heart, Share, Bookmark, MoreHorizontal, Star, Play, Download, PlayCircle } from 'lucide-react';
import CardDocs from './Card.mdx';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      page: CardDocs,
      description: {
        component: 'Card component with enhanced features including media support, action areas, and different card types following design patterns.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'filled', 'outlined', 'interactive'],
      description: 'Card variant style',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl', 'full'],
      description: 'Card size',
    },
    padding: {
      control: 'select',
      options: ['none', 'compact', 'default', 'spacious'],
      description: 'Card padding',
    },
    draggable: {
      control: 'boolean',
      description: 'Make the card draggable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// AllVariants story showcasing all card variations
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-6xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Card Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="default" className="w-[300px]">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard card with border and light shadow.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Basic card styling for general content.</p>
            </CardContent>
          </Card>

          <Card variant="elevated" className="w-[300px]">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>Card with enhanced shadow depth.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Elevated cards draw more attention.</p>
            </CardContent>
          </Card>

          <Card variant="filled" className="w-[300px]">
            <CardHeader>
              <CardTitle>Filled Card</CardTitle>
              <CardDescription>Card with filled background.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Filled cards provide subtle differentiation.</p>
            </CardContent>
          </Card>

          <Card variant="outlined" className="w-[300px]">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>Card with prominent border.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Outlined cards provide clear boundaries.</p>
            </CardContent>
          </Card>

          <Card variant="interactive" className="w-[300px]" onCardClick={() => {}}>
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Click to interact.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Interactive cards respond to hover/click.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Card Sizes</h3>
        <div className="space-y-4">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Small Card</CardTitle>
              <CardDescription>max-w-sm (384px)</CardDescription>
            </CardHeader>
          </Card>
          <Card size="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>max-w-md (448px)</CardDescription>
            </CardHeader>
          </Card>
          <Card size="lg">
            <CardHeader>
              <CardTitle>Large Card</CardTitle>
              <CardDescription>max-w-lg (512px)</CardDescription>
            </CardHeader>
          </Card>
          <Card size="xl">
            <CardHeader>
              <CardTitle>Extra Large Card</CardTitle>
              <CardDescription>max-w-xl (576px)</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Media</h3>
        <Card className="w-[350px]">
          <CardMedia className="bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="h-12 w-12 text-white" />
            </div>
          </CardMedia>
          <CardHeader>
            <CardTitle>Product Demo</CardTitle>
            <CardDescription>Watch our latest demonstration.</CardDescription>
          </CardHeader>
          <CardActions layout="end">
            <Button>Watch Now</Button>
          </CardActions>
        </Card>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Actions at End</CardTitle>
              <CardDescription>Standard placement.</CardDescription>
            </CardHeader>
            <CardActions layout="end">
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </CardActions>
          </Card>

          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Actions Between</CardTitle>
              <CardDescription>Spaced apart.</CardDescription>
            </CardHeader>
            <CardActions layout="between">
              <Button variant="outline">Secondary</Button>
              <Button>Primary</Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Dividers</h3>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Service Package</CardTitle>
            <CardDescription>Pricing breakdown.</CardDescription>
          </CardHeader>
          <CardDivider />
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Internet</span>
                <span className="font-semibold">$99/month</span>
              </div>
              <div className="flex justify-between">
                <span>Phone</span>
                <span className="font-semibold">$49/month</span>
              </div>
            </div>
          </CardContent>
          <CardDivider />
          <CardFooter className="justify-between">
            <span className="font-bold">$148/month</span>
            <Button>Subscribe</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Internet Service</CardTitle>
        <CardDescription>High-speed business internet solutions.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Get reliable, fast internet connection for your business needs.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Learn More</Button>
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Simple Card</h3>
          <p className="text-sm text-muted-foreground">
            A simple card with just content.
          </p>
        </div>
      </CardContent>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card variant="default" className="w-[300px]">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard card with border and light shadow.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Basic card styling for general content.</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated" className="w-[300px]">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>Card with enhanced shadow depth.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Elevated cards draw more attention to important content.</p>
        </CardContent>
      </Card>
      
      <Card variant="filled" className="w-[300px]">
        <CardHeader>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>Card with filled background color.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Filled cards provide subtle surface differentiation.</p>
        </CardContent>
      </Card>
      
      <Card variant="outlined" className="w-[300px]">
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>Card with prominent border.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Outlined cards provide clear boundaries.</p>
        </CardContent>
      </Card>
      
      <Card variant="interactive" className="w-[300px]" onCardClick={() => alert('Card clicked!')}>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Click to interact with this card.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Interactive cards respond to hover and click events.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="w-[350px]">
        <CardMedia className="bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="h-12 w-12 text-white" />
          </div>
        </CardMedia>
        <CardHeader>
          <CardTitle>Product Demo</CardTitle>
          <CardDescription>Watch our latest product demonstration.</CardDescription>
        </CardHeader>
        <CardActions layout="between">
          <div className="flex gap-2">
            <Button size="sm" variant="ghost">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Share className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
          <Button size="sm">Watch Now</Button>
        </CardActions>
      </Card>
      
      <Card className="w-[350px]">
        <CardMedia aspectRatio="4/3" className="bg-gradient-to-r from-green-400 to-blue-500">
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
            <div className="text-white">
              <h3 className="font-semibold">Service Overview</h3>
            </div>
          </div>
        </CardMedia>
        <CardHeader>
          <CardTitle>Business Solutions</CardTitle>
          <CardDescription>Comprehensive business communication solutions.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Discover how our services can transform your business operations.</p>
        </CardContent>
        <CardActions>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  ),
};

export const WithDividers: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Service Package</CardTitle>
        <CardDescription>Everything you need for your business.</CardDescription>
      </CardHeader>
      
      <CardDivider />
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Internet Service</span>
            <span className="font-semibold">$99/month</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Phone Service</span>
            <span className="font-semibold">$49/month</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Security Package</span>
            <span className="font-semibold">$29/month</span>
          </div>
        </div>
      </CardContent>
      
      <CardDivider />
      
      <CardFooter className="justify-between">
        <div>
          <span className="text-sm text-gray-600">Total: </span>
          <span className="text-lg font-bold">$177/month</span>
        </div>
        <Button>Subscribe</Button>
      </CardFooter>
    </Card>
  ),
};

export const CardSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card size="sm">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>Compact card for limited space.</CardDescription>
          </CardHeader>
        </Card>
        
        <Card size="default">
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Standard card size for most content.</CardDescription>
          </CardHeader>
        </Card>
        
        <Card size="lg">
          <CardHeader>
            <CardTitle>Large Card</CardTitle>
            <CardDescription>Larger card for more detailed content.</CardDescription>
          </CardHeader>
        </Card>
        
        <Card size="xl">
          <CardHeader>
            <CardTitle>Extra Large Card</CardTitle>
            <CardDescription>Maximum card size for extensive content.</CardDescription>
          </CardHeader>
        </Card>
      </div>
      
      <Card size="full">
        <CardHeader>
          <CardTitle>Full Width Card</CardTitle>
          <CardDescription>Card that spans the full width of its container.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card adapts to the full width of its parent container, making it ideal for dashboard layouts and content that needs maximum horizontal space.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const ActionLayouts: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Actions at End</CardTitle>
          <CardDescription>Standard action placement.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Actions are typically placed at the end of the card.</p>
        </CardContent>
        <CardActions layout="end">
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </CardActions>
      </Card>
      
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Actions Between</CardTitle>
          <CardDescription>Space between actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Actions can be spaced apart for different emphasis.</p>
        </CardContent>
        <CardActions layout="between">
          <Button variant="outline">Secondary</Button>
          <Button>Primary</Button>
        </CardActions>
      </Card>
      
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Centered Actions</CardTitle>
          <CardDescription>Actions in the center.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Center-aligned actions for symmetric layouts.</p>
        </CardContent>
        <CardActions layout="center">
          <Button>Single Action</Button>
        </CardActions>
      </Card>
      
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Mixed Actions</CardTitle>
          <CardDescription>Icon and text actions combined.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Combine different action types for comprehensive controls.</p>
        </CardContent>
        <CardActions layout="between">
          <div className="flex gap-1">
            <Button size="sm" variant="ghost">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Star className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <Button size="sm">Save</Button>
        </CardActions>
      </Card>
    </div>
  ),
};

export const DraggableCards: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 mb-4">These cards can be dragged around (try dragging them):</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card draggable className="w-[250px]">
          <CardHeader>
            <CardTitle>Draggable Card 1</CardTitle>
            <CardDescription>This card can be dragged.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Drag me around the screen!</p>
          </CardContent>
        </Card>
        
        <Card draggable variant="elevated" className="w-[250px]">
          <CardHeader>
            <CardTitle>Draggable Card 2</CardTitle>
            <CardDescription>Elevated draggable card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>I'm elevated and draggable!</p>
          </CardContent>
        </Card>
        
        <Card draggable variant="filled" className="w-[250px]">
          <CardHeader>
            <CardTitle>Draggable Card 3</CardTitle>
            <CardDescription>Filled draggable card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Filled style with drag support!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [liked, setLiked] = React.useState(false);
    const [bookmarked, setBookmarked] = React.useState(false);
    
    return (
      <Card className="w-[350px]" variant="interactive" onCardClick={() => alert('Card clicked!')}>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Click anywhere on the card or use the action buttons.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card responds to hover, focus, and click events with proper accessibility support.</p>
        </CardContent>
        <CardActions layout="between">
          <div className="flex gap-1">
            <Button 
              size="sm" 
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button 
              size="sm" 
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                setBookmarked(!bookmarked);
              }}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-blue-500 text-blue-500' : ''}`} />
            </Button>
          </div>
          <Button 
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              alert('Download clicked!');
            }}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </CardActions>
      </Card>
    );
  },
};

// Story demonstrating the balanced layout: header top-aligned, content bottom-aligned
export const BalancedLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
      {/* Short content card */}
      <Card className="h-64">
        <CardHeader>
          <CardTitle>Quick Service</CardTitle>
          <CardDescription>Fast and reliable internet service for small businesses.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">$49/mo</div>
            <Button className="w-full">Get Started</Button>
          </div>
        </CardContent>
      </Card>

      {/* Medium content card */}
      <Card className="h-64">
        <CardHeader>
          <CardTitle>Business Pro</CardTitle>
          <CardDescription>Enhanced internet with additional features for growing businesses.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Up to 100 Mbps</li>
              <li>• 24/7 Support</li>
            </ul>
            <div className="text-2xl font-bold text-primary">$99/mo</div>
            <Button className="w-full">Choose Plan</Button>
          </div>
        </CardContent>
      </Card>

      {/* Long content card */}
      <Card className="h-64">
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>Complete solution for large organizations with advanced needs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Up to 1 Gbps</li>
              <li>• Dedicated Support</li>
              <li>• Security Suite</li>
              <li>• Priority Service</li>
            </ul>
            <div className="text-2xl font-bold text-primary">$299/mo</div>
            <Button className="w-full">Contact Sales</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates balanced card layout where headers are top-aligned and content (pricing/actions) is bottom-aligned, creating visual harmony even with varying content lengths.'
      }
    }
  }
};