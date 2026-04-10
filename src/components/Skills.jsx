function Skills() {
  return (
    <section id="skills" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {["React", "Node.js", "ASP.NET", "C#", "Python", "SQL"].map(skill => (
          <span className="bg-blue-600 px-4 py-2 rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;