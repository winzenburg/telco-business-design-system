import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Slider } from '../../../components/ui/slider';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An input where the user selects a value from within a given range.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number' } },
    disabled: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([33]);
    
    return (
      <div className="space-y-3 w-[300px]">
        <Label htmlFor="slider">Volume: {value[0]}%</Label>
        <Slider
          id="slider"
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    );
  },
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75]);
    
    return (
      <div className="space-y-3 w-[300px]">
        <Label htmlFor="range-slider">Range: {value[0]} - {value[1]}</Label>
        <Slider
          id="range-slider"
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [60],
    max: 100,
    step: 1,
    disabled: true,
    className: 'w-[60%]',
  },
};

export const BandwidthControl: Story = {
  render: () => {
    const [bandwidth, setBandwidth] = useState([100]);
    const maxBandwidth = 200;
    const currentUsage = 75;
    
    const monthlyRate = bandwidth[0] <= 50 ? 99 : 
                      bandwidth[0] <= 100 ? 149 : 
                      bandwidth[0] <= 150 ? 199 : 249;
    
    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="wifi" size={20} color="currentColor" />
            Internet Speed Control
          </CardTitle>
          <CardDescription>
            Adjust your business internet speed plan. Changes take effect on your next billing cycle.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="bandwidth-slider">Speed Limit</Label>
              <div className="text-right">
                <div className="font-medium text-[#15172B]">{bandwidth[0]} Mbps</div>
                <div className="text-sm text-[#70717D]">${monthlyRate}/month</div>
              </div>
            </div>
            
            <Slider
              id="bandwidth-slider"
              value={bandwidth}
              onValueChange={setBandwidth}
              max={maxBandwidth}
              min={25}
              step={25}
              className="w-full"
            />
            
            <div className="flex justify-between text-xs text-[#70717D]">
              <span>25 Mbps</span>
              <span>200 Mbps</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#70717D]">Current Usage</span>
              <span className="font-medium text-[#15172B]">{currentUsage} Mbps</span>
            </div>
            
            <div className="relative">
              <div className="h-2 bg-gray-100 rounded-full">
                <div 
                  className="h-2 bg-[#0D62FF] rounded-full transition-all"
                  style={{ width: `${(currentUsage / bandwidth[0]) * 100}%` }}
                />
              </div>
              <div className="text-xs text-center mt-1 text-[#70717D]">
                {Math.round((currentUsage / bandwidth[0]) * 100)}% of allocated speed
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <Button className="w-full">
              Update Speed Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState([70]);
    
    const getVolumeIcon = (vol: number) => {
      if (vol === 0) return 'variantnovolume';
      if (vol < 30) return 'variantlowvolume';
      if (vol < 70) return 'variantmicoff';
      return 'varianthighvolume';
    };
    
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="conference" size={20} color="currentColor" />
            Call Volume Settings
          </CardTitle>
          <CardDescription>
            Adjust the speaker volume for your Business Voice calls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Icon name={getVolumeIcon(volume[0])} size={20} color="currentColor" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={5}
              className="flex-1"
            />
            <span className="text-sm font-medium text-[#15172B] w-12">
              {volume[0]}%
            </span>
          </div>
          
          <div className="flex justify-between text-xs text-[#70717D]">
            <span>Mute</span>
            <span>Max</span>
          </div>
          
          {volume[0] === 0 && (
            <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded">
              <Icon name="alert" size={16} color="#f59e0b" className="inline mr-2" />
              Calls are currently muted
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const SecurityLevel: Story = {
  render: () => {
    const [securityLevel, setSecurityLevel] = useState([2]);
    
    const levels = [
      { name: 'Basic', description: 'Standard firewall protection' },
      { name: 'Enhanced', description: 'Advanced threat detection' },
      { name: 'Maximum', description: 'Enterprise-grade security' },
      { name: 'Custom', description: 'Fully customizable rules' },
    ];
    
    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="blockers" size={20} color="currentColor" />
            Security Level Configuration
          </CardTitle>
          <CardDescription>
            Adjust your network security settings based on your business needs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="security-slider">Security Level</Label>
              <div className="text-right">
                <div className="font-medium text-[#15172B]">
                  {levels[securityLevel[0]].name}
                </div>
                <div className="text-sm text-[#70717D]">
                  {levels[securityLevel[0]].description}
                </div>
              </div>
            </div>
            
            <Slider
              id="security-slider"
              value={securityLevel}
              onValueChange={setSecurityLevel}
              max={3}
              min={0}
              step={1}
              className="w-full"
            />
            
            <div className="flex justify-between text-xs text-[#70717D]">
              <span>Basic</span>
              <span>Enhanced</span>
              <span>Maximum</span>
              <span>Custom</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm font-medium text-[#15172B]">Security Features</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#70717D]">Firewall Protection</span>
                <span className="text-[#16a34a]">✓ Enabled</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#70717D]">Threat Detection</span>
                <span className={securityLevel[0] >= 1 ? "text-[#16a34a]" : "text-[#70717D]"}>
                  {securityLevel[0] >= 1 ? "✓ Enabled" : "○ Disabled"}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#70717D]">Advanced Monitoring</span>
                <span className={securityLevel[0] >= 2 ? "text-[#16a34a]" : "text-[#70717D]"}>
                  {securityLevel[0] >= 2 ? "✓ Enabled" : "○ Disabled"}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#70717D]">Custom Rules</span>
                <span className={securityLevel[0] >= 3 ? "text-[#16a34a]" : "text-[#70717D]"}>
                  {securityLevel[0] >= 3 ? "✓ Enabled" : "○ Disabled"}
                </span>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <Button className="w-full">
              Apply Security Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const DataAllocation: Story = {
  render: () => {
    const [allocations, setAllocations] = useState([40, 70]);
    const totalData = 1000; // GB
    
    const emailData = (allocations[0] / 100) * totalData;
    const webData = ((allocations[1] - allocations[0]) / 100) * totalData;
    const otherData = ((100 - allocations[1]) / 100) * totalData;
    
    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="analytics" size={20} color="currentColor" />
            Data Allocation Settings
          </CardTitle>
          <CardDescription>
            Distribute your monthly data allowance across different business functions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Data Distribution ({totalData} GB total)</Label>
            
            <Slider
              value={allocations}
              onValueChange={setAllocations}
              max={100}
              step={5}
              className="w-full"
            />
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#0D62FF] rounded"></div>
                  <span className="text-sm font-medium text-[#15172B]">Email & Communication</span>
                </div>
                <div className="text-sm font-medium text-[#15172B]">
                  {emailData.toFixed(0)} GB ({allocations[0]}%)
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#16a34a] rounded"></div>
                  <span className="text-sm font-medium text-[#15172B]">Web & Applications</span>
                </div>
                <div className="text-sm font-medium text-[#15172B]">
                  {webData.toFixed(0)} GB ({(allocations[1] - allocations[0])}%)
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#70717D] rounded"></div>
                  <span className="text-sm font-medium text-[#15172B]">Other Services</span>
                </div>
                <div className="text-sm font-medium text-[#15172B]">
                  {otherData.toFixed(0)} GB ({(100 - allocations[1])}%)
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <Button className="w-full">
              Update Allocation
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};