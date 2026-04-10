
function Navbar() {
  return (
<nav className="fixed w-full bg-gray-900 text-white shadow-md z-50">
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
    <h1 className="text-xl font-bold">Nikhil Suresh</h1>
    <ul className="hidden md:flex space-x-5">
      <li><a href="#home" className="hover:text-blue-400 whitespace-nowrap">Home</a></li>
      <li><a href="#about" className="hover:text-blue-400 whitespace-nowrap">About</a></li>
      <li><a href="#experience" className="hover:text-blue-400 whitespace-nowrap">Experience</a></li>
      <li><a href="#projects" className="hover:text-blue-400 whitespace-nowrap">Projects</a></li>
      <li><a href="#skills" className="hover:text-blue-400 whitespace-nowrap">Skills</a></li>
      <li><a href="#contact" className="hover:text-blue-400 whitespace-nowrap">Contact</a></li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;