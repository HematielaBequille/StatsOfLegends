import Navbar from "./components/navbar/index";
import Carousel from "./components/carousel";
import OfTheWeek from "./components/oftheweek";
import NextGamesCalendar from "./components/nextgamescalendar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <OfTheWeek />
      <NextGamesCalendar />
    </div>
  );
}

export default App;
