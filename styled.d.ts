import {} from "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      secondary: string;
      secondaryHover: string;
      secondaryActive: string;
      textLight: string;
      textDim: string;
      textDark: string;
      background: string;
      raisinBlack: string;
      raisinBlackShade1: string;
      raisinBlackShade2: string;
    };
  }
}
