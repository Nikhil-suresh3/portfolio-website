function Contact() {
  return (
    <section id="contact" className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

        <p className="text-gray-400 mb-10">
          I'm open to opportunities and collaborations. Feel free to reach out!
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Email</h3>
            <p className="text-gray-300">nikhilsuresh62@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Phone</h3>
            <p className="text-gray-300">+91 9074600897</p>
          </div>

          {/* Location */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Location</h3>
            <p className="text-gray-300">Trivandrum, Kerala</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="mailto:nikhilsuresh62@gmail.com"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-suresh62"
            target="_blank"
            rel="noreferrer"
            className="border px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          > 
            LinkedIn
          </a>

          <a
            href="https://github.com/Nikhil-suresh3"
            target="_blank"
            rel="noreferrer"
            className="border px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;