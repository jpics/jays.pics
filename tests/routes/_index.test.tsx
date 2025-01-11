import { it, expect, describe } from "bun:test";
import { screen, render } from "@testing-library/react";

import Index from "~/routes/_index";

describe("_index", () => {
  it("should: render component", () => {
    render(Index());
    const text = screen.getByText("Join Discord");
    expect(text).toBeInTheDocument();
  });
});
