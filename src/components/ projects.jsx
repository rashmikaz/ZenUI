const projects = [
    {
      category: "QA Automation",
      title: "Elevating Svenska Fönster's software quality with QA automation",
      description: "see how we helped Svenska Fönster transform their software quality assurance.",
      tags: ["Allure Report", "Typescript", "Azure Build Pipeline", "Playwright"],
    },
    {
      category: "Recruitment",
      title: "Revolutionizing High Volume Recruitments using AI",
      description: "Ascentic worked with Hubert on a cutting-edge platform designed to streamline and optimize high volume recruitment through the power of artificial intelligence.",
      tags: ["ReactJs", "Tailwind CSS", "Google Cloud Platform", "Node Js"],
    },
    {
      category: "FinTech",
      title: "A Taxonomical Classification of FinTech Data through Deep Learning based NLP",
      description: "FinTech has been at the forefront of using machine learning to streamline business processes.",
      tags: ["Node Js", "AWS Sage Maker", "PyTorch", "Seaborn", "Hugging Face"],
    },
  ];
  
  export default function ProjectCards() {
    return (
      <div className="container mx-auto px-4 py-12  text-white tracking-wide ">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Speaking of projects</h2>
        <p className="text-center text-neutral-400 mb-8">Check out what’s been cooking lately</p>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p className="text-sm font-semibold text-green-400">{project.category}</p>
                <h3 className="text-xl font-bold my-2 text-white">{project.title}</h3>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-400">{tag}</span>
                  ))}
                </div>
                <a href="#" className="text-green-400 font-medium">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-green-400 text-lg font-semibold">More Case Studies →</a>
        </div>
      </div>
    );
  }
  