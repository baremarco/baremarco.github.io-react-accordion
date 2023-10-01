import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import useNodeStore from "../store/store";

describe("Store", () => {
  it("should fetch 4 elements", () => {
    const { result } = renderHook(() => useNodeStore((store) => store.nodes));
    expect(result.current.length).toBe(4);
  });
});
