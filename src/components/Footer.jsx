export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400 tracking-wide text-center md:text-left">
            © 2025{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              Tasnim Akther Tanha
            </span>
            . All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/tasnimtanha20"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>

            <a
              href="https://github.com/tasnim951"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-400 hover:text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <i className="fab fa-github text-xl"></i>
            </a>

            <a
              href="https://www.facebook.com/share/1CoZeZ3jZY/"
              target="_blank"
              aria-label="Facebook"
              className="text-gray-400 hover:text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
