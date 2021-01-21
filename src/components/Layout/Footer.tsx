import styled from "styled-components";
import Text from "../Text";
import Location from "../Icons/Location";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone";

const Footer = styled(({ className }) => {
  return (
    <div className={className}>
      <div className="footer-main">
        <div>
          <Text size="4" color="primary">ABOUT US</Text>
          <Text size="3" color="white">
            House on the rock
            the mission house is
            a blessed, where the
            spirit and power of God
            is manifest in our time
          </Text>
        </div>
        <div>
          <Text size="4" color="primary">SERVICE TIMES</Text>
          <Text size="3" color="white" weight="bold">Sundays</Text>
          <Text size="3" color="white">1st service: 9:00am <br /> 2nd service: 11:00am</Text>
          <Text size="3" color="white" weight="bold"> <br /> Wednessdays</Text>
          <Text size="3" color="white">Mid-week Service: 05:00pm</Text>
        </div>
        <div>
          <Text size="4" color="primary">CONTACT US</Text>
          <Text size="3" color="white" weight="bold"><Phone color="grey" /> 080333444555 </Text> <br />
          <Text size="3" color="white"><Location color="grey" /> No.30 Yusuf Ilya street, <br />Barnawa G.R.A Kaduna</Text> <br />
          <Text size="3" color="white"><Mail color="grey" />hotrkd@gmail.com</Text>
        </div>
      </div>
      <div className="footer-aux">
        <Text size="3" color="white">© 2020 HOUSE ON THE ROCK. ALL RIGHTS RESERVED.</Text>
        <img className="footer-logo" src="/hotr-logo.png" alt="logo" />
      </div>
    </div>
  )
})`
  position:relative;
  background:-webkit-linear-gradient(#333, #232323);
  height:auto;
  width:100%;
  .footer-main {
    width:80%;
    margin:0 auto 30px;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
  }
  .footer-main > div {width:25%; padding-top:50px;}
  .footer-main > div > :first-child {padding-bottom:20px}
  .footer-main > div > ${Text} {
    line-height:1.5em;
    display:flex; 
    justify-content:center;
    align-items:center;
  }
  .footer-aux {
    border-top:1.5px solid grey;
    width:80%;
    padding:10px 0;
    margin: 0 auto;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    align-items:center;  
    text-align:center;
  }
  .footer-aux > ${Text} {opacity:.56; letter-spacing:3px;}
  .footer-aux .footer-logo {filter:drop-shadow(0 0 3px #000); opacity:.56;};
  @media (max-width:600px){
    height:auto;
    .footer-main {
      justify-content:space-around;
      padding-bottom:15px;
    }
    
    .footer-main > div { width:90%; margin:0 auto; padding-top:30px;}
    .footer-main > div > :first-child {padding-bottom:10px}
    .footer-aux > ${Text} {opacity:.56; letter-spacing:3px; padding-bottom:15px;}
    .footer-aux {padding:30px 0; margin-top:30px;}
  }
`

export default Footer;