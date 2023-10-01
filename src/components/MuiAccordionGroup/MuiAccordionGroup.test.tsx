import { MuiAccordionGroup } from ".";
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, renderHook, fireEvent } from "@testing-library/react";
import useNodeStore from "../../store/store";

describe("MuiAccordionGroup", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useNodeStore((store) => store.nodes));
    render(<MuiAccordionGroup nodes={result.current} />);
  });

  it("should render 4 elements", () => {
    const elements = document.querySelectorAll(".MuiAccordion-root");
    expect(elements.length).toBe(4);
  });
  it("should not render content when is not expanded", () => {
    const element = document.querySelector(".Mui-expanded");
    expect(element).toBeNull();
  });
  it("should render content when is expanded", () => {
    const accordion = screen.getAllByRole("button")[0];
    if (accordion) fireEvent.click(accordion);
    const element = document.querySelector(".Mui-expanded");
    expect(element).toBeDefined();
  });
  it("should render content whe is expanded", () => {
    const accordion = screen.getAllByRole("button")[0];
    if (accordion) {
      fireEvent.click(accordion);
      fireEvent.click(accordion);
    }
    const element = document.querySelector(".Mui-expanded");
    expect(element).toBeDefined();
  });
});
