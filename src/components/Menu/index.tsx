import styled from "styled-components";


const Menu = styled(({ className, show }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className={`menu`}>
          <div className={`ham ${show && "active"}`}></div>
          <div className={`ham ${show && "active"}`}></div>
          <div className={`ham ${show && "active"}`}></div>
        </div>
      </div>
    </>
  );
})`

  .menu > * {
    background: ${({ theme }) => theme.colors.primary};
    width:20px;
    height:2px;   
  }
  .ham {
    transform-origin:15%; transition: .5s ease all;
    margin-bottom:3px;
  }
  
  .active{
    background: ${({ theme }) => theme.colors.primary};
  }
  .active:nth-child(1) {
    transform:rotateZ(45deg);
  }
  .active:nth-child(2) {
    opacity:0;
  }
  .active:last-child{
    transform:rotateZ(-45deg);
  }

`

export default Menu;