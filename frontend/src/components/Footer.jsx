import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">

            <a
            target='blank'
              href="https://github.com/Aazim-Sadan"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .296C5.373.296 0 5.671 0 12.296c0 5.292 3.438 9.774 8.205 11.364.6.11.82-.261.82-.577v-2.234c-3.338.724-4.042-1.414-4.042-1.414-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.807 1.306 3.492.998.108-.775.418-1.306.76-1.605-2.665-.302-5.467-1.332-5.467-5.93 0-1.31.467-2.381 1.236-3.222-.124-.303-.535-1.52.117-3.166 0 0 1.007-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.403c1.018.004 2.045.137 3.003.403 2.293-1.552 3.298-1.23 3.298-1.23.655 1.645.244 2.863.12 3.166.77.84 1.236 1.911 1.236 3.222 0 4.61-2.807 5.624-5.479 5.92.43.37.81 1.102.81 2.222v3.293c0 .319.219.694.825.576C20.565 22.066 24 17.588 24 12.296 24 5.671 18.627.296 12 .296z" />
              </svg>

            </a>

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

            <a
              target='blank'
              href="https://www.linkedin.com/in/aazim-sadan"
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
