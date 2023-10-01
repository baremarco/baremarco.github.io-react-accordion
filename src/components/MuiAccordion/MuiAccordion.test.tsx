import { MuiAccordion } from ".";
import { afterEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { INodeProps } from "../../types";

const testNode: INodeProps = {
  id: "4",
  title: "Node",
  subtitle: "http://localhost:8080",
  status: "on",
  description: "Content"
};

describe("MuiAccordion", () => {
  afterEach(cleanup);
  it("should render title all time", () => {
    render(<MuiAccordion {...testNode} onChange={() => {}} expanded={false} />);
    const title = screen.getByText("Node");
    expect(title).toBeDefined();
  });
  it("should render subtitle all time", () => {
    render(<MuiAccordion {...testNode} onChange={() => {}} expanded={false} />);
    const subtitle = screen.getByText("http://localhost:8080");
    expect(subtitle).toBeDefined();
  });
  it("should render label all time", () => {
    render(<MuiAccordion {...testNode} onChange={() => {}} expanded={false} />);
    const label = screen.getByText("ONLINE");
    expect(label).toBeDefined();
  });
  it("should not render content when expanded is false", () => {
    const { container } = render(
      <MuiAccordion {...testNode} onChange={() => {}} expanded={false} />
    );
    const content = container.querySelector(".Mui-expanded");
    expect(content).toBeNull();
  });
  it("should show default message if description is undefined", () => {
    render(
      <MuiAccordion
        {...testNode}
        description={undefined}
        onChange={() => {}}
        expanded={false}
      />
    );
    const description = screen.getByText(/no data to display/i);
    expect(description).toBeDefined();
  });
});
