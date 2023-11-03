import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import FormatDate from "./ui/components/common/FormatoFecha"

describe("FormatDate", () => {
  it("should return a div element with the formatted date when given a valid date string", () => {
    const date = "2022-01-01";
    render(FormatDate(date));
    const formattedDate = screen.getByText("01-01-2022");
    expect(formattedDate).toBeInTheDocument();
  });

  it("should return an empty div element when given an empty date string", () => {
    const date = "";
    const { container } = render(FormatDate(date));
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should return an empty div element when given an null date string", () => {
    const date = "null";
    const { container } = render(FormatDate(date));
    expect(container.firstChild).toBeInTheDocument();
  });
});