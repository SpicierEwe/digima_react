import NavBar from "../navbar/navbar";
import HeroSection from "./sections/heroSection/heroSection";
import ImagesSection from "./sections/images/images";
import SEOSection from "./sections/seo/seo";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <ImagesSection />
      <SEOSection/></SEOSection>
    </div>
  );
}

export default LandingPage;
