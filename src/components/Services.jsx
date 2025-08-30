export default function Services({ dark }) {
  const services = [
    { title: "Web Development", desc: "Building responsive and modern web applications." },
    { title: "Java Development", desc: "Specializing in Java, Spring Boot, microservices, and security." },
    { title: "Teaching", desc: "Providing lessons in web, database, and Java for students." },
  ];

  return (
    <section
      id="services"
      className={`py-24 transition-colors duration-700 ${dark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105
                ${dark ? "bg-gray-700/50" : "bg-white/20"}`}
            >
              <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
