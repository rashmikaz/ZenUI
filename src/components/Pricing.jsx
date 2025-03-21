import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing models we offer
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <motion.div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered effect
          >
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8">
                {option.title}
              </p>
              <p className="mb-8">
                <span className="text-neutral-500 text-1xl mt-6 mr-2">{option.price}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-green-400 border border--900 rounded-lg transition duration-200"
              >
                More about
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
