import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import BodyCard from "../../components/BodyCard";

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
    render(<BodyCard title="title1" body="body1" />, container);
  });
  expect(container.innerHTML).toBe("<div class=\"card\"><div class=\"card-body\"><div class=\"card-title h5\">title1</div><p class=\"card-text\">body1</p></div></div>");
});
