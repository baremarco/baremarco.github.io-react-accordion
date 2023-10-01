import { MainPage } from ".";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("MainPage", () => {
  it("should render the title", () => {
    render(<MainPage title="Title" />);
    const title = screen.getByText("Title");
    expect(title).toBeDefined();
  });
});
