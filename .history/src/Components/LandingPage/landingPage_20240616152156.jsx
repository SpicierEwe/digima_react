import NavBar from "../navbar/navbar";
import Analytic from "./sections/analytic/analytic";
import ContentMarketing from "./sections/content_marketing/content_marketing";
import HeroSection from "./sections/heroSection/heroSection";
import ImagesSection from "./sections/images/images";
import SEOSection from "./sections/seo/seo";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="hidden">
        <NavBar />
        <HeroSection />
        <ImagesSection />
        <SEOSection />
        <ContentMarketing /> <Analytic />
      </div>
    </div>
  );
}

export default LandingPage;
