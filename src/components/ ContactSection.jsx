import { useForm } from "react-hook-form";
import ceoimg from "../assets/new ceo.jpg"

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <section className="py-16 px-6 lg:px-20 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h3 className="text-lg uppercase tracking-wide  text-neutral-500">Meet Our Expert</h3>
          <h2 className="text-4xl font-bold mb-14">Let’s talk about your big vision!</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              {...register("name", { required: "Name is required" })} 
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <input 
              type="email" 
              placeholder="E-mail" 
              {...register("email", { required: "Email is required" })} 
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input 
              type="tel" 
              placeholder="Phone number (optional)" 
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <textarea 
              placeholder="How can we help you?" 
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>

            <div className="flex items-center mt-8">
              <input type="checkbox" id="consent" className="mr-2" required />
              <label htmlFor="consent" className="text-gray-600">
                I give my consent to <a href="#" className="text-green-400">Privacy Policy</a> and agree to data processing.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-400 text-black font-semibold py-3 rounded-lg ">
              Submit
            </button>
          </form>
        </div>

        
        <div className="text-center md:text-left">
          <img src={ceoimg} alt="Expert" className="w-115 h-90 mx-auto md:mx-0 rounded-lg" />
          <h3 className="text-2xl font-semibold mt-8">Lukasz Kosman</h3>
          <p className=" text-neutral-500">CEO at ZenUI</p>
          <p className="mt-4  text-neutral-500">
            Hi, my name is Lukasz, and I will guide you through the product development process. 
            During our first interview, we will discuss your needs and estimate the budget and timeline.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
