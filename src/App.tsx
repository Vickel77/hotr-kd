import Home from "./pages/home";
import Media from "./pages/media";
import Locate from "./pages/locate";
import Cith from "./pages/cith";
import Sermons from "./pages/sermons";
import Books from "./pages/books";
import Push from "./pages/push";
import NavBar from "./components/NavBar";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Theme from "./utils/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  const GlobalStyle = createGlobalStyle`
    html, body{
      text-align:center;
      background-color:#eee;
      margin: 0;
      width:100%;
      overflow-x: hidden;
      position:relative;
      font-family:'CMG sans';
      transition: all 0.5s linear;
      scroll-behavior:smooth;
    }
    body > * {
      width:100%;
        overflow-x: hidden;
    }
    @media (max-width: 600px){
      body {width:100%;
        overflow-x: hidden;}
    }
    ::-webkit-scrollbar {width:10px;}
    ::-webkit-scrollbar-track { background: rgba(0,00,00,.00);}
    ::-webkit-scrollbar-thumb {box-shadow:0 4px 5px #555; height:10px; background: ${({ theme }) => theme.colors.primary};}
    ::-webkit-scrollbar-thumb:hover {background: ${({ theme }) => theme.colors.white};}
  `;
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/pages/media" exact component={() => <Media />} />
            <Route path="/pages/locate" exact component={() => <Locate />} />
            <Route path="/pages/cith" exact component={() => <Cith />} />
            <Route path="/pages/sermons" exact component={() => <Sermons />} />
            <Route path="/pages/books" exact component={() => <Books />} />
            <Route path="/pages/push" exact component={() => <Push />} />
          </Switch>
          <Footer />
          <NavBar />

        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
