import Header from "../components/Header";
import Sermons from "./sermons";
import Books from "./books";
import Push from "./push";
import styled, { keyframes } from "styled-components";
import Text from "../components/Text";

const media = keyframes`
  from {opacity:0; transform:translateY(-50%);}
  to {opacity:1; transform:translateY(0%);}
`
const Media = styled(({ className }) => {

  return (
    <>
      <div className={className}>
        <Header className="header" >
          <Text className="mediaHeader" size="5" weight="bold" color="primary">MISSION HOUSE MEDIA</Text>
        </Header>
        <Books />
        <Sermons />
        <Push />
      </div>
    </>
  )
})`
  background:#fff;
  .mediaHeader {
    width:100%;
    text-align:center;
    animation: ${media} 1s ease;
  }
`;

export default Media;