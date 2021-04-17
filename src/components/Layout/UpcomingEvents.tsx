import styled from "styled-components";
import Text from "../Text";
import Carousel from 'nuka-carousel';
import { CaretLeft, CaretRight } from "../Icons/Caret"

interface NewsProps {
  className?: any;
  children?: string;
  date?: string;
  time?: string;
  src?: string;
  title?: string;
}

const NewsCard = styled(({ className, src, title, date, time }: NewsProps) => {
  return (
    <div className={className}>
      {src && <img className="newsImage" src={src} alt="" />}
      <div className={`newsDetails ${!src && "ShowNews"}`}>
        <Text color="white" size="5" weight="bold">{title}</Text><br />
        <Text color="white" size="4" >{date && date.toUpperCase()}</Text>
        <Text color="white" size="4" >{time && time.toUpperCase()}</Text>
      </div>
    </div>
  );
})`
  height:400px;
  width:400px;
  min-width:18%;
  position:relative;
  overflow:hidden;
  
  @media (max-width:600px){
    width:100%;
    margin-bottom:15px;
  }
  
  &:hover .newsDetails {
    opacity:1;
    top:0;
  }
  .newsImage {
    width:100%;
    height:100%;
  }
  .newsDetails{
    height:400px;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,.7);
    position:absolute; top:20%; left:0;
    transition:.3s;
    opacity:0;
  }
  .ShowNews {
    opacity:1;
    top:0;
  }
`;

const NewsUpdate = styled(({ className }) => {
  const events = [
    { date: "11 January 2021", time: "daily", title: "21 days PUSH" },
    { src: "/serve2.jpg", date: "14 February 2021", time: "5:30pm", title: "Love Unleashed" },
    { src: "/serve3.jpg", date: "27 February 2021", time: "04:00pm", title: "power" },
    { date: "17 March 2021", time: "05:00pm", title: "Get Set conference" },
    { src: "/serve1.jpg", date: "18 July 2021", time: "08:00am", title: "SHOUT" }
  ]
  return (
    <>
        <div className={className}>
          <Text color="primary" weight="bold" size="6" align="center">UPCOMING EVENTS</Text>
          <Carousel
            swiping={true}
            autoplay={true}
            autoplayInterval={3000}
            wrapAround={true}
            transitionMode="scroll3d"
            opacityScale={0}
            withoutControls={true}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: "#8AC23D00"
              }
            }}
          >
            {events.map((event, idx) => 
              <div className="news">
                <NewsCard key={idx} src={event.src} date={event.date} time={event.time} title={event.title} />
              </div>
              )}
          </Carousel>
        </div>
      
    </>
  );
})`
  width:50%;
  margin:0 auto;
  padding:50px 0px;
  text-align:center;
  position:relative;
  overflow:hidden;
  @media (max-width:600px){
    width:90%;
    overflow:hidden;
  }
  
  .news {
    height:400px;
    display:flex;
    flex-flow: row wrap;
    justify-content:space-around;
    align-items:center;
    margin-top:30px;

  }

`;

export default NewsUpdate;