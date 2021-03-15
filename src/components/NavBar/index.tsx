import React, { useState, useEffect } from "react";
import { A } from "../Button";
import styled, { keyframes } from "styled-components";
import Home from "../Icons/Home";
import Media from "../Icons/Media";
import Location from "../Icons/Location";
import Cith from "../Icons/Cith"
import Money from "../Icons/Money";
import Menu from "../Menu";
import useHandleScroll from "../../hooks/useHandleScroll"
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <WebNav />
      <MobileNav />
    </>
  )
}
const navAnim = keyframes`
from{
  transform:translateY(-100%);
  opacity:0.5;
}
to{
  transform:translateY(0%);
  opacity:1;
}
`

const mobileNavAnim = keyframes`
  from{
    opacity:0;
    transform:translateY(100px);
  }
  50%{
    opacity:0;
    transform:translateY(50px);
  }
  51%{
    opacity:1;
    transform:translateY(50px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
`

const WebNav = styled(({ className, handleModal }) => {
  const { scrolled, handleScroll } = useHandleScroll();
  const NavClass: any = [];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  scrolled ? NavClass.push("nav-scroll") : NavClass.pop();

  return (
    <div className={className} id="nav">
      <div className={`nav-class ${NavClass.join(" ")}`}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img className="logo" src="/logo-w.png" alt="logo" />
        </Link>
        <div className={`menu`}>
          <NavLink className="navLink" exact activeClassName="active" to="/" style={{ textDecoration: 'none' }}>
            <A className="nav normal"><Home />Home</A>
          </NavLink>
          <NavLink className="navLink" exact activeClassName="active" to="/pages/media" style={{ textDecoration: 'none' }}>
            <A className="nav normal"><Media />Media</A>
          </NavLink>
          <NavLink className="navLink" exact activeClassName="active" to="/pages/locate" style={{ textDecoration: 'none' }}>
            <A className="nav normal"><Location size="15" />Locate us</A>
          </NavLink>
          <NavLink className="navLink" exact activeClassName="active" to="/pages/cith" style={{ textDecoration: 'none' }}>
            <A className="nav normal"><Cith />Cith</A>
          </NavLink>
          <NavLink className="navLink" exact activeClassName="active" to="/pages/give" style={{ textDecoration: 'none' }}>
           <A className="navLink nav" size="2" active><Money />Give</A>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
)`
  z-index:999999;
  @media (max-width: 600px){
    display:none;
  }
  .nav-class {
    position:absolute; top:0; right:0;
    background : rgba(255,255,255,1);
    width:100%;
    height:80px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
  .nav-scroll {
    position:fixed; top:0; right:0;
    background: rgba(255,255,255,.8);
    box-shadow: 0 3px 5px #333;
    animation:${navAnim} .5s ease alternate;
  }
  .logo {
    padding-left:30px;
  }
  .menu {display:flex;
    flex-direction:row;
    justify-content:space-between;}
  .navLink{
    margin-right:30px;
  }
  .nav {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1em;
    border-radius:5px;
  }
  .nav:visited {text-decoration:none;}
  .nav > * {
    padding-right:3px;
  }
  .normal {
    background: ${({ theme }) => theme.colors.default};
  }

  .nav:hover, .active .nav  {
    background-color:rgba(255,255,255,1);
    color:${({ theme }) => theme.colors.primary};
    }
  .active .nav:after {
    content:"";
    background: ${({ theme }) => theme.colors.primary};
    height:10%;
    width:100%;
    position:absolute; top:0; right:0;
    z-index:0;
  }
  .nav > *  {
    filter:drop-shadow(0 0 1px ${({ theme }) => theme.colors.primary});
    }
  .nav:hover > *  {
    filter:drop-shadow(0 0 0 transparent);
    }
  // .menu > ${A}:hover > *  {
  //   fill:${({ theme }) => theme.colors.primary};
  //   filter:none;
  //   }

`

const MobileNav = styled(({ className }) => {
  const { scrolled, handleScroll } = useHandleScroll();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleMenuClick =()=>{
    setIsVisible(!isVisible); 
  }

  // if (isVisible) {
  //   window.addEventListener("click", () => setIsVisible(false))
  // }
  return (
    <>
      <div className={`${scrolled && "navFixed"} ${className}`}>
        <div className={`mobileNavHeader ${scrolled && "navScroll"}`}>
          <div className="mobileNavHeadercontent">
            <Link onClick={() => setIsVisible(false)} to="/" style={{ textDecoration: 'none' }}>
              <img className="logo" src="/logo-w.png" width="150px" alt="logo" style={{paddingTop:"3px"}} />
            </Link>
            <div onClick={handleMenuClick}><Menu show={isVisible} /></div>
          </div>
        </div>
        <div onClick={() => setIsVisible(false)} className={`mobileNav ${isVisible && "showMobileNav"} `}>
          <div className={`mobilemenu`}>
            <Link onClick={() => setIsVisible(false)} to="/" style={{ textDecoration: 'none' }}>
              <A className="mobNav" color="primary" href="#"><Home />Home</A>
            </Link>
            <Link onClick={() => setIsVisible(false)} to="/pages/media" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#"><Media />Media</A>
            </Link>
            <Link onClick={() => setIsVisible(false)} to="/pages/locate" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#"><Location size="15" />Locate us</A>
            </Link>
            <Link onClick={() => setIsVisible(false)} to="/pages/cith" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#"><Cith size="15" />Cith</A>
            </Link>
            <Link onClick={() => setIsVisible(false)} to="/pages/give" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#" size="2" active><Money />Give</A>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
})`

display:none;
width:100%;
text-align:center;
z-index:111111;
.navFixed {position:fixed; top:0; left:0;}
@media (max-width: 600px){
  display:block;
}
.mobileNavHeader {
  background:rgba(255,255,255,.99);
  border-radius: 0 0 7px 7px;
  width:100%;
  position:absolute; top:0; left:0;
  z-index:11111;
}
.navScroll {
  box-shadow: 0 2px 3px rgba(0,0,0,.15);
  position:fixed; top:0; left:0;
  border-radius: 0 0 7px 7px;
  animation:${navAnim} .5s ease alternate;
  z-index:11111;
}
.mobileNavHeadercontent{
  width:90%;
  padding:0;
  margin:0 auto;
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
}
.mobileNav {
  position:fixed; top:0; left:0;
  z-index:1;
  display:none;
  background: rgba(0,0,0,.8);
  height:100vh;
  width:100%;
  transition: .5s linear all;
}
.showMobileNav{
  display:block;
  
}
.mobilemenu {
  position:absolute; bottom:0;
  border-radius:20px 20px 0 0;
  background:#333;
  height:80vh;
  width:100%;
  margin:auto;
  padding:50px auto;
  display:flex;
  flex-flow:column wrap;
  justify-content:center;  
  align-items:center;
  color:#fff;
  animation: ${mobileNavAnim} .35s;

}
.mobNav {
  background: ${({ theme }) => theme.colors.default}; 
  color: ${({ theme }) => theme.colors.primary};
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.2em;
  margin-bottom:50px;

}
.mobNav:active {
  tra
}
.mobNav > *{
  fill: ${({ theme }) => theme.colors.primary};
  padding-right:5px;
}
`

export default NavBar;