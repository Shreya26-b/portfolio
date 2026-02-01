import { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-16 px-[5%] flex items-center justify-between bg-[#C2A889] z-50">
      {/* LEFT */}
      <div>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#home" className="cursor-pointer font-bold text-[#FFFFFF]">
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
        <button className="px-4 py-2 rounded-full border border-[#7a5c4b] bg-white hover:bg-[#f3e8da] transition">
          <p className="font-bold text-[#3b2f2f]">Contact Me</p>
        </button>

        {/* Mobile Menu Button */}
        <button className="sm:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute right-0 top-12 w-40 bg-[#FAF1E3] rounded-xl shadow-lg flex flex-col overflow-hidden sm:hidden">
            <span>
              <a
                href="#skills"
                className="px-4 py-3 cursor-pointer hover:bg-black/5"
              >
                About Me
              </a>
            </span>
            <span>
              <a
                href="#projects"
                className="px-4 py-3 cursor-pointer hover:bg-black/5"
              >
                Projects
              </a>
            </span>

            <span>
              <a
                href="#experience"
                className="px-4 py-3 cursor-pointer hover:bg-black/5"
              >
                Experience
              </a>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
