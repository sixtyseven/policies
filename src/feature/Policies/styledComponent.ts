import styled, { ThemeProps, css } from "styled-components";
import { ITheme } from "../../core-ui/models";

const Container = styled.div((props: ThemeProps<ITheme>) => {
  const {
    theme: {
      common: { spacing, mediaQuery },
    },
  } = props;
  return `
    padding: ${spacing.small}px;
    > .policy-card {
      margin-bottom: ${spacing.small}px;
    }

    @media ${mediaQuery.sm} {
      padding: ${spacing.medium}px;
      > .policy-card {
        margin-bottom: ${spacing.medium}px;
      }
    }

    @media ${mediaQuery.lg} {
      padding: ${spacing.xlarge}px;
      margin-left: auto;
      margin-right: auto;
      max-width: 1132px;
      > .policy-card {
        margin-bottom: ${spacing.large}px;
      }
    }
`;
});

const Heading = styled.h2((props: ThemeProps<ITheme>) => {
  const {
    theme: { fontTypes, common },
  } = props;
  return css`
    ${fontTypes.h5}
    text-transform: uppercase;
    margin-bottom: ${common.spacing.small}px;

    @media ${common.mediaQuery.sm} {
      ${fontTypes.h3}
      margin-bottom: ${common.spacing.medium}px;
    }
    @media ${common.mediaQuery.lg} {
      ${fontTypes.h3}
      margin-bottom: ${common.spacing.medium}px;
    }
  `;
});

export { Container, Heading };
