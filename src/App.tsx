import IntroSection from "./components/IntroSection";
import WeddingInfo from "./components/WeddingInfo";
import Gallery from "./components/Gallery";
import LocationMap from "./components/LocationMap";
import Account from "./components/Account";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
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
