import NavBar from "../navbar/navbar";
import HeroSection from "./sections/heroSection/heroSection";
import ImagesSection from "./sections/images/images";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <ImagesSection></ImagesSection>
    </div>
  );
}

export default LandingPage;
