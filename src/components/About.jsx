import { motion } from "framer-motion";

export default function About({ dark }) {
  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-700 ${dark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="overflow-hidden rounded-2xl shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/profile.jpg" alt="Alex Khanal" className="w-full object-cover rounded-2xl" />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            I am Alex Khanal, a passionate software developer with experience as a Freelancer, Java developer, Flutter Support and Computer Programming Instructor. 
          </p>
          <p className="mb-4">
            I completed my Bachelor’s degree in Computer Information System(BCIS) from Apex College and currently pursuing a Master’s in Computer Applications (MCA) with a specialization in Artificial Intelligence at Manipal Institute of Technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
