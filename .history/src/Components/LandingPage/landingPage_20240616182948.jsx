import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";
import Analytic from "./sections/analytic/analytic";
import ContentMarketing from "./sections/content_marketing/content_marketing";
import Faq from "./sections/faq/faq";
import HeroSection from "./sections/heroSection/heroSection";
import ImagesSection from "./sections/images/images";
import SEOSection from "./sections/seo/seo";

function LandingPage() {
  const Divider = (props) => {
    return <div className="py-40">{props.children}</div>;
  };
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <NavBar />
        <div id="home">
          <HeroSection />
        </div>

        <ImagesSection />

        <div id="seo">
          <Divider>
            <SEOSection />
          </Divider>
        </div>
        <div id="content-marketing">
          <ContentMarketing />
        </div>
        <div id="analytics">
          <Analytic />
        </div>

        <Faq />

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
