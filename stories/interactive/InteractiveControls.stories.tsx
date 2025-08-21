import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Switch,
  Slider,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '../../src/components';

const meta: Meta = {
  title: 'Components/Interactive/Controls',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Interactive control components for Comcast Business applications including switches, sliders, and accordions.'
      }
    }
  },
};

export default meta;
type Story = StoryObj;

export const SwitchControls: Story = {
  name: 'Business Service Switches',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Service Configuration</h2>
        
        <div className="space-y-6 border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium text-[#2B2D3F]">Auto-Pay</div>
              <div className="text-sm text-[#70717D]">Automatically pay your monthly bill</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium text-[#2B2D3F]">Email Notifications</div>
              <div className="text-sm text-[#70717D]">Receive service alerts and updates</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium text-[#2B2D3F]">Data Usage Alerts</div>
              <div className="text-sm text-[#70717D]">Get notified at 80% usage threshold</div>
            </div>
            <Switch />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium text-[#2B2D3F]">Network Monitoring</div>
              <div className="text-sm text-[#70717D]">24/7 proactive network health monitoring</div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="font-medium text-[#2B2D3F]">Guest WiFi</div>
              <div className="text-sm text-[#70717D]">Allow guest access to your network</div>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SliderControls: Story = {
  name: 'Network Performance Settings',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Bandwidth Allocation</h2>
        
        <div className="space-y-6 border rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[#2B2D3F]">Priority Traffic</div>
              <div className="text-sm font-semibold text-[#0D62FF]">70%</div>
            </div>
            <Slider defaultValue={[70]} max={100} step={5} className="w-full" />
            <div className="text-xs text-[#70717D]">Bandwidth reserved for business-critical applications</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[#2B2D3F]">Guest Network</div>
              <div className="text-sm font-semibold text-[#0D62FF]">15%</div>
            </div>
            <Slider defaultValue={[15]} max={50} step={5} className="w-full" />
            <div className="text-xs text-[#70717D]">Maximum bandwidth allocation for guest users</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[#2B2D3F]">Video Conferencing</div>
              <div className="text-sm font-semibold text-[#0D62FF]">40%</div>
            </div>
            <Slider defaultValue={[40]} max={80} step={5} className="w-full" />
            <div className="text-xs text-[#70717D]">Guaranteed bandwidth for video calls and meetings</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[#2B2D3F]">Data Backup</div>
              <div className="text-sm font-semibold text-[#0D62FF]">25%</div>
            </div>
            <Slider defaultValue={[25]} max={60} step={5} className="w-full" />
            <div className="text-xs text-[#70717D]">Bandwidth for automated backup operations</div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Security Settings</h2>
        
        <div className="space-y-6 border rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="font-medium text-[#2B2D3F]">Threat Detection Level</div>
              <div className="text-sm font-semibold text-[#0D62FF]">High</div>
            </div>
            <Slider defaultValue={[8]} max={10} step={1} className="w-full" />
            <div className="text-xs text-[#70717D]">Higher levels provide more protection but may affect performance</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AccordionControls: Story = {
  name: 'Service Information Panels',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Service Details</h2>
        
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="internet">
            <AccordionTrigger>Business Internet Pro - $159.99/mo</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Download Speed</div>
                    <div className="text-[#70717D] text-sm">Up to 1000 Mbps</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Upload Speed</div>
                    <div className="text-[#70717D] text-sm">Up to 1000 Mbps</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Data Allowance</div>
                    <div className="text-[#70717D] text-sm">Unlimited</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Installation</div>
                    <div className="text-[#70717D] text-sm">Professional Setup Included</div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="font-medium text-[#2B2D3F] text-sm mb-2">Included Features</div>
                  <ul className="text-sm text-[#70717D] space-y-1 list-disc list-inside">
                    <li>Static IP addresses available</li>
                    <li>24/7 business-class support</li>
                    <li>99.9% uptime SLA</li>
                    <li>Advanced security features</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="voice">
            <AccordionTrigger>Voice Services - $89.99/mo</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Phone Lines</div>
                    <div className="text-[#70717D] text-sm">Up to 25 lines</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Call Features</div>
                    <div className="text-[#70717D] text-sm">All premium features included</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Local Calling</div>
                    <div className="text-[#70717D] text-sm">Unlimited nationwide</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">International</div>
                    <div className="text-[#70717D] text-sm">Competitive rates available</div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="font-medium text-[#2B2D3F] text-sm mb-2">Advanced Features</div>
                  <ul className="text-sm text-[#70717D] space-y-1 list-disc list-inside">
                    <li>Auto-attendant with custom greetings</li>
                    <li>Voicemail to email transcription</li>
                    <li>Call forwarding and routing</li>
                    <li>Conference calling up to 50 participants</li>
                    <li>Mobile app for remote management</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="security">
            <AccordionTrigger>Advanced Security Suite - $49.99/mo</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Threat Protection</div>
                    <div className="text-[#70717D] text-sm">AI-powered detection</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Firewall</div>
                    <div className="text-[#70717D] text-sm">Enterprise-grade protection</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Monitoring</div>
                    <div className="text-[#70717D] text-sm">24/7 network surveillance</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Response</div>
                    <div className="text-[#70717D] text-sm">Automated threat response</div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="font-medium text-[#2B2D3F] text-sm mb-2">Security Features</div>
                  <ul className="text-sm text-[#70717D] space-y-1 list-disc list-inside">
                    <li>DDoS attack protection</li>
                    <li>Malware and virus scanning</li>
                    <li>Web content filtering</li>
                    <li>VPN access for remote workers</li>
                    <li>Security incident reporting</li>
                    <li>Compliance assistance (HIPAA, PCI, etc.)</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="support">
            <AccordionTrigger>Premium Support - Included</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Availability</div>
                    <div className="text-[#70717D] text-sm">24/7/365 support</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Response Time</div>
                    <div className="text-[#70717D] text-sm">Priority business queue</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">Account Manager</div>
                    <div className="text-[#70717D] text-sm">Dedicated business representative</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#2B2D3F] text-sm">On-site Service</div>
                    <div className="text-[#70717D] text-sm">Available when needed</div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="font-medium text-[#2B2D3F] text-sm mb-2">Support Channels</div>
                  <ul className="text-sm text-[#70717D] space-y-1 list-disc list-inside">
                    <li>Phone: 1-800-COMCAST (business priority)</li>
                    <li>Online chat with technical specialists</li>
                    <li>Email support with guaranteed response times</li>
                    <li>Self-service portal with advanced tools</li>
                    <li>Mobile app for service management</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};