import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Directional Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Test story to verify directional icons are working correctly.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllDirectionalIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6 p-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="directionup" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">directionup</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="directiondown" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">directiondown</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="directionleft" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">directionleft</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="directionright" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">directionright</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="chevron" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">chevron</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="arrow" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">arrow</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="backarrow" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">backarrow</div>
      </div>
      
      <div className="text-center space-y-2">
        <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
          <Icon name="doublechevron" size={24} color="#0D62FF" />
        </div>
        <div className="text-sm text-[#70717D]">doublechevron</div>
      </div>
    </div>
  ),
};

export const SizedDirectionalIcons: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-medium text-[#15172B] mb-4">Size Variants - Direction Down</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
              <Icon name="sizexs12x12directiondown" size={12} color="#0D62FF" />
            </div>
            <div className="text-xs text-[#70717D]">12x12</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
              <Icon name="sizes16x16directiondown" size={16} color="#0D62FF" />
            </div>
            <div className="text-xs text-[#70717D]">16x16</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
              <Icon name="sizem20x20directiondown" size={20} color="#0D62FF" />
            </div>
            <div className="text-xs text-[#70717D]">20x20</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
              <Icon name="sizel24x24directiondown" size={24} color="#0D62FF" />
            </div>
            <div className="text-xs text-[#70717D]">24x24</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 border border-[#E8EAEF] rounded-lg flex items-center justify-center">
              <Icon name="sizexl32x32directiondown" size={32} color="#0D62FF" />
            </div>
            <div className="text-xs text-[#70717D]">32x32</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BusinessContextDirectional: Story = {
  render: () => (
    <div className="space-y-6 p-6 w-[500px]">
      <div className="border border-[#E8EAEF] rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="wifi" size={20} color="#16a34a" />
            <div>
              <div className="font-medium text-[#15172B]">Internet Pro 100</div>
              <div className="text-sm text-[#70717D]">100 Mbps • Active</div>
            </div>
          </div>
          <Icon name="directiondown" size={16} color="#70717D" />
        </div>
      </div>
      
      <div className="border border-[#E8EAEF] rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="conference" size={20} color="#16a34a" />
            <div>
              <div className="font-medium text-[#15172B]">Business Voice</div>
              <div className="text-sm text-[#70717D]">15 Lines • Active</div>
            </div>
          </div>
          <Icon name="directionright" size={16} color="#70717D" />
        </div>
      </div>
      
      <div className="border border-[#E8EAEF] rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-[#70717D]">Navigate back to dashboard</div>
          <Icon name="directionleft" size={16} color="#0D62FF" />
        </div>
      </div>
      
      <div className="border border-[#E8EAEF] rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-[#70717D]">Expand service details</div>
          <Icon name="directionup" size={16} color="#0D62FF" />
        </div>
      </div>
    </div>
  ),
};