import * as React from "react";
import { withTheme } from "styled-components";
import { IPolicyItem, ITheme } from "../../models";
import { Container } from "./styledComponent";
import PolicyStatus from "./PolicyStatus";
import ChevronInCircle, {
  IProps as IChevronInCircleProp,
} from "../ChevronInCircle";

interface IProps {
  policy: IPolicyItem;
  theme: ITheme;
}

const PolicyCard = (props: IProps) => {
  const { policy, theme } = props;
  const {
    title,
    id,
    description,
    coverage_start_date,
    coverage_end_date,
    payment_date,
    type,
    status,
    partner,
    premium_formatted,
    renewal,
  } = policy;

  const [isActive, setIsActive] = React.useState<boolean>(false);

  const chevronInCircleProps: Pick<
    IChevronInCircleProp,
    "direction" | "backgroundColor"
  > = isActive
    ? {
        direction: "down",
        backgroundColor: theme.color.warning,
      }
    : {
        direction: "right",
        backgroundColor: "transparent",
      };

  console.log("[render] core-ui PolicyCard");
  return (
    <Container
      className="policy-card"
      onClick={() => {
        setIsActive((previousState) => !previousState);
      }}
      isActive={isActive}
    >
      <ChevronInCircle size="xlarge" {...chevronInCircleProps} />
      <h3 className="h3">{title}</h3>
      <div className="subtitle">
        {id} | {description}
      </div>
      <div className="divider"></div>
      <PolicyStatus
        {...{ coverage_end_date, coverage_start_date, type, status }}
      />
      <div className="payment-date">
        <div>{payment_date}</div>
        <div>Payment Date</div>
      </div>
      <div className="price-premium">
        <div>{premium_formatted}</div>
        <div>Price/Premium</div>
      </div>
      <div className="partner-logo">
        <img src={partner.logo} alt={partner.id} />
      </div>
      {renewal === "annual" ? (
        <div className="annual-renewal">
          <div>Annual</div>
          <div>Renewal</div>
        </div>
      ) : null}
    </Container>
  );
};

export default withTheme(PolicyCard);
