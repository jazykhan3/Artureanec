import { useState ,useEffect} from "react";
import logo from "../Assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";

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
const navigate = useNavigate()
  const handleMenuItemClick = (id) => {
    // Save the current id to local storage
    localStorage.setItem("currentId", id);
    // Navigate to home
    navigate("/");
    setMenuOpen(false);
  };
  const storedId = localStorage.getItem("currentId");

  useEffect(() => {
 
    // Scroll to the reference set in local storage
setTimeout(()=>{    if (storedId) {
  const element = document.getElementById(storedId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}},100)
  }, [JSON.stringify(storedId)]);
  const sections = [
    { id: "heroSection", label: "Home" },
    { id: "servicesSection", label: "Services" },
    { id: "productsSection", label: "Events" },
    { id: "aboutSection", label: "About" },
    { id: "inTouchSection", label: "Contact" },
  ];
  
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

        {sections.map((section) => (
          <span
            key={section.id}
            onClick={() => handleMenuItemClick(section.id)}
            className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
          >
            {section.label}
          </span>
        ))}
        </div>
        <button className=" cursor-pointer z-10 hidden md:flex text-white text-lg font-quicksand leading-normal bg-[#2E4630] rounded-tr-[30px] rounded-bl-[30px] py-4 px-6">
          Book Now
        </button>

        {menuOpen && (
  <div className="z-[100]  flex md:justify-end items-center top-[7%] md:top-[0px] md:left-[0px] absolute left-[7%]  w-full md:mt-[264px] md:ml-[-36px]">
    <div className="flex rounded-[12px] bg-white p-4 gap-2 flex flex-col shadow-md">
      {sections.map((section) => (
        <p
          key={section.id}
          onClick={() => handleMenuItemClick(section.id)}
          className="cursor-pointer text-[#333] text-lg font-quicksand leading-normal"
        >
          {section.label}
        </p>
      ))}
    </div>
  </div>
)}
      </div>
    </>
  );
}

export default Navbar;
