import { render, screen } from "@testing-library/react";
import ProjectGallery from "./ProjectGallery";
import { projects } from "@/data/projects";

describe("ProjectGallery", () => {
  it("renders structured project cards with descriptive actions", () => {
    render(<ProjectGallery />);

    expect(
      screen.getByRole("img", { name: /preview of ticketflow/i }),
    ).toBeInTheDocument();

    const cards = screen.getAllByRole("button", {
      name: /view details for/i,
    });

    expect(cards).toHaveLength(projects.length);
  });
});
