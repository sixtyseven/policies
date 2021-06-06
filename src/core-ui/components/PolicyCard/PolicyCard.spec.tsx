import * as React from "react";
import { render, screen } from "@testing-library/react";

import PolicyCard from "./PolicyCard";
import { IPolicyItem } from "../../models";
import ThemeProvider from "../../../core-ui/theme/ThemeProvider";

describe("App", () => {
  test("renders App component", () => {
    const mockedPolicyDataItem: IPolicyItem = {
      id: "TRAVEL-COVER-INS",
      type: "travel",
      title: "London to Paris",
      description: "Baggage Cover; Medical Cover; Cancellation Cover",
      status: "active",
      premium: 106.65,
      premium_formatted: "AUD $106.65",
      payment_date: "2019-10-10T13:29:38.814849Z",
      coverage_start_date: "2019-11-17",
      coverage_end_date: "2019-11-19",
      renewal: null,
      partner: {
        id: "labore",
        name: "Labore Inc.",
        logo: "https://s3-ap-southeast-2.amazonaws.com/cg-frontend-tests/labore.svg",
      },
    };

    render(
      <ThemeProvider mode={"light"}>
        <PolicyCard policy={mockedPolicyDataItem} />
      </ThemeProvider>
    );

    expect(screen.getByRole("heading").textContent).toBe("London to Paris");
  });
});
