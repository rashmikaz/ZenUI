import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import ServiceSection from "./components/ServiceSection";
import Workflow from "./components/Workflow";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
     <Navbar /> 
     <div className="max-w-7xl mx-auto pt-20 px-6">
     <HeroSection />
     <ServiceSection />
     <Workflow />
     <Review />
     <Footer />


     </div>
    </>
  );
};

export default App;