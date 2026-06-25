import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders an about section with focused portfolio copy", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /about apex flow/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/frontend developer focused on react, next\.js, and shipping polished product experiences/i),
    ).toBeInTheDocument();
  });
});
