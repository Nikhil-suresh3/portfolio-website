function Experience() {
  return (
    <section id="experience"className="p-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Cognizant</h3>
          <p className="text-gray-400">Programming Analyst Trainee</p>
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            <li>Worked with ASP.NET Core, Entity Framework, REST APIs</li>
            <li>Developed dashboard using React + Node.js</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">ThoughtSpot</h3>
          <p className="text-gray-400">CX Intern</p>
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            <li>Automated UI testing using Playwright & TypeScript</li>
            <li>Improved system reliability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Experience