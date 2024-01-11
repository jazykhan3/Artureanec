import { Carousel } from "react-responsive-carousel";
import rightArrow from "../Assets/right-arrow.svg";
import leftArrow from "../Assets/left-arrow.svg";
import rating from "../Assets/stars-icon.svg";
import twitter from "../Assets/twitter.svg";
import fb from "../Assets/fb.svg";
import li from "../Assets/li.svg";
import insta from "../Assets/insta.svg";
import bg from "../Assets/footer-bg.svg";
import logo from "../Assets/logo.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonial = ({ text }) => (
  <div className="px-12 md:px-20">
    <p className="text-[#666] fontQuicksand text-sm md:text-[25px] leading-normal text-center">
      {text}
    </p>
  </div>
);

function Footer() {
  const socialIcons = [twitter, li, insta, fb];

  return (
    <>
      <div className="bg-[#DDDAD2] flex flex-col gap-16 justify-center items-center px-4 sm:px-6 md:px-8 lg:px-24 pt-40">
        <div className="absolute flex justify-start items-start w-full mt-[-200px]">
          <img src={bg} alt="_bg" />
        </div>
        <div className="flex gap-6 justify-between items-center border border-[#2E4630] rounded-[20px] shadow-md px-5 pb-4">
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-[#2E4630] fontAbril text-xl md:text-[40px] font-medium leading-normal px-4 mt-[-16px] md:mt-[-34px] bg-[#DDDAD2] sm:px-5 text-center">
              What Our Clients Say
            </p>
            <Carousel className="w-[300px] my-[-20px] md:my-0 sm:w-[580px] md:w-[728px] lg:w-[950px] xl:w-auto">
              <Testimonial text="1 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
              <Testimonial text="2 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
              <Testimonial text="3 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            </Carousel>
            <img src={rating} alt="_rating" />
            <p className="tetx-[#232323] fontQuicksand text-sm md:text-[20px] leading-normal font-medium">
              Kathryn Murphy
            </p>
          </div>
        </div>
        <div className="border-t border-[#2E4630]  flex flex-col justify-between  pt-3 pb-6 w-full">
          <div className="flex gap-2 justify-between mb-3">
            <img
              className="rounded-full w-[45px] h-[46px]"
              src={logo}
              alt="_logo"
            />
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {socialIcons.map((icon, index) => (
                <img
                  key={index}
                  className="cursor-pointer"
                  src={icon}
                  alt={`_${index}`}
                />
              ))}
            </div>
          </div>
          <p className=" md:hidden  text-[#666] fontManrope text-xs leading-normal">
            2023 Massage. All rights <br/> reserved by Artureanec
          </p>
          <p className="hidden md:block text-[#666] fontManrope text-xs leading-normal">
            2023 Massage. All rights reserved by Artureanec
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
