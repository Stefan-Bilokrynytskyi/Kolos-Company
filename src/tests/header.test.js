import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header/index';
import store from '../store/Products';
import '@testing-library/jest-dom';

test('renders Header component', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('toggle navigation on click', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  // eslint-disable-next-line testing-library/no-node-access
  const navButton = screen.getByAltText('menu').closest('button');
  fireEvent.click(navButton);
  const linkElement = screen.getByText(/About us/i);
  expect(linkElement).toBeInTheDocument();
});
