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
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("en-GB", dateOptions as any);

  const coverageStartDate = coverage_start_date
    ? dateTimeFormat.format(new Date(coverage_start_date)).replace(/\s/g, "-")
    : undefined;
  const coverageEndDate = coverage_end_date
    ? dateTimeFormat.format(new Date(coverage_end_date)).replace(/\s/g, "-")
    : undefined;

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
      <div className="dates">
        <div>{coverageStartDate}</div>
        {coverageEndDate ? <div>&nbsp;to&nbsp;{coverageEndDate}</div> : null}
      </div>
      <div className="description">
        <div className="date-label">{dateLabel}</div>

        <div className="status">
          {status}{" "}
          <svg width="8" height="8">
            <circle cx="4" cy="4" r="4" fill={statusColor} />
          </svg>
        </div>
      </div>
    </Container>
  );
};

const Component = React.memo(withTheme(PolicyStatus));

export default Component;
