import { render, screen } from '@testing-library/react';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Calendar from './components/Calendar';
import Performances from './components/Performances';
import Navigation from './components/Navigation';

test('renders Creative Practice title', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/Creative Practice/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Contact US title', () => {
  render(<ContactUs />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Calendar title', () => {
  render(<Calendar />);
  const linkElement = screen.getByText(/Calendar/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Performances title', () => {
  render(<Performances />);
  const linkElement = screen.getByText(/Performances/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders NavBar', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});
