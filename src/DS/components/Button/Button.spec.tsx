import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from ".";
import { FaBeer } from "react-icons/fa";

describe("Button Component", () => {
  it("should render with children text", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("should render with left icon", () => {
    render(<Button leftIcon={<FaBeer />}>Click me</Button>);

    expect(screen.getByTestId("icon-container")).toBeTruthy();
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("should be disabled when passed the disabled prop", () => {
    render(<Button disabled>Click me</Button>);

    const button = screen.getByText("Click me");
    expect(button).toBeTruthy();
  });

  it("should take a snapshot", () => {
    const { asFragment } = render(<Button>Click me</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
});
