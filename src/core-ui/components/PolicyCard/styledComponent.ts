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
      > .divider {
        margin-bottom:  ${theme.common.spacing.xsmall}px;
      }
      > .policy-status {
        flex: 1 1 auto;
      }
  `;
  }
);

const Title = styled.h2((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    ${theme.fontTypes.h4}
    text-transform: none;
    flex: 1 1 100%;
    margin-bottom: ${theme.common.spacing.xxsmall}px;
  `;
});

const Description = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    ${theme.fontTypes.caption3}
    margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});

const PaymentDate = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    display: none;
    // ${theme.fontTypes.caption3}
    // margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});

const PricePremium = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    display: none;
    // ${theme.fontTypes.caption3}
    // margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});
const PartnerLogo = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    > .partener-logo-img {
      width: 84px;
      height: 44px;
    }

    // ${theme.fontTypes.caption3}
    // margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});
const AnnualRenewal = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    display: none;
    // ${theme.fontTypes.caption3}
    // margin-bottom: ${theme.common.spacing.xsmall}px;
  `;
});
const chevronComponentCss = css`
  display: none;
`;

export {
  Container,
  Title,
  Description,
  PaymentDate,
  PricePremium,
  PartnerLogo,
  AnnualRenewal,
  chevronComponentCss,
};
