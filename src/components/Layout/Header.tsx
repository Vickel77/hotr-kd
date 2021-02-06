
import Text from "../Text";
import styled from "styled-components";
import '../../App.css';
import Carousel from 'nuka-carousel';


const Header = styled(({ className }) => {

  return (
    <div className={className}>
      <Carousel
        swiping={true}
        autoplay={true}
        autoplayInterval={3000}
        wrapAround={true}
        transitionMode="fade"
        opacityScale={0}
        pauseOnHover={false}
        defaultControlsConfig={{
          prevButtonStyle: {
            opacity: '0',
          },
          nextButtonStyle: {
            opacity: '0'
          },
          pagingDotsStyle: {
            fill: "transparent"
          }
        }}

      > 
        <div className="carousel-wrap">
          <img src="/hotr-mission-house.png" width="100%" height="100%" alt="header" />
        </div>
        <div className="carousel-wrap">
          <img src="/bg-2.jpg" width="100%" height="100%" alt="header" />
        </div>
        <div className="carousel-wrap">
          <img src="/pst-paul.jpg" width="100%" height="100%" alt="header" />
        </div>
        <div className="carousel-wrap">
          <img src="/hotr-5.jpg" width="100%" height="100%" alt="header" />
        </div>
        <div className="carousel-wrap">
          <img src="/bg.jpg" width="100%" height="100%" alt="header" />
        </div>
      </Carousel >
      {/* <Text size="4" align="left" color="white">WELCOME TO</Text>
      <Text className="hotr" size="5" weight="bolder" align="left" color="white">HOUSE ON <br /> THE ROCK KADUNA</Text> */}
      <div className="mission-house-wrap">
        <Text className="mission-house" size="3" color="white" >THE MISSION HOUSE</Text>
      </div>
    </div>
  )
})`
scroll-behavior:smooth;
background-repeat: no-repeat;
background-size:cover;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
position:relative;
overflow:hidden;
.carousel-wrap {
  height:100vh;
  width:100%;
}

.mission-house {
  background:-webkit-linear-gradient(rgba(0,0,0,.1) 70%, rgba(0,0,0,.8));
  height:100%;
  position: absolute; bottom:0; left:0;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  padding-bottom:10px;
  width:100%;
  text-align:center;
  letter-spacing:2em;
  word-spacing:3em;
  text-shadow:0 1px 5px #000;
}

@media (max-width: 600px){
  min-height: 40vh;
  .carousel-wrap {
    height:40vh;
    width:100%;
  }
  .mission-house {
    font-size:1em;
     letter-spacing:.5em;
  word-spacing:.05em;
  }
}


`

export default Header;