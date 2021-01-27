import styled from "styled-components"
import Text from "../Text"
import Carousel from 'nuka-carousel';
import { CaretLeft, CaretRight } from "../Icons/Caret"

const ServiceQuotes = styled(({ className }) => {
  return (
    <div className={className}>
      <Text className="quotes-header" color="primary" size="5" align="center">SERVICE QUOTES</Text>
      <Carousel
        swiping={true}
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={true}
        transitionMode="scroll3d"
        opacityScale={0}
        renderCenterLeftControls={({ previousSlide }) => (
          <button className="caret" onClick={previousSlide}><CaretLeft className="caret" color="white" /></button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="caret" onClick={nextSlide}> <CaretRight className="caret" color="white" /></button>
        )}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "#8AC23D"
          }
        }}

      >
        <div className="carousel-wrap">
          <Text size="4" color="white" align="center">
            ...To obey is better than to sacrifice, and to harken than the fat of rams
          </Text>
        </div>
        <div className="carousel-wrap">
          <Text size="4" color="white" align="center">
            And Isaac sowed in that land, and in the same reaped an hundred fold harvest
          </Text>
        </div>
        <div className="carousel-wrap">
          <Text size="4" color="white" align="center">
            Abraham is the father of faith
          </Text>
        </div>
        <div className="carousel-wrap">
          <Text size="4" color="white" align="center">
            Living is seeding, sow seeds of kindness, love and compassion for in due season you will reap, if you faint not
          </Text>
        </div>
      </Carousel >
    </div >
  )
})`
background: -webkit-linear-gradient(rgba(30,30,30,.8),rgba(30,30,30,.9)), url("/pst1.jpg") no-repeat;
background-size:cover;
background-position:0 50%;
display:flex;
flex-direction:column;
align-items:center;
height:60vh;
width:80%;
border-radius:20px;
box-shadow:inset 0 0 10px 5px #000;
padding:15px 0;
margin:0 auto;
position:relative;
.quotes-header { width:100%;position:absolute; top:.2em; text-align:center;  }
.carousel-wrap {
  width:100%;
  height:50vh;
  display:flex;
  margin:0 auto;
  justify-content:center;
  align-items:center;
}

.carousel-wrap ${Text} {width:55%; opacity:.8; padding:50px; border-radius:50px;}
.carousel-wrap:hover ${Text} {
  background:rgba(0,0,0,.5);
  opacity:1;
  transition:0.15s;
}

.caret {
  background:rgba(0,0,0,.3);
  padding: 20px 10px;
  outline:none;
  border:none;
  opacity:.5;
}
.caret:hover {
  background:rgba(0,0,0,.6);
  opacity:1;
  color: ${({ theme }) => theme.colors.primary};
}

@media (max-width:600px){
  
  height:40vh;
  width:90%;
  margin:0 auto;
  .quotes-header { width:100%;position:absolute; top:.2em; text-align:center; }
  .carousel-wrap {height:35vh;}
}
`
export default ServiceQuotes;