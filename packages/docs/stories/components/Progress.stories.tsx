import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Progress } from '../../../components/ui/progress';
import { Button } from '../../../components/ui/button';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    className: 'w-[60%]',
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: 'w-[60%]',
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: 'w-[60%]',
  },
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[60%]" />;
  },
};

export const ServiceInstallation: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
      { name: 'Equipment Check', value: 25 },
      { name: 'Line Installation', value: 50 },
      { name: 'Configuration', value: 75 },
      { name: 'Testing & Activation', value: 100 },
    ];

    const startInstallation = () => {
      setProgress(0);
      setCurrentStep(0);
      
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          const next = prev + 1;
          if (next >= steps.length) {
            clearInterval(interval);
            return prev;
          }
          setProgress(steps[next].value);
          return next;
        });
      }, 1500);
    };

    return (
      <div className="w-[500px] space-y-6">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-2">Internet Pro Installation</h3>
          <p className="text-sm text-[#70717D] font-secondary mb-4">
            Track the progress of your business internet service installation
          </p>
          
          <Progress value={progress} className="w-full mb-4" />
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#70717D] font-secondary">
              {progress === 100 ? 'Installation Complete!' : `Step ${currentStep + 1} of ${steps.length}`}
            </span>
            <span className="font-medium text-[#15172B]">{progress}%</span>
          </div>
          
          {progress < 100 && currentStep < steps.length && (
            <div className="mt-2 text-sm text-[#0D62FF] font-medium">
              Current: {steps[currentStep]?.name}
            </div>
          )}
        </div>

        <Button onClick={startInstallation} disabled={progress > 0 && progress < 100}>
          <Icon name="configure" size={16} color="white" className="mr-2" />
          Start Installation
        </Button>
      </div>
    );
  },
};

export const DataUsage: Story = {
  render: () => {
    const usageData = [
      { label: 'Internet Usage', used: 847, total: 1000, unit: 'GB' },
      { label: 'Voice Minutes', used: 2340, total: 5000, unit: 'min' },
      { label: 'Email Storage', used: 12.5, total: 25, unit: 'GB' },
      { label: 'Cloud Backup', used: 156, total: 500, unit: 'GB' },
    ];

    return (
      <div className="w-[500px] space-y-6">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-2">Monthly Usage Overview</h3>
          <p className="text-sm text-[#70717D] font-secondary mb-4">
            Current usage across your Comcast Business services
          </p>
        </div>

        {usageData.map((item, index) => {
          const percentage = (item.used / item.total) * 100;
          const isNearLimit = percentage > 80;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#15172B] font-secondary">
                  {item.label}
                </span>
                <span className="text-sm text-[#70717D] font-secondary">
                  {item.used} / {item.total} {item.unit}
                </span>
              </div>
              
              <Progress 
                value={percentage} 
                className={`w-full ${isNearLimit ? 'progress-warning' : ''}`}
              />
              
              <div className="flex items-center justify-between">
                <span className={`text-xs ${isNearLimit ? 'text-orange-600' : 'text-[#70717D]'} font-secondary`}>
                  {percentage.toFixed(1)}% used
                </span>
                {isNearLimit && (
                  <span className="text-xs text-orange-600 font-medium">
                    Near limit
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

export const FileUpload: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const startUpload = () => {
      setIsUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const next = prev + Math.random() * 15;
          if (next >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return next;
        });
      }, 200);
    };

    return (
      <div className="w-[400px] space-y-4">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-2">Document Upload</h3>
          <p className="text-sm text-[#70717D] font-secondary mb-4">
            Upload your business documents to the secure portal
          </p>
        </div>

        {isUploading || uploadProgress > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <Icon name="document" size={16} color="currentColor" />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#15172B]">business-contract.pdf</div>
                <div className="text-xs text-[#70717D]">2.4 MB</div>
              </div>
            </div>
            
            <Progress value={uploadProgress} className="w-full" />
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#70717D] font-secondary">
                {uploadProgress === 100 ? 'Upload complete!' : 'Uploading...'}
              </span>
              <span className="font-medium text-[#15172B]">
                {Math.round(uploadProgress)}%
              </span>
            </div>
          </div>
        ) : (
          <Button onClick={startUpload}>
            <Icon name="upload" size={16} color="white" className="mr-2" />
            Upload Document
          </Button>
        )}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="font-medium text-[#15172B] font-primary mb-4">Progress Bar Sizes</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-[#70717D] font-secondary mb-2 block">Small (h-2)</label>
          <Progress value={40} className="w-full h-2" />
        </div>
        
        <div>
          <label className="text-sm text-[#70717D] font-secondary mb-2 block">Default (h-4)</label>
          <Progress value={60} className="w-full" />
        </div>
        
        <div>
          <label className="text-sm text-[#70717D] font-secondary mb-2 block">Large (h-6)</label>
          <Progress value={80} className="w-full h-6" />
        </div>
      </div>
    </div>
  ),
};