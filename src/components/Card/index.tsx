import styled from "styled-components";
import Text, { getFontColor } from "../Text";

interface props {
  className?: any;
  src?: string;
  alt?: string;
  children?: any;
  color?: string;
  borderRadius?: string;
  label?: any;
  subTitle?: string;
}

const Card = styled(({ className, src, alt, label, subTitle, children }: props) => {
  return (
    <div className={className}>
      {src && <img className="image" src={src} alt={alt} />}
      <div className="content">
        <Text color="primary" align="center" size="3" weight="bold">{label}</Text>
        {subTitle && <Text color="primary" align="center" size="2">{subTitle}</Text>}
        {children && <div className="CardContent">{children}</div>}
      </div>
    </div>
  )
})`
  background:${(props) => getFontColor(props.color, props.theme)};
  width:200px;
  min-height:250px;
  overflow:hidden;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  transition:.5s;

  .image {width:200px;
    height:190px;
    border-radius:${(props) => props.borderRadius};}
  .content {
    min-height:50px;
    width:100%;
    display:flex;
    padding: 20px 0px 0;
    flex-flow:column nowrap;
    justify-content:space-around;
    align-items:center;  
    }
  .content > * {
    margin-bottom:15px;
  }
  .CardContent {
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
  } 
  @media (max-width:600px){
        margin-bottom:30px;
    }


    


`

export default Card;