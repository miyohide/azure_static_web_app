import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "../../components/Header";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.innerHTML).toBe("<div><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><div class=\"container\"><a href=\"#\" class=\"navbar-brand\">Posts!!!</a></div></nav></div>");
});
