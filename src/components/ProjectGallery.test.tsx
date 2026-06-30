import { render, screen } from "@testing-library/react";
import ProjectGallery from "./ProjectGallery";
import { projects } from "@/data/projects";

describe("ProjectGallery", () => {
  it("renders structured project cards with descriptive actions", () => {
    render(<ProjectGallery />);

    expect(
      screen.queryByRole("img", { name: /preview of ticketflow/i }),
    ).not.toBeInTheDocument();

    const detailButtons = screen.getAllByRole("button", {
      name: /view details for/i,
    });
    const caseStudyLinks = screen.getAllByRole("link", {
      name: /open case study for/i,
    });

    expect(detailButtons).toHaveLength(projects.length);
    expect(caseStudyLinks).toHaveLength(
      projects.filter((project) => project.slug && project.caseStudy).length,
    );
  });
});
