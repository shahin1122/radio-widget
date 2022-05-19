import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import RadioDetail from "./radioDetail";

// Test to render the acces to the url for to verify the acces to the covers

let container: HTMLElement ;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = document.createElement("div");
});

it("should render URL prop information", () => {
  
  act(() => {
    render(
      <RadioDetail
        coverUrl="https://testlink"
      />,
      container
    );
  });

  expect(
    container.querySelector<HTMLInputElement>("[data-testid='url']")?.getAttribute("src")
  ).toEqual("https://testlink");

 
});