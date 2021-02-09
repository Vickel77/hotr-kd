import Text from "../Text";
import Card from "../Card";
import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";

const MeetPastor = styled(({ className }) => {
  const [show, setShow] = useState<Boolean>(false);
  const showIcons = () => {
    setShow(!show);
  };
  return (
    <div className={className}>
      <Text color="primary" size="4" align="center" weight="bold">
        Our pastor will like to <br /> meet you and be your <br /> friend
      </Text>
      <div className="meet-pastor-container">
        <div className="pastor-card">
          <Card
            color="transparent"
            src="/pst2.jpg"
            alt="Rev Barnabas Arastus"
            borderRadius="50%"
            label="Rev Barnabas Arastus">
            <Text size="3" color="primary">
              Resident Pastor, <br /> House on the Rock Kaduna{" "}
            </Text>
          </Card>
          <Button size="3" active onClick={showIcons}>
            Connect with pastor
          </Button>
          <div className="social-icons">
            {show && (
              <>
                <div>
                  <img src="facebook.png" height="15px" alt="facebook-icon" />
                  <Text size="2" color="primary">
                    Rev Barnabas Arastus
                  </Text>
                </div>
                <div>
                  <img src="gmail.png" height="15px" alt="gmail-icon" />
                  <Text size="2" color="primary">
                    barnabasarastus@gmail.com
                  </Text>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
})`
  height: 80vh;
  width: 80%;
  margin: 0 auto 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content:space-around;
  align-items: center;

  .meet-pastor-container {
    height: 37vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
  .pastor-card {
    width: 300px;
    height: auto;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    ${Button} {
      width:70%;
    }
  }
  .social-icons {
    width:200px;
  }
  .social-icons div {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .social-icons img {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
    animation: social 0.2s;
  }
  @keyframes social {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @media (max-width: 600px) {
    height: 80vhs;
    margin-top: 100px;
    width: 90%;
    align-items:flex-start;
    .pastor-card {
      text-align: center;
      align-items:center;
      width: 100%;
      margin: 0 auto;
    }
    .pastor-card > * {
      margin: 0 auto;
    }
  }
`;

export default MeetPastor;
