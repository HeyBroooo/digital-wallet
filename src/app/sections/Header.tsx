import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { HomeIcon, ChevronDown, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import close from "../public/images/close.svg"
import magic from "../public/images/magic.svg"
import wallet from "../public/images/wallet.svg"


const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    const handleClickOutside = (event : any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const NavLink = ({ title, isSection }: { title: string; isSection?: boolean }) => (
    <span
      onClick={() => {
        if (isSection) {
          const element = document.getElementById(
            title.toLowerCase().replace(/\s+/g, "-")
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
        setIsOpen(false);
      }}
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </span>
  );

  const goHome = () => {
    window.location.href = "/";
  };

  const GoLogin = () => {
    window.location.href = "/login";
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <Image src={wallet} width={50} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li relative flex items-center">
                  <HomeIcon onClick={goHome} className="cursor-pointer" />
                  <div ref={dropdownRef} className="relative inline-block">
                    <div className="flex items-center">
                      <a href="/businesses">
                        <NavLink title="Businesses" isSection={undefined} />
                      </a>
                      <button
                        className="ml-2 p-1 rounded-full hover:bg-gray-700/50 focus:outline-none transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                      >
                        <ChevronDown
                          className={clsx(
                            "w-4 h-4 transition-transform duration-200",
                            isDropdownOpen && "transform rotate-180"
                          )}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-48 bg-black-100 shadow-lg rounded-lg z-50 border border-gray-700 backdrop-blur-md"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                        >
                          <div className="py-1">
                            <a
                              href="/buy-sell"
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-700/50 transition-colors"
                            >
                              Buy and Sell Crypto
                            </a>
                            <a
                              href="/custody"
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-700/50 transition-colors"
                            >
                              Custody
                            </a>
                            <a
                              href="/gateway"
                              className="block px-4 py-2 text-sm text-white hover:bg-gray-700/50 transition-colors"
                            >
                              Crypto Gateway
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="dot" />
                  <a href="/individuals">
                    <NavLink title="Individuals" isSection={undefined} />
                  </a>
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <Image
                      src={wallet}
                      width={50}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <a href="/about">
                    <NavLink title="About us" isSection={undefined} />
                  </a>
                  <div className="dot" />
                  <a href="/learn">
                    <NavLink title="Learn" isSection={undefined} />
                  </a>

                  <button
      className="relative overflow-hidden group bg-transparent border border-gray-700 rounded-full px-6 py-2 ml-4 text-sm 
                 transition-all duration-300 ease-in-out
                 hover:border-blue-500  hover:shadow-lg hover:shadow-blue-500/20
                 active:scale-95 flex items-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={GoLogin}
    >
      <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out" />
      
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 bg-blue-500/20 blur-md -z-10" />
      
      <div className="relative flex items-center gap-2">
        <LogIn className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} />
        <span className="font-medium">Login</span>
      </div>
      
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-full animate-ping bg-blue-500/20" />
      </div>
    </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Image
            src={isOpen ? close : magic}
            alt="magic"
            width={20}
            height={20}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
