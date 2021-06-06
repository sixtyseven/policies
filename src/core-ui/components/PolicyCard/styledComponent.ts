import styled, { css, ThemeProps } from "styled-components";
import { ITheme } from "../../models";

const InfoBlock = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    display: flex;
    flex-direction: column;
    > .info {
      ${theme.fontTypes.p1}
      margin-bottom: ${theme.common.spacing.xxsmall}px;
    }
    > .label {
      ${theme.fontTypes.caption5}
    }
  `;
});

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

const PaymentDate = styled(InfoBlock)`
  ${(props) => {
    return css`
      display: none;
    `;
  }}
`;

const PricePremium = styled(InfoBlock)`
  ${(props) => {
    return css`
      display: none;
    `;
  }}
`;

const PartnerLogo = styled.div((props: ThemeProps<ITheme>) => {
  const { theme } = props;
  return css`
    margin-left: auto;
    > .partener-logo-img {
      width: 84px;
      height: 44px;
    }
  `;
});

const AnnualRenewal = styled(InfoBlock)`
  ${(props) => {
    return css`
      display: none;
    `;
  }}
`;

const MainContent = styled.div``;

const Container = styled.div(
  (props: ThemeProps<ITheme> & { isActive: boolean }) => {
    const { theme, isActive } = props;
    return `
      border-radius: 3px;
      padding: ${theme.common.spacing.small}px;
      background-color: ${theme.backgroundColor.secondary};
      box-shadow: ${isActive ? theme.boxShadow : "none"};
      display: flex;
      align-items: center;
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
          order: -1;
          margin-right: ${theme.common.spacing.small}px;
        }
        ${MainContent} {
          order: -1;
          flex: 1 1 50%;
          margin-right: ${theme.common.spacing.small}px;
        }
        ${PartnerLogo} {
          order: -1;
          flex: 0 1 auto;
        }

        ${AnnualRenewal} {
          display: block;
        }

        ${PaymentDate} {
          display: block;
        }

        ${PricePremium} {
          display: block;
        }

      }
  `;
  }
);

export {
  InfoBlock,
  Container,
  MainContent,
  Title,
  Description,
  PaymentDate,
  PricePremium,
  PartnerLogo,
  AnnualRenewal,
};
