import styled, { keyframes } from "styled-components";
import Text from "../components/Text";

const modal = keyframes`
  from {opacity:0; transform:scale(.8, 1);}
  to {opacity:1; transform:scale(1);}
`

const Give = styled(({ className, onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      <div className="GiveModal">
        <Text color="white" size="5">GIVING</Text><br />
        <Text color="white" size="4"><em> "and Isaac sowed in that land <br />and the same year reaped a hundred fold" </em></Text><br />
        <Text color="white" size="5">House on the rock Kaduna</Text>
        <Text color="white" weight="bold" size="6">GTB: 0045356788</Text>
        <Text color="white" size="5"><br />Thank you for giving to the Lord!</Text>
      </div>
    </div>
  );
})`
  background:rgba(0,0,0,.7);
  position:fixed; top:0; left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:100%;
  .GiveModal {
    animation: ${modal} .5s;
    background: ${({ theme }) => theme.colors.primary};
    width:50%;
    padding:50px 0;
    border-radius:20px;
  }
  @media (max-width:600px){
    .GiveModal {
      width:90%;
      padding:30px 10px;
    }
  }

`

export default Give;