import styled from "styled-components";
import Text from "../Text";
import Location from "../Icons/Location";
import Mail from "../Icons/Mail";
import Phone from "../Icons/Phone";

const Footer = styled(({ className }) => {
  return (
    <div className={className}>
      <div className="social-media-icons">
        <div><img src="/facebook.png" height="50px" alt="facebook icon"/></div>
        <div><img src="/gmail.png" height="50px" alt="gmail icon"/></div>
        <div><img src="/whatsapp.png" height="50px" alt="whatsapp icon"/></div>
      </div>
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
          <Text size="3" color="white">1st service: 9:00am </Text>
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
        <img className="footer-logo" src="/logo-w.png" alt="logo" />
      </div>
    </div>
  )
})`
  position:relative;
  background:-webkit-linear-gradient(#333, #232323);
  height:auto;
  width:100%;
  .social-media-icons {
    width:100%;
    margin: 0 auto;
    display:flex;
    justify-content:space-around;
  }
  .social-media-icons > * {
    width:100%;
    transition: .2s all;
  }
  .social-media-icons div:first-child {
    border-bottom:2px solid #1876F2;
  }
  .social-media-icons div:first-child:hover {
    background: #1876F2;
  }
  .social-media-icons div:nth-child(2) {
    border-bottom:2px solid #D54C3C;
  }
  .social-media-icons div:nth-child(2):hover{
    background: #D54C3C;
  }
  .social-media-icons div:nth-child(3) {
    border-bottom:2px solid #25D266;
  }
  .social-media-icons div:nth-child(3):hover {
    background: #25D266;
  }
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
  .footer-aux .footer-logo {filter:drop-shadow(0 0 3px #000) grayscale(100%) brightness(200%); opacity:.56;};
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