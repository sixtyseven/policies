import styled, {
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";
import { ITheme } from "../../models";

interface IContainerProps extends ThemeProps<ITheme> {
  componentCss?: FlattenSimpleInterpolation;
}

const Container = styled.div<IContainerProps>`
  ${(props) => {
    const { componentCss } = props;
    return `
        ${componentCss}
      `;
  }}
`;

export { Container };
