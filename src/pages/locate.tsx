import styled, { keyframes } from "styled-components";
import Text from "../components/Text";
import { Header } from "./books";

interface props {
  google?: string;
  className?: string;
  frameborder?: any;
}
const media = keyframes`
  from {opacity:0; transform:translateY(-50%);}
  to {opacity:1; transform:translateY(0%);}
`

// const API_KEY = "AIzaSyCeEwFop4GhcCi7jL0yPJ94JsFbDPUXR9A";

const Locate = styled(({ className, google, frameborder }: props) => {
  //   const mapStyle = {
  //     height: "60vh",
  //     width: "80%",
  //     margin: "0 auto",
  //     boxShadow: "0 0 10px 2px #333"
  //   }
  //   const defaultCenter = {
  //     location: "Galaxy multipurpose hall",
  //     lat: 10.463433972232208,
  //     lng: 7.475565597042282
  //   }
  return (
    <>
      <div className={className}>
        <div className="locate">
          <Header>
            <Text className="header" size="6" weight="bold" color="white">THE MISSION HOUSE</Text>
          </Header>
          <div className="map">
            <iframe title="HOTR The Mission House" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4722313072198!2d7.4733592144749155!3d10.463389567755511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d4a360e9cf217%3A0x50f10258357e9ce0!2sGalaxy%20Multipurpose%20Hall!5e0!3m2!1sen!2sng!4v1609283625773!5m2!1sen!2sng" width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen={false} aria-hidden="false" tabIndex={0}></iframe>
          </div>
        </div>
      </div>

    </>
    //     <>
    //       <div className={className}>
    //         <div className="locate">
    //           <Text size="6" color="white"> Find THE MISSION HOUSE</Text>
    //           <Map
    //             google={google}
    //             style={mapStyle}
    //             centerAroundCurrentLocation={true}
    //             initialCenter={defaultCenter}>
    //             <Marker mapCenter={defaultCenter} />
    //           </Map>
    //         </div>
    //       </div>
    //     </>
  );
})`
  
  
.header {
  animation: ${media} 1s;
}
.map {
  width:80%;
  margin: -20px auto 30px;
  padding:00;
  border-radius:20px;
  overflow:hidden;


}
  @media (max-width:600px){
    margin:0px auto 0;
    .locate {
      padding-top:30px;
    }
  }s

`

// export default GoogleApiWrapper({
//   apiKey: (API_KEY)
// })(Locate);

export default Locate;