import styled, { DefaultTheme } from "styled-components";

export type TextSize = "1" | "2" | "3" | "4" | "5" | "6";

interface TextProps {
  size?: TextSize;
  weight?: "normal" | "light" | "bold" | "bolder";
  align?: "left" | "right" | "center";
}

export const getFontColor = (color: any, theme: DefaultTheme) => {
  switch (color) {
    case "default":
      return theme.colors.default;
    case "primary":
      return theme.colors.primary;
    case "black":
      return theme.colors.black; 
    case "white":
      return theme.colors.white;
    case "defaultAccent":
      return theme.colors.defaultAccent;
    case "primaryAccent":
      return theme.colors.primaryAccent;
    default: return theme.colors.default;
  }
}

const getFontSize = (size: any): string => {
  switch (size) {
    case "1":
      return ".5em";
    case "2":
      return ".75em";
    case "3":
      return "1em";
    case "4":
      return "1.25em";
    case "5":
      return "2em";
    case "6":
      return "3em";
    default:
      return "1em";
  }
};

const Text = styled.p<TextProps>`
 font-size: ${(props) => getFontSize(props.size)};
 font-weight: ${(props) => props.weight};
 color:${(props) => getFontColor(props.color, props.theme)};
 text-align: ${(props) => props.align};
 line-height:1.1em;
 margin:0;
 padding:0;
`

export default Text;