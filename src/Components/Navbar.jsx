import { useState } from "react";
import logo from "../Assets/logo.svg";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <div className="bg-[#DDDAD2] flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-24">
        <img className="z-[1] hidden md:block cursor-pointer" src={logo} alt="_logo" />
        <div className="flex md:hidden w-full justify-between items-center">
          <span className="flex items-center gap-3">
            {" "}
            <FiMenu
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer md:hidden text-black h-6 w-6"
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="click"
            />{" "}
            <img
              className="z-[1] md:hidden "
              src={logo}
              height={29}
              width={29}
              alt="_logo"
            />
          </span>{" "}
          <button className="flex cursor-pointer text-white text-xs font-normal font-quicksand leading-normal bg-[#2E4630] rounded-tr-[30px] rounded-bl-[30px] py-3 px-6">
            Book Now
          </button>
        </div>
        <div className="z-10 hidden md:flex justify-center items-center gap-12">
          <p
            onClick={() => scrollToSection("heroSection")}
            className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
          >
            Home
          </p>
          <p
            onClick={() => scrollToSection("aboutSection")}
            className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
          >
            About
          </p>
          <p
            onClick={() => scrollToSection("servicesSection")}
            className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
          >
            Services
          </p>
          <p
            onClick={() => scrollToSection("productsSection")}
            className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
          >
            Events
          </p>
          <p
            onClick={() => scrollToSection("inTouchSection")}
            className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
          >
            Contact
          </p>
        </div>
        <button className=" cursor-pointer z-10 hidden md:flex text-white text-lg font-quicksand leading-normal bg-[#2E4630] rounded-tr-[30px] rounded-bl-[30px] py-4 px-6">
          Book Now
        </button>

        {menuOpen && (
          <div className="z-[100]  flex md:justify-end items-center top-[7%] md:top-[0px] md:left-[0px] absolute left-[7%]  w-full md:mt-[264px] md:ml-[-36px]">
            <div className="flex rounded-[12px] bg-white p-4 gap-2 flex flex-col shadow-md">
              <p
                onClick={() => scrollToSection("heroSection")}
                className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
              >
                Home
              </p>
              <p
                onClick={() => scrollToSection("aboutSection")}
                className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
              >
                About
              </p>
              <p
                onClick={() => scrollToSection("servicesSection")}
                className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
              >
                Services
              </p>
              <p
                onClick={() => scrollToSection("productsSection")}
                className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
              >
                Events
              </p>
              <p
                onClick={() => scrollToSection("inTouchSection")}
                className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
              >
                Contact
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
