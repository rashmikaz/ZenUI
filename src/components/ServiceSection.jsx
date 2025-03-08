import { features } from "../constants";

const ServiceSection = () => {
  return (
   <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
    <div className="text-center">
        <span className="bg-neutral-900 text-gray-300 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"
        >
          Service
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        Transforming Ideas{" "}
          <span className="bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text"
          >
          into Reality
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex h-10 w-10 p-2 bg-neutral-900 text-green-400 justify-center items-center rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md"
>
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

   </div>
  )
}

export default ServiceSection
