import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaComment,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact({ dark }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_ep8z7l5", // your service ID
        "template_3hrinam", // your template ID
        {
          title: "Contact Form Submission", // static title
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(), // current time
          message: formData.message,
        },
        "JWexb4sMhDgo5QCLX" // your public key
      )
      .then(
        () => {
          setStatus("success");
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 3000);
        },
        () => {
          setStatus("error");
          setSuccessMessage("Failed to send message. Try again later.");
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-700 ${
        dark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`grid gap-6 max-w-lg mx-auto p-10 rounded-2xl shadow-xl transition-colors duration-700 ${
            dark ? "bg-gray-700/50" : "bg-white/20"
          }`}
        >
          {/* Name input */}
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-10 p-3 w-full rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
            />
          </div>

          {/* Email input */}
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400 dark:text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-10 p-3 w-full rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
            />
          </div>

          {/* Message textarea */}
          <div className="relative">
            <FaComment className="absolute top-3 left-3 text-gray-400 dark:text-gray-300" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="pl-10 p-3 w-full rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
            />
          </div>

          {/* Send button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all transform hover:scale-105 ${
              status === "sending"
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status message */}
          {status === "success" && (
            <p className="text-center mt-4 font-medium text-green-500">
              {successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-center mt-4 font-medium text-red-500">
              {successMessage}
            </p>
          )}
        </form>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-6">
            You can also connect with me through
          </p>
          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/khanalalex"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
