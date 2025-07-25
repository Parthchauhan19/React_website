import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Inquiry() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Submitted Data:", data);
    toast.success("Your request is sent", {
      autoClose: 4000, // 4 second
      pauseOnHover: false,
      closeOnClick: true,
    });

    reset(); // clear form after submission
  };

  const handleValidateAndSubmit = async (e) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) {
      toast.error("Fill the data first.");
      return;
    }
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />

      <div className="min-h-screen w-full absolute inset-0 bg-gradient from-black via-black/65 to-transparent z-10"></div>
      <div
        data-aos="fade-up-right"
        data-aos-offset="300"
        data-aos-delay="500"
        data-aos-easing="ease-in-sine"
        className="min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/images/build.jpg')",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          className="max-w-[700px] w-full p-6 rounded-xl bg-[#212121]/80 backdrop-blur-md text-gray-200 shadow-2xl ml-30 px-4 mt-10 mb-10"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 15px 2px rgba(255,255,255,0.8)",
              "0 0 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <h2 className="text-center mb-8 text-4xl font-bold text-red-600 uppercase">
            Inquiry Form
          </h2>

          <form onSubmit={handleValidateAndSubmit}>
            <FormSelect
              label="Inquiry Type"
              name="inquiryType"
              register={register}
              errors={errors}
              options={["Buy", "Sell", "Rent"]}
              requiredMsg="Inquiry type is required"
            />

            <FormSelect
              label="I’m a"
              name="userType"
              register={register}
              errors={errors}
              options={["Owner", "Agent", "Buyer", "Investor"]}
              requiredMsg="Please select your role"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <FormInput
                label="First Name"
                name="firstName"
                register={register}
                errors={errors}
                rules={{
                  required: "First name is required",
                  minLength: { value: 3, message: "Min 3 chars" },
                  maxLength: { value: 8, message: "Max 8 chars" },
                }}
              />
              <FormInput
                label="Middle Name"
                name="middleName"
                register={register}
                errors={errors}
                rules={{
                  required: "Middle name is required",
                  minLength: { value: 3, message: "Min 3 chars" },
                  maxLength: { value: 15, message: "Max 15 chars" },
                }}
              />
            </div>

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              register={register}
              errors={errors}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <FormSelect
                label="Location"
                name="location"
                register={register}
                errors={errors}
                options={[
                  "Ahmedabad",
                  "Surat",
                  "Rajkot",
                  "Vadodara",
                  "Gandhinagar",
                  "Morbi",
                  "Bhavnagar",
                  "Amreli",
                ]}
                requiredMsg="Select a location"
              />
              <FormInput
                label="Zip Code"
                name="zip"
                register={register}
                errors={errors}
                rules={{
                  required: "Zip code is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Enter valid 6-digit zip",
                  },
                }}
              />
            </div>

            <FormSelect
              label="Property Type"
              name="propertyType"
              register={register}
              errors={errors}
              options={[
                "Commercial",
                "Office Space",
                "Shop / Showroom",
                "Residential",
                "Bungalows / Villa",
                "Flats/Apartments",
                "Penthouse",
                "Plot / Land",
                "Studio",
                "Weekend Plot/Bungalow",
              ]}
              requiredMsg="Select a property type"
            />

            <FormInput
              label="Contact No"
              name="contactNo"
              type="tel"
              register={register}
              errors={errors}
              rules={{
                required: "Contact no is required",
                minLength: { value: 10, message: "Min 10 digits" },
                maxLength: { value: 15, message: "Max 15 digits" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only digits allowed",
                },
              }}
            />

            <div className="mb-5">
              <label className="block font-semibold mb-1">Your Message:</label>
              <textarea
                {...register("yourMessage", {
                  required: "Message is required",
                  minLength: { value: 3, message: "Min 3 chars" },
                  maxLength: { value: 200, message: "Max 200 chars" },
                })}
                className={`w-full h-20 resize-none p-2 border rounded bg-[#212121] text-gray-200 ${
                  errors.yourMessage ? "border-red-500" : "border-gray-700"
                }`}
              />
              {errors.yourMessage && (
                <p className="text-[#f93b3b] text-sm mt-1">
                  {errors.yourMessage.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-2 rounded font-bold text-gray-200 transition-all ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

const FormInput = ({ label, name, type = "text", register, errors, rules }) => (
  <div>
    <label className="block font-semibold mb-1">{label}:</label>
    <input
      type={type}
      {...register(name, rules)}
      className={`w-full p-2 border rounded bg-[#212121] text-gray-200 ${
        errors[name] ? "border-red-500" : "border-gray-700"
      }`}
    />
    {errors[name] && (
      <p className="text-[#f93b3b] text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

const FormSelect = ({
  label,
  name,
  register,
  errors,
  options,
  requiredMsg,
}) => (
  <div className="mb-5">
    <label className="block font-semibold mb-1">{label}:</label>
    <select
      {...register(name, { required: requiredMsg })}
      className={`w-full p-2 border rounded bg-[#212121] text-gray-400 ${
        errors[name] ? "border-red-500" : "border-gray-700"
      }`}
    >
      <option value="">Select</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[name] && (
      <p className="text-[#f93b3b] text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

export default Inquiry;
