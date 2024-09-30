import { logo } from "../assets/images";
import { navLinks } from "../constants";
import { menu } from "../assets/images/index";
import { cross } from "../assets/icons/index";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} alt="logo" width={50} height={50} />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 font-mono max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono leading-normal text-lg text-slate-500 hover:text-slate-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div
          className="hidden cursor-pointer hover:scale-110 max-lg:block"
          onClick={handleMenuToggle}
        >
          <img
            src={isMenuOpen ? cross : menu}
            alt={isMenuOpen ? "close_menu" : "hamburger_menu"}
            width={35}
            height={35}
          />
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`absolute top-[85px] right-0 w-full shadow-[0px_0px_10px_rgba(100,100,100,0.4)] flex items-center justify-center gap-[14px] py-8 lg:hidden z-10
          transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          {navLinks.map((item, index) => (
            <li
              key={item.label}
              className="flex justify-between items-center gap-[7px]"
            >
              <a
                href={item.href}
                className="leading-normal p-1 text-sm text-slate-500 hover:text-slate-300"
                onClick={() => setisMenuOpen(false)} // Closes menu on link click
              >
                {item.label}
              </a>

              {/* Render vertical divider if not the last item */}
              {index < navLinks.length - 1 && (
                <div className="w-[1px] h-3 bg-white"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
