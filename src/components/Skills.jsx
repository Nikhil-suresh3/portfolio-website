function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "ASP.NET Core"],
    },
    {
      title: "Languages",
      skills: ["C#", "Python", "TypeScript"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL Server"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="pt-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;