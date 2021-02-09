import styled from "styled-components";
import Text from "../Text";

const Corevalues = styled(({ className }) => {
  return (
    <div className={className}>
      <Text className="core-values-head" align="center" color="white" size="6" weight="bold">CORE VALUES</Text>
      <div className="core-values">
        <div className="prayer">
          <Text color="primary" weight="bold" size="4">PRAYER</Text>
          <Text className="values" color="white" size="3">
            House on the rock
            is a Praying based
            church, who believe
            in the potency
            and efficacy of
            prayer
          </Text>
        </div>
        <div className="word">
          <Text color="primary" weight="bold" size="4">WORD</Text>
          <Text className="values" color="white" size="3">
            The word of God
            is taught and
            preached without
            compromise, to the end that Kingdom be established.
          </Text>
        </div>
        <div className="worship">
          <Text color="primary" weight="bold" size="4">WORSHIP</Text>
          <Text className="values" color="white" size="3">
            In House on the Rock
            we worship in spirit
            and in truth, and it goes
            beyond the service
            its our life style
          </Text>
        </div>
      </div>
    </div>
  )
})`
  background: -webkit-linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.8)), url("/core-values-bg.jpg") no-repeat;
  background-size:cover;
  background-attachment:fixed;
  width:100%;
  overflow:hidden;
  position:relative;
  .core-values {
    display:flex;
    flex-flow:row wrap;
    align-items:flex-start;
    justify-content:space-between;
    width:80%;
    width:80%;
    height:100%;
    margin:0 auto;
    padding:50px 0;
  }
  .core-values-head {
    position:absolute; top:50%; left:0;
    transform:translateY(-50%);
    width:100%;
    text-align:center;
    font-size:13em;
    opacity:.1;
    letter-spacing:-0.05em;
    line-height:.85em;
  }
  .core-values > .word, .worship, .prayer { width:25%; }
  .core-values > div > * {padding-bottom:10px;}
  .values {line-height:1.5em;}
  @media (max-width:600px){
    background-position:50% 50%;
    .core-values{padding-top:100px;}
    .core-values-head {
      width:100%;
      top:1em;
      text-align:center;
      font-size:3em;
      line-height:.5em;
      opacity:.3;
    }
    .core-values > .word, .worship, .prayer { width:90%; margin:00 auto; }
    .core-values > div > * {padding-bottom:25px;}
  }
  
`

export default Corevalues;