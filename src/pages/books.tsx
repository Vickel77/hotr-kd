import styled from "styled-components";
import Text from "../components/Text";
import Card from "../components/Card";
import Button from "../components/Button";

interface props {
  image?: string;
  mobImage?: string;
}
export const Header = styled.div<props>`

background:${(props) => props.image ? `-webkit-linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0)),url(${props.image}) no-repeat` : `#fff`};
  background-size:100% 100%;
  height:50vh;
  padding:0 30px;
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  @media (max-width:600px){
    background:${(props) => props.mobImage ? `-webkit-linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0)),url(${props.mobImage}) no-repeat ` : `#fff`};
    background-size:cover;
    justify-content:center;
    height:40vh;
  }



`

const Books = styled(({ className }) => {
  return (
    <>
      <div className={className}>
        <Header image="/books-w.jpg" mobImage="/books-m.jpg">
          <Text className="pageTitle" size="6" color="white" align="right">BOOKS</Text>
        </Header>
        <div className="pageText">
          <Text color="primary" size="4">You can now Order the best selling books <br /> by <b>Rev Barnabas Arastus</b></Text>
        </div>
        <div className="books">
          <Card borderRadius="10px 10px 0 0" src="/book-1.jpg" alt="" label="WORD" >
            <Button >READ</Button>
            <Button active>ORDER NOW</Button>
          </Card>
          <Card borderRadius="10px 10px 0 0" src="/book-2.jpg" alt="s" label="More and more money in a recession">
            <Button >READ</Button>
            <Button active>ORDER NOW</Button>
          </Card>
          <Card borderRadius="10px 10px 0 0" src="/book-3.jpg" alt="s" label="The super blessed life">
            <Button >READ</Button>
            <Button active>ORDER NOW</Button>
          </Card>
        </div>
      </div>
    </>
  )
})`
background:${({ theme }) => theme.colors.white};
width:100%;
overflow:hidden;
@media (max-width:600px){
  margin:0px auto;
  padding-bottom:50px;
  width:100%;
  .pageTitle  {
    text-align:center;
  }
}
.pageTitle {
  width:100%;
  text-align:center;
}
.pageText {
  margin:50px 00;
}
.books {
  width:90%;
  margin:30px auto;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  perspective:1000px;
  transform-origin:50%;
  ${Card} {
    margin-bottom:60px;
  }
}

.books > * {
  box-shadow:-2px 2px 10px #aaa;
  border-radius: 10px;
  transform-origin:50%;
  transform:rotateY(5deg);
  
}
.books > *:hover {
  box-shadow:0 2px 20px #ccc;
  transform:rotateY(0deg);
}

@media (max-width: 600px){
  .books {
    justify-content:center;
  }
}

`

export default Books;