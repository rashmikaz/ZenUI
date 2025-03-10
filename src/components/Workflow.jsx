import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import mainimg from "../assets/team.png";

const Workflow = () => {
  return (
    <div className="mt-20 px-4 lg:px-12">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Turning Ideas{" "}
        <span className="bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text">
          into Reality
        </span>
      </h2>

      
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-12">
        
   
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={mainimg} alt="Team Members" className="w-[100%] lg:w-[190%] rounded-lg" />
        </div>

      
        <div className="w-full lg:w-1/2 space-y-6 lg:pl-12">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-green-400 bg-neutral-900 h-10 w-10 flex items-center justify-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Workflow;
