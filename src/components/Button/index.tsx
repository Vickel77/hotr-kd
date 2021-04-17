import styled from 'styled-components';

interface ButtonProps {
  color?: String;
  size?: string;
  disabled?: any;
  active?: boolean;
  label?: String;
  href?: string;
}
const getSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "1":
      return "auto";
    case "2":
      return "100px";
    case "3":
      return "150px";
    case "4":
      return "250px";
    default: return "auto";
  }
}

const getFontSize = (size: any): string => {
  switch (size) {
    case "1":
      return ".55em";
    case "2":
      return ".7em";
    case "3":
      return "1em";
    case "4":
      return "1.5em";
    case "5":
      return "2em";
    default:
      return ".7em";
  }
}
const Button = styled.button<ButtonProps>`
background-color:${({ theme }) => theme.colors.white};
position:relative;
color:${({ color, theme }) => color || theme.colors.primary};
padding:5px 10px;
border:none;
font-size:${(props) => getFontSize(props.size)};
outline:none;
box-shadow:0 1.5px 2px 1px rgba(0,0,0,.06);
text-decoration:none;
transition:.05s;
overflow:hidden;
width:${props => getSize(props.size)};
&:hover {
  background:${({ color, theme }) => color || theme.colors.primary};
  color:#ffffff;
  box-shadow:0 1.5px 3px 1px rgba(0,0,0,.1);
  cursor:pointer;
}
& > * {fill: ${({ theme }) => theme.colors.white};}
&:hover > * {fill:${({ theme }) => theme.colors.primary};}
&:active {box-shadow:none; opacity:.8; text-decoration:none; transform:scale(.9);} 

  ${props => props.active && `
    background:#8AC23D;
    color:#ffffff;
    &:hover {
      background:#ffffff;
      color:#8AC23D;
      }
    &:hover > * {fill:#8AC23D;}
  `}
`

export const A = Button.withComponent("a");
export default Button;