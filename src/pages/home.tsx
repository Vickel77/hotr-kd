import Header from "../components/Layout/Header";
import NewHere from "../components/Layout/NewHere";
import NewsUpdate from "../components/Layout/UpcomingEvents";
import Corevalues from "../components/Layout/Corevalues";
import OnlineServices from "../components/Layout/OnlineServices";
import ServiceQuotes from "../components/Layout/ServiceQuotes";
import MeetPastor from "../components/Layout/MeetPastor";

const Home = () => {
  return (
    <>
      <Header />
      <NewHere />
      <NewsUpdate />
      <Corevalues />
      <OnlineServices />
      <ServiceQuotes />
      <MeetPastor />
    </>
  );
}

export default Home;