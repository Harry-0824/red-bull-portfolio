import { render, screen } from "@testing-library/react";
import ProjectGallery from "./ProjectGallery";
import { projects } from "@/data/projects";

describe("ProjectGallery", () => {
  it("renders project section and clickable project cards", () => {
    render(<ProjectGallery />);

    expect(
      screen.getByRole("heading", { name: "精選專案作品" }),
    ).toBeInTheDocument();

    const cards = screen.getAllByRole("button", {
      name: /開啟專案詳細資訊：/,
    });

    expect(cards).toHaveLength(projects.length);
  });
});
