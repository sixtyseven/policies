import styled, { css, ThemeProps } from "styled-components";
import { ITheme } from "../../models";

const Container = styled.div(
  (props: ThemeProps<ITheme> & { isActive: boolean }) => {
    const { theme, isActive } = props;
    return `
      border-radius: 3px;
      padding: ${theme.common.spacing.small}px;
      background-color: ${theme.backgroundColor.secondary};
      box-shadow: ${isActive ? theme.boxShadow : "none"};
      display: flex;
      flex-wrap: wrap;
      > .chevron-in-circle {
        display: none;
      }
      > .divider {
        margin-bottom:  ${theme.common.spacing.xsmall}px;
      }
      > .policy-status {
        flex: 10 1 auto;
      }

      @media ${theme.common.mediaQuery.sm} {
        > .chevron-in-circle {
          display: block;
        }

      }
  `;
  }
);

const Title = styled.h2((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    ${theme.fontTypes.h4}
    flex: 1 1 100%;
    margin-bottom: ${theme.common.spacing.xxsmall}px;
  `;
});

const Description = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    ${theme.fontTypes.caption4}
    margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});

const PaymentDate = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    display: none;
    // ${theme.fontTypes.caption4}
    // margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});

const PricePremium = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    display: none;
    // ${theme.fontTypes.caption4}
    // margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});
const PartnerLogo = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    // ${theme.fontTypes.caption4}
    margin-left: auto;
    > .partener-logo-img {
      width: 84px;
      height: 44px;
    }
  `;
});
const AnnualRenewal = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    display: none;
    // ${theme.fontTypes.caption4}
    // margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});

export {
  Container,
  Title,
  Description,
  PaymentDate,
  PricePremium,
  PartnerLogo,
  AnnualRenewal,
};
