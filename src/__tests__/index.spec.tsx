// Import necessary modules and functions for testing
import { render, screen, act } from '@testing-library/react';
import Login from '@/pages';

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: () => null,
    };
  },
}));
test("Given Login Page Component, when it has mounted, then it should render text", () => {
  render(<Login />);

  expect(screen.getByText("Login")).toBeTruthy();
  expect(screen.getByText("Submit")).toBeTruthy();
  expect(screen.getByTestId("username")).toBeTruthy();
  expect(screen.getByTestId("password")).toBeTruthy();
  expect(screen.getByTestId("password")).toBeTruthy();
  expect(screen.getByLabelText("Username")).toBeTruthy();
  expect(screen.getByLabelText("Password")).toBeTruthy();
});
