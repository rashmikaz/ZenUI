import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import Workflow from "./components/Workflow";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Projects from "./components/ projects"
import Pricing from "./components/Pricing";
import ContactSection from "./components/ ContactSection";

const App = () => {
  return (
    <>
     <Navbar /> 
     <div className="max-w-7xl mx-auto pt-20 px-6">
     <HeroSection />
     <ServiceSection />
     <Workflow />
     <Projects />
     <Pricing />
     <Review />
     <ContactSection />
     <Footer />


     </div>
    </>
  );
};

export default App;