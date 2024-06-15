import NavBar from "../navbar/navbar";
import HeroSection from "./sections/heroSection/heroSection";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
