import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { 
  Input,
  Label, 
  Textarea,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button
} from '../../src/components';

const meta: Meta = {
  title: 'Components/Inputs/Form Elements',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete set of form input components following Comcast Business Design System patterns.'
      }
    }
  },
};

export default meta;
type Story = StoryObj;

export const AllInputs: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [plan, setPlan] = useState('');
    const [service, setService] = useState('');

    return (
      <div className="space-y-8 max-w-lg">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2B2D3F]">Form Input Components</h2>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your business needs..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Business Plan</Label>
            <Select value={plan} onValueChange={setPlan}>
              <SelectTrigger>
                <SelectValue placeholder="Select your plan type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starter">Business Starter</SelectItem>
                <SelectItem value="professional">Business Professional</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Service Type</Label>
            <RadioGroup value={service} onValueChange={setService}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="internet" id="internet" />
                <Label htmlFor="internet">Business Internet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="voice" id="voice" />
                <Label htmlFor="voice">Voice Services</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bundle" id="bundle" />
                <Label htmlFor="bundle">Complete Bundle</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={newsletter}
              onCheckedChange={setNewsletter}
            />
            <Label htmlFor="newsletter">
              Subscribe to business updates and service notifications
            </Label>
          </div>

          <div className="pt-4">
            <Button className="w-full">
              Submit Business Inquiry
            </Button>
          </div>
        </div>
      </div>
    );
  },
};