import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Displaycard from "./components/Displaycard/Displaycard.jsx";
import Songslist from "./components/Songslist/Songslist.jsx";

const NewAlbumAPI = "https://qtify-backend-labs.crio.do/albums/top";
const TopAlbumAPI = "https://qtify-backend-labs.crio.do/albums/new";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Songslist API={NewAlbumAPI} name={"New Album"} />
      <Songslist API={TopAlbumAPI} name={"Top Album"} />
    </div>
  );
}

export default App;
