import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

function Header() {
  let Links = [
    { name: "Home", link: "#home" },
    { name: "About me", link: "#aboutme" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  let [showCross, setShowCross] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      setTimeout(() => setShowCross(true), 350);
    } else {
      setShowCross(false);
    }
  };

  const closeMenu = () => {
    setOpen(false);
    setShowCross(false);
  };

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      closeMenu();
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="relative mx-auto max-w-full px-4 py-8 md:px-5 lg:px-16">
        <div className="items-center justify-between md:flex">
          <h2
            onClick={() => scrollToSection("#home")}
            className="cursor-pointer text-xl font-bold duration-500 hover:text-gray-400 md:text-2xl"
          >
            markomicic.com
          </h2>
          <div
            onClick={handleClick}
            className="absolute right-8 top-8 cursor-pointer text-3xl md:hidden"
          >
            {showCross ? (
              <RxCross2 className="duration-500 hover:text-gray-400" />
            ) : (
              <RxHamburgerMenu className="duration-500 hover:text-gray-400" />
            )}
          </div>
          <ul
            className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              open
                ? "top-20 opacity-100"
                : "top-[-490px] opacity-0 md:opacity-100"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="my-7 text-center text-xl md:my-0 md:ml-8"
              >
                <a
                  href={link.link}
                  className="border-b-2 border-transparent text-xl text-gray-950 duration-500 hover:border-gray-400 hover:text-gray-400"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.link);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
