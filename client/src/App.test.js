import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";
import InquiryCard from "./components/InquiryCard";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("header component - contact", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Contact Form/i);
  expect(headerElement).toBeInTheDocument();
});

test("header component - inquiry", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Inquiry List/i);
  expect(headerElement).toBeInTheDocument();
});

test("inquiry card component", () => {
  render(<InquiryCard />);
  const cardElement = screen.getByText(/Subscription:/i);
  expect(cardElement).toBeInTheDocument();
});
