import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import Analytic from "./sections/analytic/analytic";
import ContentMarketing from "./sections/content_marketing/content_marketing";
import Faq from "./sections/faq/faq";
import HeroSection from "./sections/heroSection/heroSection";
import ImagesSection from "./sections/images/images";
import SEOSection from "./sections/seo/seo";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <NavBar />
        <div id="home">
          <HeroSection />
        </div>

        <div id="images">
          <ImagesSection />
        </div>

        <div id="seo">
          <SEOSection />
        </div>
        <div>
          <ContentMarketing />
        </div>
        <div>
          <Analytic />
        </div>
        <div>
          <Faq />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
