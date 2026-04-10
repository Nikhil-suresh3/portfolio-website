function About() {
  return (
    <section id="about" className="pt-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side - Text */}
          <div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a Software Engineer with a strong foundation in data structures,
              algorithms, and full-stack web development. I enjoy building scalable
              applications and solving real-world problems using modern technologies.
            </p>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Currently, I am working at Cognizant as a Programming Analyst Trainee,
              where I focus on developing web applications using ASP.NET Core, React,
              and REST APIs.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I have hands-on experience in both frontend and backend development,
              along with a growing interest in AI/ML, demonstrated through my
              deepfake detection project.
            </p>
          </div>

          {/* Right Side - Highlights */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">

            <h3 className="text-xl font-semibold mb-4">Highlights</h3>

            <ul className="space-y-3 text-gray-300">
              <li>✔️ 1+ year experience in software development</li>
              <li>✔️ Full-stack developer (React, Node.js, ASP.NET)</li>
              <li>✔️ Built AI-based Deepfake Detection system</li>
              <li>✔️ Experience with REST APIs & databases</li>
              <li>✔️ Strong in Data Structures & OOP</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;