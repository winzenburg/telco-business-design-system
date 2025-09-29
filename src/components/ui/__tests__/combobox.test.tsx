import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Combobox, MultiCombobox, AsyncCombobox } from '../combobox';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const mockOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

describe('Combobox', () => {
  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      render(<Combobox options={mockOptions} />);
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('displays placeholder text', () => {
      render(
        <Combobox
          options={mockOptions}
          placeholder="Select a fruit..."
        />,
      );
      expect(screen.getByText('Select a fruit...')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <Combobox
          options={mockOptions}
          className="custom-class"
        />,
      );
      const button = screen.getByRole('combobox');
      expect(button).toHaveClass('custom-class');
    });

    it('shows selected value', () => {
      render(
        <Combobox
          options={mockOptions}
          value="apple"
        />,
      );
      expect(screen.getByText('Apple')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('opens dropdown on click', async () => {
      render(<Combobox options={mockOptions} />);
      const button = screen.getByRole('combobox');

      expect(button).toHaveAttribute('aria-expanded', 'false');
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('selects an option', async () => {
      const onValueChange = jest.fn();
      render(
        <Combobox
          options={mockOptions}
          onValueChange={onValueChange}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const option = await screen.findByText('Banana');
      fireEvent.click(option);

      expect(onValueChange).toHaveBeenCalledWith('banana');
    });

    it('filters options based on search', async () => {
      render(<Combobox options={mockOptions} />);

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const searchInput = screen.getByPlaceholderText('Search...');
      await userEvent.type(searchInput, 'app');

      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    });

    it('clears selection when same option is selected', async () => {
      const onValueChange = jest.fn();
      render(
        <Combobox
          options={mockOptions}
          value="apple"
          onValueChange={onValueChange}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const option = await screen.findByText('Apple');
      fireEvent.click(option);

      expect(onValueChange).toHaveBeenCalledWith('');
    });

    it('closes dropdown after selection', async () => {
      const onValueChange = jest.fn();
      render(
        <Combobox
          options={mockOptions}
          onValueChange={onValueChange}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      const option = await screen.findByText('Banana');
      fireEvent.click(option);

      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  describe('Disabled State', () => {
    it('disables the combobox when disabled prop is true', () => {
      render(
        <Combobox
          options={mockOptions}
          disabled={true}
        />,
      );

      const button = screen.getByRole('combobox');
      expect(button).toBeDisabled();
    });

    it('does not open when disabled', () => {
      render(
        <Combobox
          options={mockOptions}
          disabled={true}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('handles disabled options', async () => {
      const optionsWithDisabled = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana', disabled: true },
        { value: 'orange', label: 'Orange' },
      ];

      const onValueChange = jest.fn();
      render(
        <Combobox
          options={optionsWithDisabled}
          onValueChange={onValueChange}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const disabledOption = await screen.findByText('Banana');
      fireEvent.click(disabledOption);

      expect(onValueChange).not.toHaveBeenCalled();
    });
  });

  describe('Keyboard Navigation', () => {
    it('opens with Enter key', () => {
      render(<Combobox options={mockOptions} />);
      const button = screen.getByRole('combobox');

      button.focus();
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes with Escape key', async () => {
      render(<Combobox options={mockOptions} />);
      const button = screen.getByRole('combobox');

      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      fireEvent.keyDown(document.activeElement!, { key: 'Escape' });
      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('navigates options with arrow keys', async () => {
      render(<Combobox options={mockOptions} />);
      const button = screen.getByRole('combobox');

      fireEvent.click(button);
      const searchInput = screen.getByPlaceholderText('Search...');

      fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
      fireEvent.keyDown(searchInput, { key: 'ArrowDown' });
      fireEvent.keyDown(searchInput, { key: 'Enter' });
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Combobox options={mockOptions} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA attributes', () => {
      render(<Combobox options={mockOptions} />);
      const button = screen.getByRole('combobox');

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveAttribute('role', 'combobox');
    });

    it('announces selected value', () => {
      render(
        <Combobox
          options={mockOptions}
          value="apple"
          placeholder="Select fruit"
        />,
      );

      const button = screen.getByRole('combobox');
      expect(button).toHaveAttribute('aria-label', 'Apple');
    });
  });

  describe('Empty States', () => {
    it('shows empty message when no options match search', async () => {
      render(
        <Combobox
          options={mockOptions}
          emptyText="No fruits found"
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const searchInput = screen.getByPlaceholderText('Search...');
      await userEvent.type(searchInput, 'xyz');

      expect(screen.getByText('No fruits found')).toBeInTheDocument();
    });

    it('handles empty options array', () => {
      render(<Combobox options={[]} />);
      const button = screen.getByRole('combobox');

      fireEvent.click(button);
      expect(screen.getByText('No results found.')).toBeInTheDocument();
    });
  });
});

describe('MultiCombobox', () => {
  describe('Multiple Selection', () => {
    it('allows multiple selections', async () => {
      const onValueChange = jest.fn();
      render(
        <MultiCombobox
          options={mockOptions}
          onValueChange={onValueChange}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const apple = await screen.findByText('Apple');
      fireEvent.click(apple);
      expect(onValueChange).toHaveBeenCalledWith(['apple']);

      const banana = await screen.findByText('Banana');
      fireEvent.click(banana);
      expect(onValueChange).toHaveBeenCalledWith(['apple', 'banana']);
    });

    it('removes selection when clicking selected item', async () => {
      const onValueChange = jest.fn();
      render(
        <MultiCombobox
          options={mockOptions}
          value={['apple', 'banana']}
          onValueChange={onValueChange}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const apple = await screen.findByText('Apple');
      fireEvent.click(apple);
      expect(onValueChange).toHaveBeenCalledWith(['banana']);
    });

    it('displays count of selected items', () => {
      render(
        <MultiCombobox
          options={mockOptions}
          value={['apple', 'banana', 'orange']}
        />,
      );

      expect(screen.getByText('3 selected')).toBeInTheDocument();
    });

    it('respects maxItems limit', async () => {
      const onValueChange = jest.fn();
      render(
        <MultiCombobox
          options={mockOptions}
          value={['apple', 'banana']}
          onValueChange={onValueChange}
          maxItems={2}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const orange = await screen.findByText('Orange');
      fireEvent.click(orange);

      expect(onValueChange).not.toHaveBeenCalled();
    });

    it('shows single item label when only one selected', () => {
      render(
        <MultiCombobox
          options={mockOptions}
          value={['apple']}
        />,
      );

      expect(screen.getByText('Apple')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(
        <MultiCombobox
          options={mockOptions}
          value={['apple']}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});

describe('AsyncCombobox', () => {
  describe('Async Loading', () => {
    it('loads options on search', async () => {
      const loadOptions = jest.fn().mockResolvedValue([
        { value: 'result1', label: 'Result 1' },
        { value: 'result2', label: 'Result 2' },
      ]);

      render(
        <AsyncCombobox
          loadOptions={loadOptions}
          debounceMs={0}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const searchInput = screen.getByPlaceholderText('Type to search...');
      await userEvent.type(searchInput, 'test');

      await waitFor(() => {
        expect(loadOptions).toHaveBeenCalledWith('test');
      });

      await waitFor(() => {
        expect(screen.getByText('Result 1')).toBeInTheDocument();
        expect(screen.getByText('Result 2')).toBeInTheDocument();
      });
    });

    it('shows loading state', async () => {
      const loadOptions = jest.fn().mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve([]), 100)),
      );

      render(
        <AsyncCombobox
          loadOptions={loadOptions}
          debounceMs={0}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const searchInput = screen.getByPlaceholderText('Type to search...');
      await userEvent.type(searchInput, 'test');

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('debounces search input', async () => {
      const loadOptions = jest.fn().mockResolvedValue([]);

      render(
        <AsyncCombobox
          loadOptions={loadOptions}
          debounceMs={300}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const searchInput = screen.getByPlaceholderText('Type to search...');
      await userEvent.type(searchInput, 'test');

      // Should not be called immediately
      expect(loadOptions).not.toHaveBeenCalled();

      // Wait for debounce
      await waitFor(
        () => {
          expect(loadOptions).toHaveBeenCalledWith('test');
        },
        { timeout: 400 },
      );
    });

    it('handles load errors gracefully', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation();
      const loadOptions = jest.fn().mockRejectedValue(new Error('Load failed'));

      render(
        <AsyncCombobox
          loadOptions={loadOptions}
          debounceMs={0}
        />,
      );

      const button = screen.getByRole('combobox');
      fireEvent.click(button);

      const searchInput = screen.getByPlaceholderText('Type to search...');
      await userEvent.type(searchInput, 'test');

      await waitFor(() => {
        expect(consoleError).toHaveBeenCalledWith(
          'Failed to load options:',
          expect.any(Error),
        );
      });

      consoleError.mockRestore();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const loadOptions = jest.fn().mockResolvedValue([]);
      const { container } = render(
        <AsyncCombobox loadOptions={loadOptions} />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
