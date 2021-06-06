import * as React from "react";
import { withTheme } from "styled-components";
import { IPolicyItem, ITheme } from "../../models";
import {
  Container,
  MainContent,
  Title,
  Description,
  PaymentDate,
  PricePremium,
  PartnerLogo,
  AnnualRenewal,
} from "./styledComponent";
import PolicyStatus from "./PolicyStatus";
import ChevronInCircle, {
  IProps as IChevronInCircleProp,
} from "../ChevronInCircle";
import { formatDate } from "./utils";

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
  const paymentDate = formatDate(payment_date);
  return (
    <Container
      className="policy-card"
      onClick={() => {
        setIsActive((previousState) => !previousState);
      }}
      isActive={isActive}
    >
      <ChevronInCircle size="xlarge" {...chevronInCircleProps} />
      <MainContent>
        <Title>{title}</Title>
        <Description>
          {id} | {description}
        </Description>
      </MainContent>

      <div className="divider"></div>
      <PaymentDate>
        <div className="info">{paymentDate}</div>
        <div className="label">Payment Date</div>
      </PaymentDate>
      <PolicyStatus
        {...{ coverage_end_date, coverage_start_date, type, status }}
      />

      <PricePremium>
        <div className="info">{premium_formatted}</div>
        <div className="label">Price/Premium</div>
      </PricePremium>
      <div className="flex-space"></div>
      <PartnerLogo>
        <img
          className="partener-logo-img"
          src={partner.logo}
          alt={partner.id}
        />
      </PartnerLogo>
      {renewal === "annual" ? (
        <AnnualRenewal>
          <div className="info">Annual</div>
          <div className="label">Renewal</div>
        </AnnualRenewal>
      ) : null}
    </Container>
  );
};

export default withTheme(PolicyCard);
