import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Import all components for accessibility testing
import { Button } from '../packages/components/ui/button';
import { Input } from '../packages/components/ui/input';
import { Alert } from '../packages/components/ui/alert';
import { Card } from '../packages/components/ui/card';
import { Badge } from '../packages/components/ui/badge';

// Extend Jest matchers
expect.extend(toHaveNoViolations);

describe('Component Accessibility Tests', () => {
  describe('Button Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Button>Click me</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should handle icon-only buttons correctly', async () => {
      const { container } = render(
        <Button aria-label="Close dialog">
          <span aria-hidden="true">×</span>
        </Button>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should handle disabled state properly', async () => {
      const { container } = render(<Button disabled>Disabled Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Input Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <div>
          <label htmlFor="test-input">Test Input</label>
          <Input id="test-input" />
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should handle required inputs correctly', async () => {
      const { container } = render(
        <div>
          <label htmlFor="required-input">Required Input</label>
          <Input id="required-input" required aria-describedby="input-help" />
          <div id="input-help">This field is required</div>
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Alert Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Alert>
          <div>This is an alert message</div>
        </Alert>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should handle different alert variants', async () => {
      const variants = ['default', 'destructive'] as const;
      
      for (const variant of variants) {
        const { container } = render(
          <Alert variant={variant}>
            <div>Alert message for {variant}</div>
          </Alert>
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });
  });

  describe('Card Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(
        <Card>
          <div>Card content</div>
        </Card>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Badge Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Badge>Badge text</Badge>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should handle different badge variants', async () => {
      const variants = ['default', 'secondary', 'destructive', 'outline'] as const;
      
      for (const variant of variants) {
        const { container } = render(
          <Badge variant={variant}>Badge {variant}</Badge>
        );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      }
    });
  });

  describe('Enterprise Form Patterns', () => {
    it('should handle complex form structures', async () => {
      const { container } = render(
        <form>
          <fieldset>
            <legend>User Information</legend>
            
            <div>
              <label htmlFor="business-name">Business Name</label>
              <Input id="business-name" required />
            </div>
            
            <div>
              <label htmlFor="account-number">Account Number</label>
              <Input id="account-number" type="text" />
            </div>
            
            <Button type="submit">Submit</Button>
          </fieldset>
        </form>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should handle error states correctly', async () => {
      const { container } = render(
        <div>
          <label htmlFor="error-input">Email Address</label>
          <Input 
            id="error-input" 
            aria-invalid="true"
            aria-describedby="email-error"
          />
          <div id="email-error" role="alert">
            Please enter a valid email address
          </div>
        </div>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});