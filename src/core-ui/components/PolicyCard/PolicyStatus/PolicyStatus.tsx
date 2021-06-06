import * as React from "react";
import { Container } from "./styledComponent";
import { IPolicyItem, ITheme } from "../../../models";

type IProps = Pick<
  IPolicyItem,
  "coverage_start_date" | "coverage_end_date" | "type" | "status"
>;

const formatDate = (date: string) => {
  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("en-GB", dateOptions as any);

  return date
    ? dateTimeFormat.format(new Date(date)).replace(/\s/g, "-").toUpperCase()
    : undefined;
};

const PolicyStatus = (props: IProps) => {
  const { coverage_start_date, coverage_end_date, type, status } = props;
  const coverageStartDate = formatDate(coverage_start_date);
  const coverageEndDate = formatDate(coverage_end_date);

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

  return (
    <Container className="policy-status">
      <div className="dates">
        <div>{coverageStartDate}</div>
        {coverageEndDate ? <div>&nbsp;to&nbsp;{coverageEndDate}</div> : null}
      </div>
      <div className="description">
        <div className="date-label">{dateLabel}</div>

        <div className={`status ${status}`}>
          {status}{" "}
          <svg width="8" height="8">
            <circle cx="4" cy="4" r="4" fill="transparent" />
          </svg>
        </div>
      </div>
    </Container>
  );
};

const Component = React.memo(PolicyStatus);

export default Component;
