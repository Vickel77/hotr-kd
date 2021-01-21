import styled from "styled-components";
import Text from "../Text";

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
  height:250px;
  width:18%;
  min-width:18%;
  position:relative;
  overflow:hidden;
  border-radius:10px;
  @media (max-width:600px){
    width:100%;
    padding-bottom:10px;
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
    height:250px;
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
    { date: "11 jan 2021", time: "daily", title: "21 days PUSH" },
    { src: "/serve2.jpg", date: "14 feb 2021", time: "5:30pm", title: "Love Unleashed" },
    { src: "/serve3.jpg", date: "27 feb 2021", time: "04:00pm", title: "power" },
    { date: "17 mar 2021", time: "05:00pm", title: "Get Set conference" },
    { src: "/serve1.jpg", date: "18 july 2021", time: "08:00am", title: "SHOUT" }
  ]
  const Update = events.map((event, idx) => <NewsCard key={idx} src={event.src} date={event.date} time={event.time} title={event.title} />)
  return (
    <>
      <div className={className}>
        <Text color="primary" size="6" align="center">UPCOMING EVENTS</Text>
        <div className="news">
          {Update}
        </div>
      </div>
    </>
  );
})`
  width:90%;
  margin:0 auto;
  padding:100px 0px;
  text-align:center;
  position:relative;
  overflow:hidden;
  @media (max-width:600px){
    width:90%;
    overflow:hidden;
    .news {
      justify-content:center;
      align-items:center;
    }
  }
  
  .news {
    display:flex;
    flex-flow: row wrap;
    justify-content:space-around;
    align-items:center;
    margin-top:30px;

  }

`;

export default NewsUpdate;