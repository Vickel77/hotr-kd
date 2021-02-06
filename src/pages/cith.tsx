import styled, { keyframes } from "styled-components";
import Text from "../components/Text";
import { Header } from "./books";
import Home from "../components/Icons/Home";

const media = keyframes`
  from {opacity:0; transform:translateY(-50%);}
  to {opacity:1; transform:translateY(0%);}
`

const CithCard = styled(({ className, children }) => {
  return (
    <div className={className}>
      {/* home image */}
      <div className="homeIcon">
        <Home size="80" color="white" />
      </div>
      <Text color="white" size="3">{children}</Text>
    </div>
  )
})`
  background:#555;
  width:31%;
  padding:30px 0;
  position:relative;
  .homeIcon {
    opacity:.45;
  }
  @media (max-width:600px){
    width:100%;
  }
  

`

const Cith = styled(({ className }) => {
  return (
    <>
      <div className={className}>
        <Header>
          <div className="header">
            <Text size="5" weight="bold" color="primary" >CITH CENTERS</Text>
            <Text size="4" color="primary" >in the city of Kaduna</Text>
          </div>
        </Header>
        <div className="cithCenters">
          <CithCard>
            R30, yusuf ilya street, Barnawa GRA, Kaduna <br /><br />
            <b>080943943943</b>
          </CithCard>
          <CithCard>
            54, Gidan mana street, jumbo close, kaduna <br /><br />
            <b>080943943943</b>
          </CithCard>
          <CithCard>
            P13, dogba close, maina kaduna <br /><br />
            <b>080943943943</b>
          </CithCard>
        </div>
      </div>
    </>
  )
})`
  width:100%;
  .header {
    animation: ${media} 1s;
  }
  .cithCenters {
    width:90%;
    margin:30px auto;
    display:flex;
    flex-flow:row wrap;
    gap:30px;
  }

`

export default Cith;