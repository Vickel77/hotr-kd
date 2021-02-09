import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Text from "../Text";
import Button from "../Button";
import { Link } from "react-router-dom";

const locateChurch = keyframes`
  from{transform:scale(.9)}
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
        <Button className="join-button" onClick={showMessage} size="4" active >JOIN US TODAY</Button>
        <Text color="primary" size="3" weight="bold">hope to see you in church</Text>
      </div>

      {show && 
        <>
          <div className="new-comers-message-wrap">
            {/* <Text className="new-comers-message" size="4" color="white">Welcome To</Text> */}

          </div>
          <div className="new-comers-message">
            <Text color="primary" size="3">
              We are indeed elated, excited and exelerated to have you 
              Apple trees do not thrive in the city of Kaduuna becausse of the
              climatic condition, so has God made a place for you and you for, 
              when you find that place stay, remain planted and help lift up the
              hand of the man of God.
              If the spirit of God is leading yyoyu to stay in this house come and
              become family and the Lord will richly bless you <br /><br />
              <strong>click on the locate and find church and connect with us</strong><br /><br />
              <Link to="/pages/locate" style={{ textDecoration: "none" }}>
                <Text className="locate-church" size="4" color="primary">LOCATE CHURCH</Text>
              </Link>
            </Text>
          </div>
        </>}

    </div>
  )
})`
background:${({ theme }) => theme.colors.white};
padding:20px 30px;
display:flex;
flex-flow:row wrap;
justify-content:space-around;
align-items:flex-end;
.new-here {display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;}
  ${Button} {padding:10px 0px;}
  .new-comers-message-wrap {
    position:relative;
    background:url("welcome2.jpg") no-repeat;
    background-size:100% 100%;
    background-position: 50% 50%;
    height:50vh;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:20px 0 40px;
    transform-origin:50% 0;
    border-radius:15px;
    animation: ${welcomeMessage} .5s alternate;
  }
  .new-comers-message-wrap > * {
    animation: ${welcomeMessages} 1s  alternate;
  }
  .new-comers-message {
    width:70%;
    margin:0 auto;
    padding:20px 0;
    
  }
  .new-comers-message > * {
    line-height:1.7em;
    text-align:left;
  }
  .locate-church{
    width:100%;
    text-align:center; 
    text-decoration:none;
    cursor:pointer;
    animation: ${locateChurch} 1s infinite alternate;
    
  }
@media (max-width:600px){
  padding:20px 20px;
}
  ${Button} {margin:15px 15px;}
  .new-comers-message-wrap {
    background-size:cover;
    height:30vh;
    width:100%;
    margin:20px auto;
  }
}

`

export default NewHere;