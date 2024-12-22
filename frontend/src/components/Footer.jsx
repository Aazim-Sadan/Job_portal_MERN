import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.326V22.67c0 .73.592 1.324 1.324 1.324h11.495V14.91h-3.13v-3.662h3.13V8.41c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.465.098 2.797.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.312h3.588l-.467 3.662h-3.121V24H22.67c.73 0 1.324-.593 1.324-1.324V1.326C24 .592 23.406 0 22.676 0z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.93 4.93 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482 13.942 13.942 0 01-10.125-5.144 4.917 4.917 0 001.523 6.574A4.902 4.902 0 01.964 9.72v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.539a13.94 13.94 0 007.548 2.213c9.057 0 14.01-7.506 14.01-14.01 0-.213-.004-.425-.013-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.568c0-1.327-.027-3.036-1.851-3.036-1.853 0-2.135 1.445-2.135 2.943v5.661h-3.553V9h3.413v1.561h.048c.475-.9 1.637-1.851 3.368-1.851 3.602 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.064 2.064 0 11-.001-4.129 2.064 2.064 0 01.001 4.129zM7.119 20.452H3.554V9h3.565v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
