import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: "light" | "dark";
    background: string;
    hover: string;
    mobile: string;
    colors: {
      default: string;
      primary: string;
      black: string;
      defaultAccent: string;
      primaryAccent: string;
      white: string;
    };
  }
}