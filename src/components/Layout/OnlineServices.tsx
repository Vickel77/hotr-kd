import styled from "styled-components";
import Card from "../Card";
import { Link } from "react-router-dom";

const OnlineServices = styled(({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="cards">
          <Link to="/pages/sermons" style={{ textDecoration: "none" }}>
            <Card color="white" src="/sermon-m.jpg" alt="" label={<strong>Sermons</strong>} />
          </Link>
          <Link to="/pages/books" style={{ textDecoration: "none" }}>
            <Card color="white" src="/books-m.jpg" alt="" label={<strong>Books</strong>} />
          </Link>
          <Link to="/pages/push" style={{ textDecoration: "none" }}>
            <Card color="white" src="/push-m.jpg" alt="" label={<strong>PUSH</strong>} />
          </Link>
          {/* <Link to="/pages/media" style={{ textDecoration: "none" }}>
            <Card color="white" src="/hotr-7.jpg" alt="" label="LOVE" />
          </Link> */}
        </div>
      </div>
    </>
  )
})`
  width:100%;
  padding:100px 0px;
  .cards {
    width:80%;
    margin:0 auto;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
  }
  .cards ${Card} {
    filter:grayscale(83%);
    border-radius:10px;
    box-shadow: 0 2px 10px #ccc;
  }
  .cards ${Card}:hover {
    filter:grayscale(0%);
    transform:translateY(-5px);
    box-shadow:0 2px 5px #999;
  }
  

`

export default OnlineServices;