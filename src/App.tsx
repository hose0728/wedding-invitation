import IntroSection from "./components/IntroSection";
import WeddingInfo from "./components/WeddingInfo";
import Gallery from "./components/Gallery";
import LocationMap from "./components/LocationMap";
import Account from "./components/Account";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import WelcomeOverlay from "./components/WelcomeOverlay";

function App() {
  return (
    <div className="app-container">
      <MusicPlayer />
      <IntroSection />
      <WeddingInfo />
      <Gallery />
      <LocationMap />
      <Account />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
