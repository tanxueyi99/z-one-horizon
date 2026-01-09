import { useState } from "react";
import BGImage from "../assets/imgs/ContactUSLetterBGImage.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.notes) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", notes: "" });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md p-8 pr-20">
        <h2
          className="text-5xl font-bold text-center mb-8 text-gray-800"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Contact Us
        </h2>

        <div className="space-y-4 pr-8">
          {/* Name Field */}
          <div className="flex items-center">
            <label
              htmlFor="name"
              className="text-4xl font-medium text-gray-800 mr-2 whitespace-nowrap"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength="30"
              className="flex-1 bg-transparent border-none outline-none text-gray-800 text-4xl overflow-hidden"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
              placeholder="text here"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center">
            <label
              htmlFor="email"
              className="text-4xl font-medium text-gray-800 mr-2 whitespace-nowrap"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              maxLength="40"
              className="flex-1 bg-transparent border-none outline-none text-gray-800 text-4xl overflow-hidden"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
              placeholder="text here"
            />
          </div>

          {/* Notes Field */}
          <div className="flex items-start">
            <label
              htmlFor="notes"
              className="text-4xl font-medium text-gray-800 mr-2 whitespace-nowrap"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Notes:
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              maxLength="200"
              className="flex-1 bg-transparent border-none outline-none text-gray-800 text-4xl resize-none overflow-hidden"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
              placeholder="text here"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center -ml-8">
            <button
              onClick={handleSubmit}
              className="bg-transparent border-none text-gray-800 text-5xl cursor-pointer hover:text-gray-600 transition duration-200"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Write a letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
