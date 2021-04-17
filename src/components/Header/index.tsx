import styled from "styled-components"

interface props {
  image?: string;
  mobImage?: string;
}
const Header = styled.div<props>`

background:${(props) => props.image ? `-webkit-linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0)),url(${props.image}) no-repeat` : `#fff`};
  background-size:100% 100%;
  height:50vh;
  padding:0 30px;
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  @media (max-width:600px){
    background:${(props) => props.mobImage ? `-webkit-linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0)),url(${props.mobImage}) no-repeat ` : `#fff`};
    background-size:cover;
    justify-content:center;
    height:40vh;
  }



`

export default Header;