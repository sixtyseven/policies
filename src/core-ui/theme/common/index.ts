import { ICommonStyles } from "../../models";
const bootstrapBreakPoint = {
  // xs  is default
  sm: "576px", // 576px and up
  md: "768px",
  lg: "992px",
  xl: "1200px",
};
const commonStyles: ICommonStyles = {
  spacing: {
    xxsmall: 4,
    xsmall: 8,
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48,
    xxlarge: 64,
    xxxlarge: 80,
  },
  mediaQuery: {
    sm: `(min-width: ${bootstrapBreakPoint.sm})`,
    lg: `(min-width: ${bootstrapBreakPoint.lg})`,
  },
  namedZIndex: {},
  isIE11: false // will be set when create theme
};

export { commonStyles };
