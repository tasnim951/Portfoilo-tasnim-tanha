export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6 lg:px-20 py-10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Copyright */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                        © 2025 <span className="font-semibold text-gray-700 dark:text-gray-200">
                            
                        </span>. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6 text-gray-400">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/tasnimtanha20" target="_blank" className="hover:text-primary transition" aria-label="LinkedIn">
                            <i className="fab fa-linkedin fa-lg"></i>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/tasnim951" target="_blank" className="hover:text-primary transition" aria-label="GitHub">
                            <i className="fab fa-github fa-lg"></i>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/share/1CoZeZ3jZY/" target="_blank" className="hover:text-primary transition" aria-label="Facebook">
                            <i className="fab fa-facebook fa-lg"></i>
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}
