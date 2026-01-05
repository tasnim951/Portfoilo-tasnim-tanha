import { useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      
     
      <div className="mx-auto max-w-6xl px-6 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo  */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading-light dark:text-heading-dark">
            Tasnim Tanha<span className="text-primary">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 lg:gap-10 uppercase font-bold tracking-widest text-[12px] lg:text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative transition-all duration-300
                  hover:-translate-y-0.5
                  hover:text-gray-500 dark:hover:text-primary
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-primary
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <span className="material-icons text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                {isDark ? "light_mode" : "brightness_4"}
              </span>
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className="material-icons text-lg text-gray-600 dark:text-gray-300">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-4 flex flex-col gap-5 text-center uppercase font-bold tracking-widest text-xs">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
