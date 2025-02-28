import { useState } from "react";
import ContactGif from "../assets/images/Contact-us.gif";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
         toast.success("Message sent successfully!");

    try {
      await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <section className="container mx-auto p-6 ">
      <h2 className="text-3xl font-bold mb-4 py-2 text-center">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {" "}
        <form
          onSubmit={handleSubmit}
          className="bg-white py-6  px-8 h-[30%] shadow-md rounded-md w-[50%]"
        >
          <fieldset className="mb-4 pb-2">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="mb-4 pb-2">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="mb-4 pb-2">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full border p-2 rounded"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 pb-2 py-2 rounded"
          >
            Send Message
          </button>
        </form>
        <div className="w-[50%]">
          <img src={ContactGif} alt="Contact gif" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
