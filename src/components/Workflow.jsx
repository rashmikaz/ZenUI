import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import mainimg from "../assets/team.png";
import { motion } from "framer-motion";

const Workflow = () => {
  return (
    <div className="mt-20 px-4 lg:px-12">
     
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
      >
        Turning Ideas{" "}
        <span className="bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text">
          into Reality
        </span>
      </motion.h2>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mt-12">
        
      
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={mainimg}
            alt="Team Members"
            className="w-[100%] lg:w-[190%] rounded-lg"
          />
        </div>

       
        <motion.div 
          className="w-full lg:w-1/2 space-y-6 lg:pl-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { staggerChildren: 0.3 } 
            }
          }}
        >
          {checklistItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-start gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-green-400 bg-neutral-900 h-10 w-10 flex items-center justify-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};

export default Workflow;
