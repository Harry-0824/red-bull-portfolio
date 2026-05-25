import { render, screen } from "@testing-library/react";
import ContactSection from "./ContactSection";

describe("ContactSection", () => {
  it("renders core heading and contact links", () => {
    render(<ContactSection />);

    expect(
      screen.getByRole("heading", { name: "讓作品成為下一次面試的起跑點" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Email: princ11290824@gmail.com/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /GitHub: Harry-0824/i }),
    ).toBeInTheDocument();
  });
});
