import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/scan.png" width="30px" alt="" />
              <span className="text-2xl font-bold">JuriScan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#FA812F] px-3 py-2 rounded-md text-md font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/analyze"
              className="text-gray-700 hover:text-[#FA812F] px-3 py-2 rounded-md text-md font-medium transition-colors"
            >
              Analyze Document
            </Link>
            <Link
              to="/history"
              className="text-gray-700 hover:text-[#FA812F] px-3 py-2 rounded-md text-md font-medium transition-colors"
            >
              History
            </Link>
            <button className="bg-[#FA812F] text-white px-4 py-2 rounded-md text-md font-medium hover:bg-[#e6731f] transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#FA812F] focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block text-gray-700 hover:text-[#FA812F] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/analyze"
              className="block text-gray-700 hover:text-[#FA812F] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Analyze Document
            </Link>
            <Link
              to="/history"
              className="block text-gray-700 hover:text-[#FA812F] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              History
            </Link>
            <button className="w-full text-left bg-[#FA812F] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#e6731f] transition-colors">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
