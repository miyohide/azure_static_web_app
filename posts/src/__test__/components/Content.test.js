import axios from "axios";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Content from "../../components/Content";

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

jest.mock("axios");

it("renders", async () => {
  const fakeContents = [{id: 1, title: "t1", body: "b1"}];
  const response = {data: fakeContents};
  axios.get.mockImplementation(() => Promise.resolve(response));
  await act(async () => {
    render(<Content />, container);
  });
  expect(container.innerHTML).toBe("<div class=\"container\"><div class=\"g-2 row row-cols-md-3 row-cols-1\"><div class=\"col\"><div class=\"card\"><div class=\"card-body\"><div class=\"card-title h5\">t1</div><p class=\"card-text\">b1</p></div></div></div></div></div>");
});
