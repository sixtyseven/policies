import styled, { ThemeProps } from "styled-components";
import { ITheme } from "../../models";

const Container = styled.div`
  ${(props: ThemeProps<ITheme> & { isActive: boolean }) => {
    const { theme, isActive } = props;
    return `
      border-radius: 3px;
      padding: ${theme.common.spacing.small}px;
      background-color: ${theme.backgroundColor.secondary};
      box-shadow: ${isActive ? theme.boxShadow : "none"};
    `;
  }}
`;

export { Container };
