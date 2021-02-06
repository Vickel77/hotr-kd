import styled from "styled-components";
import Text from "../components/Text";
import { Header } from "./books";
import Download from "../components/Icons/download";

const Sermons = styled(({ className }) => {
  return (
    <>
      <div className={className}>
        <Header image="/sermon-w.jpg" mobImage="/sermon-m.jpg">
          <Text className="pageTitle" size="6" color="white">SERMONS</Text>
        </Header>
        <div className="pageText">
          <Text color="primary" size="4">Download Messages by <b> Rev Barnabas Arastus </b></Text>
        </div>
        <div className="sermons">
          <SermonCard className="sermonCard" src="/pst1.jpg" alt="">The Ziklag Experience</SermonCard>
          <SermonCard className="sermonCard" src="/pst2.jpg" alt="">KATATIZO</SermonCard>
          <SermonCard className="sermonCard" src="/bg.jpg" alt="">Wallking in wisdom</SermonCard>
          <SermonCard className="sermonCard" src="/sermon-m.jpg" alt="">The standing of the believer</SermonCard>
          <SermonCard className="sermonCard" src="/pst2.jpg" alt="">Live Long and prosper</SermonCard>
          <SermonCard className="sermonCard" src="/bg.jpg" alt="">Wallking in wisdom</SermonCard>
        </div>
      </div>
    </>
  )
})`
background:#fff;
width:100%;
overflow:hidden;
margin:0px auto 0px;
padding-bottom:50px;
@media (max-width:600px){
  margin:20px auto 0;
  width:100%;
  .pageTitle {
    text-align:center;
  }
}
.pageTitle {
  width:80%;
  text-align:right;
}
.pageText {
  margin-top:30px;s
}
.sermons {
  width:90%;
  margin:30px auto;
  display:flex;
  flex-flow:row wrap;
  justify-content:flex-start;
  gap:20px;
}
.sermonCard {
  // margin:0 0px 30px 30px;
}


@media (max-width: 600px){
  .sermons {
    justify-content:center;
  }
}

`
const SermonCard = styled(({ className, src, children }) => {
  return (
    <div className={className}>
      <img className="sermonImage" src={src} alt="pastor" />
      <Text color="primary" size="3" weight="bold">{children}</Text>
      <div className="downloadIcon">
        <Download color="#8AC23D" size="25" />
      </div>
      {/* audio controls */}
    </div>
  )
})`
  background:#fff;
  height:50px;
  width:22%;
  min-width:20%;
  padding:10px;
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
  border-radius:10px;
  box-shadow:0 2px 5px #777;
  overflow:hidden;
  border:1px solid transparent;
  cursor:pointer;
  transition:.2s;
  @media (max-width:600px){
    width:90%;
  }
  &:hover {
    background:${({ theme }) => theme.colors.primaryAccent};
    box-shadow:0 2px 5px #999;
  }
  &:active{
    box-shadow:0 0px 2px #999;
  }
  &:hover .downloadIcon  {
    opacity:1;
  }
  .sermonImage {
    height:45px;
    width:45px;
  }
  .downloadIcon{
    opacity:.5;
  }

  
`

export default Sermons;