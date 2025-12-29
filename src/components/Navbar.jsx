import { useState } from 'react';

export default function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        return document.documentElement.classList.contains('dark');
    });

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
                <div className="flex justify-between h-16 items-center">
                    
                    {/* Logo */}
                    <div className="text-2xl font-bold text-heading-light dark:text-heading-dark">
                        Tasnim Akther Tanha<span className="text-primary">.</span>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex space-x-8 uppercase font-bold tracking-widest text-xs">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
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

                    {/* Dark Mode Toggle */}
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        aria-label="Toggle Dark Mode"
                        onClick={toggleDarkMode}
                    >
                        <span className="material-icons text-gray-600 dark:text-gray-300">
                            {isDark ? 'light_mode' : 'brightness_4'}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
