import styled from "styled-components"
import Text from "../Text"
import Carousel from 'nuka-carousel';
import { CaretLeft, CaretRight } from "../Icons/Caret"

const ServiceQuotes = styled(({ className }) => {
  return (
    <div className={className}>
      <Text className="quotes-header" color="primary" weight="bold" size="6" align="center">SERMON SLIDES</Text>
      <Carousel
        swiping={true}
        autoplay={true}
        autoplayInterval={5000}
        wrapAround={true}
        transitionMode="fade"
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

        <div className="carousel-wrap" style={{backgroundImage: 'url("/pst-paul.jpg")'}} />
        <div className="carousel-wrap" style={{backgroundImage: 'url("/hotr-5.jpg")'}}/>
        <div className="carousel-wrap" style={{backgroundImage: 'url("/pst-paul1.jpg")'}}/>
        <div className="carousel-wrap" style={{backgroundImage: 'url("/pst1.jpg")'}}/>
      </Carousel >
    </div >
  )
})`
height:70vh;
width:80%;
margin:0 auto;
position:relative;
overflow:hidden;
.quotes-header { width:100%;z-index:555; text-align:center;  }
.carousel-wrap {
  background-size:cover;
  width:100%;
  height:60vh;
  margin:0 auto;
  margin-top:30px;
  
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
  
  height:60vh;
  width:90%;
  margin:0 auto;
  overflow:hidden;
  .quotes-header { width:100%;stext-align:center; }
  .carousel-wrap {height:40vh;}
}
`
export default ServiceQuotes;