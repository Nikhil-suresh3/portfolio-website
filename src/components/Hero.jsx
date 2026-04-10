function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Nikhil Suresh 👋
      </h1>
      <p className="text-xl text-gray-400">
        Software Engineer
      </p>

      <div className="mt-6 space-x-4">
        <a href="#projects" className="bg-blue-500 px-6 py-2 rounded-lg">
          View Projects
        </a>

        <a
         href="/Nikhil_Suresh_Resume.pdf"
         download
        className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
        Download Resume
        </a>

        <a href="#contact" className="border px-6 py-2 rounded-lg">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;