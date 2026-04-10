function Experience() {
  const experiences = [
    {
      company: "Cognizant",
      role: "Programming Analyst Trainee",
      duration: "Jul 2025 - Present",
      points: [
        "Worked with ASP.NET Core, Entity Framework, and REST APIs",
        "Developed dashboard using React, Node.js, and Express.js",
        "Built scalable web applications with modern technologies",
      ],
    },
    {
      company: "ThoughtSpot",
      role: "CX Intern",
      duration: "Jan 2025 - Jul 2025",
      points: [
        "Automated UI test cases using Playwright and TypeScript",
        "Improved system reliability and product quality",
        "Worked on enterprise analytics applications",
      ],
    },
  ];

  return (
    <section id="experience" className="pt-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12">Experience</h2>

        <div className="relative border-l-2 border-gray-700">

          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">

              {/* Circle */}
              <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-2"></span>

              {/* Card */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">

                <h3 className="text-xl font-semibold text-blue-400">
                  {exp.company}
                </h3>

                <p className="text-gray-400">
                  {exp.role} • {exp.duration}
                </p>

                <ul className="mt-4 space-y-2 text-gray-300 list-disc ml-5">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;