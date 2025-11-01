import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /vite \+ react/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders Vite logo with correct link', () => {
    render(<App />);
    const viteLink = screen.getByRole('link', { name: /vite logo/i });
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    expect(viteLink).toHaveAttribute('target', '_blank');
  });

  it('renders React logo with correct link', () => {
    render(<App />);
    const reactLink = screen.getByRole('link', { name: /react logo/i });
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(reactLink).toHaveAttribute('target', '_blank');
  });

  it('renders button with initial count of 0', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });

  it('increments count multiple times when button is clicked multiple times', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument();
  });

  it('renders edit instruction text', () => {
    render(<App />);
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/src\/App\.tsx/i)).toBeInTheDocument();
  });

  it('renders documentation link text', () => {
    render(<App />);
    expect(
      screen.getByText(/click on the vite and react logos to learn more/i)
    ).toBeInTheDocument();
  });
});
