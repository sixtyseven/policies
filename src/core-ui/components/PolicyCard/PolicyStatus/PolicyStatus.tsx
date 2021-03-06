import * as React from "react";
import { Container } from "./styledComponent";
import { IPolicyItem } from "../../../models";
import { formatDate } from "../utils";

type IProps = Pick<
  IPolicyItem,
  "coverage_start_date" | "coverage_end_date" | "type" | "status"
>;

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
      <div className="info">
        <div>{coverageStartDate}</div>
        {coverageEndDate ? <div>&nbsp;to&nbsp;{coverageEndDate}</div> : null}
      </div>
      <div className="label">
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
