import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer({ dark }) {
  return (
    <footer
      className={`w-full py-8 transition-colors duration-700
        ${dark ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-sm font-medium">
          &copy; {new Date().getFullYear()} Alex Khanal. All rights reserved.
        </p>
        {/* <div className="flex gap-6 text-xl">
          <a href="https://github.com/khanalalex" target="_blank" className="hover:text-indigo-500 transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/alex-khanal-70a627270/" target="_blank" className="hover:text-indigo-500 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" className="hover:text-indigo-500 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/" target="_blank" className="hover:text-indigo-500 transition-colors">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/" target="_blank" className="hover:text-indigo-500 transition-colors">
            <FaInstagram />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
