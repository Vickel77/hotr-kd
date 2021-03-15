import styled, { keyframes } from "styled-components";
import Text from "../components/Text";


const modal = keyframes`
  from {opacity:0; transform:scale(.8, 1);}
  to {opacity:1; transform:scale(1);}
`;

const Give = styled(({ className, onClick }) => {
  return (
    <div className={className}>
      <div className="give-text">
        <Text color="primary" size="5">
          GIVING
        </Text>
        <br />
        <Text color="primary" size="4">
          <em>
            {" "}
            "and Isaac sowed in that land <br />
            and the same year reaped a hundred fold"{" "}
          </em>
        </Text>
      </div>
      <div className="give-modals">
        <div className="GiveModal">
          <Text color="white" size="5" weight="bold">
            TITHE AND OFFERING 
          </Text>
          <Text color="white" size="4">
          <br />
            House on the rock Kaduna
          </Text>
          <Text color="white" weight="bold" size="5">
            GTB: 0045356788
          </Text>
        </div>
        <div className="GiveModal">
          <Text color="white" size="5" weight="bold">
            PARTNERSHIP
          </Text>
          <Text color="white" size="4">
            <br />
            House on the rock Kaduna
          </Text>
          <Text color="white" weight="bold" size="5">
            GTB: 0045356788
          </Text>
        </div>
        <div className="GiveModal">
          <Text color="white" size="5" weight="bold">
            LAND
          </Text>
          <Text color="white" size="4">
            <br />
            House on the rock Kaduna
          </Text>
          <Text color="white" weight="bold" size="5">
            GTB: 0045356788
          </Text>          
        </div>
      </div>
      <div className="appreciate-text">
        <Text color="primary" size="4">
          Thank you for giving to the Lord!
        </Text>
      </div>
    </div>
  );
})`
  position: static;
  top: 0;
  left: 0;
  display: flex;
  flex-flow:column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .give-text {
    margin-bottom:50px;
  }
  .give-modals {
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
  }
  .GiveModal {
    width:30%;
    animation: ${modal} 0.5s;
    background: ${({ theme }) => theme.colors.primary};
    padding: 50px 10px;
    border-radius: 20px;
  }
  .GiveModal:nth-child(2){
    background:orange;
  }
  .GiveModal:nth-child(3) {
    background:purple;
  }
  .appreciate-text {
    margin-top:50px;
  }
  @media (max-width: 600px) {
    height:100vh;
    width:100%;
    padding-top: 30px;
    .give-text {
      margin-bottom:20px;
    }
    .give-modals{
      align-items:flex-start;
    }
    .GiveModal {
      width: 80%;
      height:auto;
      padding: 20px 5px;
      margin-top: 10px;
    }
    .appreciate-text {
      margin-top:10px;
    }
  }
`;

export default Give;
