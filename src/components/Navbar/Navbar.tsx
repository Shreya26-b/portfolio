import { useState, useEffect } from "react";


const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setOpen(false);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <nav className="fixed top-0 w-full h-16 px-[5%] flex items-center justify-between bg-[#C2A889] z-50">
      {/* LEFT */}
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#home" onClick={() => setOpen(false)} className="cursor-pointer font-bold text-[#FFFFFF]">
              Home
            </a>
          </li>

          {/* Desktop items */}
          <li>
            <a
              href="#skills"
              className="hidden sm:block cursor-pointer font-bold text-[#FFFFFF]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hidden sm:block cursor-pointer font-bold text-[#FFFFFF]"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hidden sm:block cursor-pointer font-bold text-[#FFFFFF]"
            >
              Experience
            </a>
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 relative">
        <button className="px-4 py-2 cursor-pointer rounded-full border border-[#7a5c4b] bg-white hover:bg-[#f3e8da] transition">
          <a href="#contactme" className="font-bold text-[#3b2f2f]">Contact Me</a>
        </button>

        {/* Mobile Menu Button */}
        <button className="sm:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Mobile Dropdown */}
        {open && (
  <div className="absolute right-0 top-14 w-52 bg-white rounded-2xl shadow-xl flex flex-col py-3 sm:hidden">
    
    <a
      href="#skills"
      onClick={() => setOpen(false)}
      className="px-6 py-4 text-base font-medium text-[#3b2a23] hover:bg-[#f3e8da] transition"
    >
      Skills
    </a>

    <a
      href="#projects"
      onClick={() => setOpen(false)}
      className="px-6 py-4 text-base font-medium text-[#3b2a23] hover:bg-[#f3e8da] transition"
    >
      Projects
    </a>

    <a
      href="#experience"
      onClick={() => setOpen(false)}
      className="px-6 py-4 text-base font-medium text-[#3b2a23] hover:bg-[#f3e8da] transition"
    >
      Experience
    </a>

  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
