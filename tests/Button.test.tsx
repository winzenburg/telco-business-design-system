import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../src/components/ui/button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Primary');

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Secondary');

    rerender(<Button variant="tertiary">Tertiary</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Tertiary');

    rerender(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Danger');

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Destructive');

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Ghost');

    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Outline');

    rerender(<Button variant="link">Link</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Link');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Small');

    rerender(<Button size="md">Medium</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Medium');

    rerender(<Button size="lg">Large</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Large');

    rerender(<Button size="xl">Extra Large</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Extra Large');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders in disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Disabled');
  });

  it('renders in loading state', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Loading');
  });

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveTextContent('Full Width');
    // Note: We can't easily test CSS properties in JSDOM, but we can verify the prop is passed
  });

  it('renders with left icon', () => {
    render(<Button leftIcon="→">With Icon</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveTextContent('→With Icon');
  });

  it('renders with right icon', () => {
    render(<Button rightIcon="→">With Icon</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveTextContent('With Icon→');
  });

  it('renders with both icons', () => {
    render(<Button leftIcon="←" rightIcon="→">With Icons</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveTextContent('←With Icons→');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Test</Button>);
    
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
}); 