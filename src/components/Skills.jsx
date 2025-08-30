import { useState } from "react";

const skills = [
  { name: "Java (Spring & Spring Boot)", img: "/skills/java.png" },
  { name: "Security & Microservices", img: "/skills/microservices.png" },
  { name: "Flutter", img: "/skills/flutter.png" },
  { name: "React", img: "/skills/react.png" },
  { name: "Python", img: "/skills/python.png" },
  { name: "MySQL", img: "/skills/mysql.png" },
  { name: "Git & Github", img: "/skills/github.png" },
  { name: "AWS", img: "/skills/aws.png" },
];

export default function Skills({ dark }) {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="skills"
      className={`py-24 transition-colors duration-700 ${
        dark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((s, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col items-center ${
                dark ? "bg-gray-700/50" : "bg-white/20"
              }`}
              onClick={() => setSelected(s)}
            >
              <img src={s.img} alt={s.name} className="w-16 h-16 mb-4 object-contain" />
              <p className="text-center font-semibold">{s.name}</p>
            </div>
          ))}
        </div>

        {/* Optional popup */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <div className={`bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg`}>
              <h3 className="mb-4 font-bold text-xl">{selected.name}</h3>
              <img src={selected.img} alt={selected.name} className="max-w-sm mx-auto" />
            </div>
          </div>
        )}

        {/* GitHub link section */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">Want to view my projects or work?</p>
          <a
            href="https://github.com/khanalalex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full border-2 border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold transition-all hover:bg-indigo-600 hover:text-white hover:shadow-lg"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
