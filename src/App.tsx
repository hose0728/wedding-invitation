import IntroSection from "./components/IntroSection";
import WeddingInfo from "./components/WeddingInfo";
import Gallery from "./components/Gallery";
import Calendar from "./components/Calender";
import LocationMap from "./components/LocationMap";
import Account from "./components/Account";
import RSVP from "./components/RSVP";
import ShareSection from "./components/ShareSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import WelcomeOverlay from "./components/WelcomeOverlay";

function App() {
  return (
    <div className="app-container">
      <WelcomeOverlay />
      <MusicPlayer />
      <IntroSection />
      <WeddingInfo />
      <Gallery />
      <Calendar />
      <LocationMap />
      <Account />
      <RSVP />
      <ShareSection />
      <Footer />
    </div>
  );
}

export default App;
