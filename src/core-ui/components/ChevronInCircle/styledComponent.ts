import styled, {
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";
import { ITheme } from "../../models";

interface IContainerProps extends ThemeProps<ITheme> {
  componentCss?:
    | FlattenSimpleInterpolation
    | ((theme: ITheme) => FlattenSimpleInterpolation);
}

const Container = styled.div<IContainerProps>`
  ${(props) => {
    const { componentCss: componentCssProp, theme } = props;

    const componentCss =
      typeof componentCssProp === "function"
        ? componentCssProp(theme)
        : componentCssProp;

    return `
        ${componentCss}
      `;
  }}
`;

export { Container };
