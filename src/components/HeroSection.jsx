import { useState, useEffect } from "react";

const Herosection = () => {
  const [text, setText] = useState("Intuitive");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === "Intuitive" ? "Reality" : "Intuitive"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide">
        Crafting Ideas into{" "}
        <span className="bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text transition-opacity duration-1000 ease-in-out">
          {text}
        </span>{" "}
        Experiences
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        We blend creativity with functionality, turning visionary ideas into user-friendly designs that deliver seamless digital experiences, enhancing every interaction with precision and innovation!
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          role="button"
          aria-label="Talk to Us"
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-3 rounded-md shadow-md transform hover:scale-105 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 ease-in-out"
        >
          Start building your next product

        </a>
        <a 
          href="#" 
          role="button"
          aria-label="View References"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          References
        </a>
      </div>
    </div>
  );
};

export default Herosection;
