import NavBar from "../navbar/navbar";
import HeroSection from "./sections/heroSection/heroSection";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-center min-h-screen"></div>
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
