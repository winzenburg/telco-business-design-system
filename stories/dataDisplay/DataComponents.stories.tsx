import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Progress,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '../../src/components';

const meta: Meta = {
  title: 'Components/Data Display/Tables & Cards',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Data display components for presenting business information in Comcast applications.'
      }
    }
  },
};

export default meta;
type Story = StoryObj;

export const BusinessCards: Story = {
  name: 'Business Service Cards',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Business Internet
            <Badge variant="success">Active</Badge>
          </CardTitle>
          <CardDescription>
            High-speed fiber internet for your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#70717D]">Download Speed</span>
              <span className="font-semibold text-[#2B2D3F]">1000 Mbps</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#70717D]">Upload Speed</span>
              <span className="font-semibold text-[#2B2D3F]">1000 Mbps</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-[#70717D]">Usage this month</span>
                <span className="font-semibold">2.4 TB / Unlimited</span>
              </div>
              <Progress value={24} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Voice Services
            <Badge variant="info">Setup Required</Badge>
          </CardTitle>
          <CardDescription>
            Professional phone system with advanced features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#70717D]">Lines</span>
              <span className="font-semibold text-[#2B2D3F]">25 Active</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#70717D]">Features</span>
              <span className="font-semibold text-[#2B2D3F]">Auto Attendant, Voicemail</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-[#70717D]">Setup Progress</span>
                <span className="font-semibold">3 of 5 steps</span>
              </div>
              <Progress value={60} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Security Suite
            <Badge variant="warning">Action Required</Badge>
          </CardTitle>
          <CardDescription>
            Advanced cybersecurity protection for your network
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#70717D]">Threat Detection</span>
              <span className="font-semibold text-green-600">Protected</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#70717D]">Last Scan</span>
              <span className="font-semibold text-[#2B2D3F]">2 hours ago</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#70717D]">Threats Blocked</span>
              <span className="font-semibold text-[#2B2D3F]">47 this month</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const BusinessTable: Story = {
  name: 'Service Usage Table',
  render: () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#2B2D3F]">Service Usage Overview</h2>
      
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Monthly Cost</TableHead>
                <TableHead>Contact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Business Internet Pro</TableCell>
                <TableCell>
                  <Badge variant="success">Active</Badge>
                </TableCell>
                <TableCell>2.4 TB / Unlimited</TableCell>
                <TableCell>$159.99</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Account Manager</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Voice Services</TableCell>
                <TableCell>
                  <Badge variant="info">Setup</Badge>
                </TableCell>
                <TableCell>25 Lines</TableCell>
                <TableCell>$89.99</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>TS</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Tech Support</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Security Suite</TableCell>
                <TableCell>
                  <Badge variant="warning">Update</Badge>
                </TableCell>
                <TableCell>Full Network</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Security Specialist</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  ),
};