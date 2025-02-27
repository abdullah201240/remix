import { useState, useEffect, useRef } from "react";
import { Link } from "@remix-run/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        isDesktopDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)) {
        setIsDesktopDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopDropdownOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm shadow-md text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-between h-20">
          {/* Mobile and Tablet menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 hover:bg-[#E9BD8C] hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo/Branding */}
          <div className="flex items-center">
            <div className="grid-element relative w-32 h-16">
              <Link to="/" className="text-2xl font-semibold">
                <img
                  src="/images/logo.png"
                  alt="Ar Group"
                  height={60}
                  width={60}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-medium font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
                  isScrolled ? "text-white" : "text-white"
                }`}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/aboutUs"
                className={`px-3 py-2 text-medium font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Blog
              </Link>
              <Link
                to="/company"
                className={`px-3 py-2 text-medium font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/career"
                className={`px-3 py-2 text-medium font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/"
            className={`block px-3 py-2 text-base font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
              isScrolled ? "text-black" : "text-white"
            }`}
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to="/aboutUs"
            className={`block px-3 py-2 text-base font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/company"
            className={`block px-3 py-2 text-base font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Our Company
          </Link>
          <Link
            to="/career"
            className={`block px-3 py-2 text-base font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Career
          </Link>
          <Link
            to="/blog"
            className={`block px-3 py-2 text-base font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contactUs"
            className={`block px-3 py-2 text-base font-medium hover:bg-[#E9BD8C] hover:text-white rounded-md ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;