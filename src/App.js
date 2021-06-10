import "./App.css";
import { requests } from "./API/requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="NetFlix-Originals"
        fetch={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetch={requests.fetchTrending} />
      <Row title="Top Rated" fetch={requests.fetchTopRated} />
      <Row title="Action Movies" fetch={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
      <Row title="Romatic Movies" fetch={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
