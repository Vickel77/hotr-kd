import Text from "../Text";
import Card from "../Card";
import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";


const MeetPastor = styled(({ className }) => {
  const [show, setShow] = useState<Boolean>(false);
  const showIcons =()=>{
    setShow(!show);
  }
  return (
    <div className={className}>
      <Text color="primary" size="5" align="center" weight="bold">Our pastor will like to <br /> meet you and be your <br /> friend</Text>
      <div className="pastor-card">
        <Card color="transparent" src="/pst2.jpg" alt="Rev Barnabas Arastus" borderRadius="50%" label="Rev Barnabas Arastus">
          <Text size="3" color="primary">Resident Pastor, <br /> House on the Rock Kaduna </Text>
        </Card>
        <Button active onClick={showIcons}>
          Connect with pastor
        </Button>
        <div className="social-icons">
        {show && 
          <>
            <img src="facebook.png" height="20px" alt="facebook-icon"/>
            <img src="gmail.png" height="20px" alt="gmail-icon"/>
          </>}
        </div>
      </div>
    </div>
  )
})`

  height:80vh;
  width:80%;
  margin:0 auto;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  align-items:center;
  .pastor-card {
    height:60%;
    position:relative;
  }
  .social-icons * {
    background: ${({theme})=> theme.colors.primary};
    border-radius:50%;
    padding:5px;
    margin:5px;
    animation: social .2s;
    }
    @keyframes social {
      from{transform:translateY(-10px); opacity:0;}
      to{transform:translateY(0px); opacity:1;}
    }
  .social-icons *:hover {cursor:pointer; opacity:.5; transition:.25s;}
  @media (max-width:600px){
    margin-top:50px;
    width:90%;
    .pastor-card {
      text-align:center;
      width:90%;
      margin:0 auto;
    }
    .pastor-card > * {
      margin:0 auto;
    }

  }

`

export default MeetPastor;