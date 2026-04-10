function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Deepfake Detection System</h3>
          <p className="text-gray-400 mt-2">EfficientNet + Vision Mamba model with 94% accuracy.</p>
          <p className="text-sm mt-2">Tech: Python, Deep Learning, Gradio</p>
          <a href="https://github.com/Nikhil-suresh3/deep-fake-detection-system" className="text-blue-400 mt-2 block">View Code →</a>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Hospital Management System</h3>
          <p className="text-gray-400 mt-2">Full-stack system for managing hospital workflows.</p>
          <p className="text-sm mt-2">Tech: ASP.NET Core, SQL Server, jQuery</p>
          <a href="https://github.com/Nikhil-suresh3/Hospital-Management-System" className="text-blue-400 mt-2 block">View Code →</a>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl md:col-start-1 md:col-end-3 md:w-1/2 md:mx-auto">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-gray-400 mt-2">A website to showcase about me.</p>
          <p className="text-sm mt-2">Tech: React, Node.js</p>
          <a href="https://github.com/Nikhil-suresh3/portfolio-website" className="text-blue-400 mt-2 block">View Code →</a>
        </div>

      </div>
    </section>
  );
}
export default Projects;