import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inquirey() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitted Data:", data);
    toast.success("Your request is sent");
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
      <ToastContainer position="top-right" autoClose={3000} />

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 mt-10"
        style={{ backgroundImage: `url('./images/bg-form.png')` }}
      >
        <motion.div
          className="max-w-[700px] w-full p-6 rounded-xl bg-[#212121]/90 backdrop-blur-md text-white"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 15px 2px rgba(255,255,255,0.8)",
              "0 0 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <h2 className="text-center mb-8 text-4xl font-bold text-red-500">
            Real Estate Inquiry Form
          </h2>

          <form onSubmit={handleValidateAndSubmit}>
            {/* Inquiry Type */}
            <div className="mb-5">
              <label className="block font-semibold mb-1">Inquiry Type:</label>
              <select
                {...register("inquiryType", {
                  required: "Inquiry type is required",
                })}
                className={`w-full p-2 border rounded bg-[#212121] text-white ${
                  errors.inquiryType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </select>
              {errors.inquiryType && (
                <p className="text-[#f93b3b] text-sm mt-1">
                  {errors.inquiryType.message}
                </p>
              )}
            </div>

            {/* I’m a... */}
            <div className="mb-5">
              <label className="block font-semibold mb-1">I’m a:</label>
              <select
                {...register("userType", {
                  required: "Please select your role",
                })}
                className={`w-full p-2 border rounded bg-[#212121] text-white ${
                  errors.userType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                <option value="Owner">Owner</option>
                <option value="Agent">Agent</option>
                <option value="Buyer">Buyer</option>
                <option value="Investor">Investor</option>
              </select>
              {errors.userType && (
                <p className="text-[#f93b3b] text-sm mt-1">
                  {errors.userType.message}
                </p>
              )}
            </div>

            {/* First & Middle Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block font-semibold mb-1">First Name:</label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: { value: 3, message: "Min 3 chars" },
                    maxLength: { value: 8, message: "Max 8 chars" },
                  })}
                  className={`w-full p-2 border rounded bg-[#212121] text-white ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-[#f93b3b] text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">Middle Name:</label>
                <input
                  {...register("middleName", {
                    required: "Middle name is required",
                    minLength: { value: 3, message: "Min 3 chars" },
                    maxLength: { value: 15, message: "Max 15 chars" },
                  })}
                  className={`w-full p-2 border rounded bg-[#212121] text-white ${
                    errors.middleName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.middleName && (
                  <p className="text-[#f93b3b] text-sm mt-1">
                    {errors.middleName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block font-semibold mb-1">Email Address:</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
                className={`w-full p-2 border rounded bg-[#212121] text-white ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-[#f93b3b] text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Location & Zip Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block font-semibold mb-1">Location:</label>
                <select
                  {...register("location", { required: "Select a location" })}
                  className={`w-full p-2 border rounded bg-[#212121] text-white ${
                    errors.location ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Vadodara">Vadodara</option>
                </select>
                {errors.location && (
                  <p className="text-[#f93b3b] text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">Zip Code:</label>
                <input
                  type="text"
                  {...register("zip", {
                    required: "Zip code is required",
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: "Enter valid 6-digit zip",
                    },
                  })}
                  className={`w-full p-2 border rounded bg-[#212121] text-white ${
                    errors.zip ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.zip && (
                  <p className="text-[#f93b3b] text-sm mt-1">
                    {errors.zip.message}
                  </p>
                )}
              </div>
            </div>

            {/* Property Type */}
            <div className="mb-5">
              <label className="block font-semibold mb-1">Property Type:</label>
              <select
                {...register("propertyType", {
                  required: "Select a property type",
                })}
                className={`w-full p-2 border rounded bg-[#212121] text-white ${
                  errors.propertyType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select type</option>
                <option value="Commercial">Commercial</option>
                <option value="Office Space">- Office Space</option>
                <option value="Shop / Showroom">- Shop / Showroom</option>
                <option value="Residential">Residential</option>
                <option value="Bungalows / Villa">- Bungalows / Villa</option>
                <option value="Flats/Apartments">- Flats/Apartments</option>
                <option value="Penthouse">- Penthouse</option>
                <option value="Plot / Land">- Plot / Land</option>
                <option value="Studio">- Studio</option>
                <option value="Weekend Plot/Bungalow">
                  - Weekend Plot/Bungalow
                </option>
              </select>
              {errors.propertyType && (
                <p className="text-[#f93b3b] text-sm mt-1">
                  {errors.propertyType.message}
                </p>
              )}
            </div>

            {/* Contact Number */}
            <div className="mb-5">
              <label className="block font-semibold mb-1">Contact No:</label>
              <input
                type="tel"
                {...register("contactNo", {
                  required: "Contact no is required",
                  minLength: { value: 10, message: "Min 10 digits" },
                  maxLength: { value: 15, message: "Max 15 digits" },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only digits allowed",
                  },
                })}
                className={`w-full p-2 border rounded bg-[#212121] text-white ${
                  errors.contactNo ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.contactNo && (
                <p className="text-[#f93b3b] text-sm mt-1">
                  {errors.contactNo.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-5">
              <label className="block font-semibold mb-1">Your Message:</label>
              <textarea
                {...register("yourMessage", {
                  required: "Message is required",
                  minLength: { value: 3, message: "Min 3 chars" },
                  maxLength: { value: 200, message: "Max 200 chars" },
                })}
                className={`w-full h-20 resize-none p-2 border rounded bg-[#212121] text-white ${
                  errors.yourMessage ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.yourMessage && (
                <p className="text-[#f93b3b] text-sm mt-1">
                  {errors.yourMessage.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-2 rounded font-bold text-white transition-all ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
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

export default Inquirey;
