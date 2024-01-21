import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '../components/Acordion/Acordion';
import '@testing-library/jest-dom';

test('renders Accordion component', () => {
  render(<Accordion listMenu={['item1', 'item2']} name='Test' />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('toggle accordion on click', () => {
  render(<Accordion listMenu={['item1', 'item2']} name='Test' />);
  const button = screen.getByRole('button', { name: /Test/i });
  fireEvent.click(button);
  const itemElement = screen.getByText(/item1/i);
  expect(itemElement).toBeInTheDocument();
});
