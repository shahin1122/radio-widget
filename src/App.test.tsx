import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import * as ReactDOM from "react-dom";

//test for to render the model of the radio widget
describe(" Render Radio Widget", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<App />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it(" Test Fixed texts", () => {
    const title = screen.getByText("STATIONS");
    expect(title).toBeInTheDocument();
    const footer = screen.getByText("CURRENTLY PLAYING");
    expect(footer).toBeInTheDocument();
  });


});
