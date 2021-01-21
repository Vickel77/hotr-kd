import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Text from "../Text";
import Button from "../Button";
import { Link } from "react-router-dom";

const locateChurch = keyframes`
  from{transform:scale(.7)}
  to{transform:scale(1)}
`
const welcomeMessage = keyframes`
  from{transform:scaleY(.7)}
  to{transform:scale(1)}
`
const welcomeMessages = keyframes`
  from{opacity:0;}
  50%{opacity:0;}
  to{opacity:1;}
`


const NewHere = styled(({ className }) => {
  const [show, setShow] = useState<boolean>(false);
  const showMessage = () => {
    setShow(!show);
  }
  // const deBounce = (func: any, wait = 20, immediate = true) => {
  //   var timeout: any;
  //   return function () {
  //     var context: any = this, args = arguments;
  //     var later = () => {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };

  // };

  // const checkSlide = (e: any) => {
  //   console.count(e);
  // }
  // window.addEventListener("scroll", checkSlide);
  return (
    <div className={className}>
      <div className="new-here">
        <Text color="primary" size="6">NEW <br /> HERE</Text>
        <Text color="primary" size="6" weight="bold">?</Text>
      </div>
      <div>
        <Button onClick={showMessage} size="4" active >JOIN US TODAY</Button>
        <Text color="primary" size="3" weight="bold">hope to see you in church</Text>
      </div>

      {show && <div className="new-comers-message-wrap">
        <Text className="new-comers-message" size="4" color="white">Welcome To</Text>
        <img src="/hotr-welcome.png" alt="welcome-image" /><br /> <br />
        <Link to="/pages/locate" style={{ textDecoration: "none" }}>
          <Text className="locate-church" size="4" color="primary">LOCATE CHURCH</Text>
        </Link>
      </div>}

    </div>
  )
})`
background:${({ theme }) => theme.colors.white};
padding:20px 60px;
display:flex;
flex-flow:row wrap;
justify-content:space-around;
align-items:flex-end;
.new-here {display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;}
  ${Button} {padding:15px 0;}

  .new-comers-message-wrap {
    background: -webkit-linear-gradient( rgba(0,0,0,.9), rgba(0,0,0,.8)),url("serve1.jpg") no-repeat;
    background-size:cover;
    height:50vh;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:20px 0 40px;
    transform-origin:50% 0;
    border-radius:20px;
    animation: ${welcomeMessage} .5s alternate;
  }
  .new-comers-message-wrap > * {
    animation: ${welcomeMessages} 1s  alternate;
  }
  .new-comers-message {
    width:80%;
    margin:0 auto;
    padding:20px 0;
  }
  .locate-church{
    text-decoration:none;
    cursor:pointer;
    animation: ${locateChurch} 1s infinite alternate;
    
  }
@media (max-width:600px){
  ${Button} {margin-top:15px;}
}

`

export default NewHere;