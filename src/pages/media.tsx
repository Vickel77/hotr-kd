import Sermons from "./sermons";
import Books, { Header } from "./books";
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
          <Text className="mediaHeader" size="6" weight="bold" color="white">MISSION HOUSE MEDIA</Text>
        </Header>
        <Books />
        <Sermons />
        <Push />
      </div>
    </>
  )
})`
  .mediaHeader {
    width:100%;
    text-align:center;
    animation: ${media} 1s ease;
  }
`;

export default Media;