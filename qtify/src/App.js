import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Displaycard from "./components/Displaycard/Displaycard.jsx";
import Songslist from "./components/Songslist/Songslist.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Songslist />
    </div>
  );
}

export default App;
