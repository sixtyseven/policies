import * as React from "react";
import { withTheme } from "styled-components";
import { Container } from "./styledComponent";
import { IPolicyItem, ITheme } from "../../../models";

type IProps = Pick<
  IPolicyItem,
  "coverage_start_date" | "coverage_end_date" | "type" | "status"
> & {
  theme: ITheme;
};

const PolicyStatus = (props: IProps) => {
  const { coverage_start_date, coverage_end_date, type, status, theme } = props;

  console.log("[render] core-ui PolicyStatus");

  let dateLabel = null;
  if (type === "parcel" && status === "expired") {
    dateLabel = <div>Date shiped</div>;
  } else if (status === "active") {
    dateLabel = <div>Coverage dates</div>;
  } else {
    // todo check with product manager or backend developer
    console.error("[error] status 1: may need some business logic here?");
  }
  let statusColor;
  if (status === "active") {
    statusColor = theme.color.success;
  } else if (status === "expired") {
    statusColor = theme.color.error;
  } else {
    // todo check with product manager or backend developer
    statusColor = "transparent";
    console.error("[error] status 2: may need some business logic here?");
  }
  return (
    <Container className="policy-status">
      <div>{coverage_start_date}</div>
      {coverage_end_date ? <div> to {coverage_end_date}</div> : null}
      {dateLabel}
      <div>
        {status}{" "}
        <svg width="8" height="8">
          <circle cx="4" cy="4" r="4" fill={statusColor} />
        </svg>
      </div>
    </Container>
  );
};

const Component = React.memo(withTheme(PolicyStatus));

export default Component;
