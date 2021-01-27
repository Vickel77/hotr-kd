import { useEffect} from "react";
import { withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ArrowUp from "../Icons/ArrowUp";
import useHandleScroll from "../../hooks/useHandleScroll";

const BackToTopAnim = keyframes`
from{
  transform:translateY(100%);
  opacity:0;
}
50%{
  transform:translateY(100%);
  opacity:0;
}
to{
  transform:translateY(0%);
  opacity:1;
}`;

const Div = styled.div`
  z-index:9;
  cursor:pointer;
  position:fixed; bottom:20px; right:1em;
  animation:${BackToTopAnim} 1s ease ;
`;

const ScrollToTop = ({ history }: any) => {
  const { scrolled, handleScroll } = useHandleScroll();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  const ToTop = () => {
    window.scrollTo(0, 0);
  }


  return (
    <>
      {scrolled && <Div onClick={ToTop}>
        <ArrowUp color="#8AC23D" size="35" />
      </Div>}
    </>
  );
}


export default withRouter(ScrollToTop);