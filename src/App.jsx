import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import ServiceSection from "./components/ServiceSection";

const App = () => {
  return (
    <>
     <Navbar /> 
     <div className="max-w-7xl mx-auto pt-20 px-6">
     <HeroSection />
     <ServiceSection />

     </div>
    </>
  );
};

export default App;