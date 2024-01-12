import lineBg from "../Assets/line-bg.svg";
import leaveBg1 from "../Assets/hero-leave-bg.svg";
import leaveBG2 from "../Assets/leave-bg-2.svg";
import bg from "../Assets/hero-bg.png";
import bgMobile from "../Assets/heroBgMobile.png";

function Hero() {
  return (
    <>
      <div
        id="heroSection"
        className="bg-[#DDDAD2] flex flex-col flex-col-reverse lg:flex-row gap-16 lg:gap-10 xl:gap-40 overflow-hidden pt-36 md:pt-40 mt-[-137px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${lineBg})` }}
      >
        <div className="absolute hidden md:flex w-full justify-end">
          <img
            className=" mb-[476px] lg:mb-0 md:mt-[-400px] xl:mt-[-350px] ml-[40px]"
            src={leaveBg1}
            alt="_leave"
          />
        </div>
        <div className="hidden absolute h-[100%] md:flex justify-end items-end mt-[81px]">
          <img
            className="mt-[478px] lg:mt-[558px]  ml-[512px]"
            src={leaveBG2}
            alt="_leave"
          />
        </div>
        <img className="z-[99] w-fit hidden md:block" src={bg} alt="_bg" />
        <div className="hidden md:flex flex-col gap-10 justify-center items-start z-[99] px-4 sm:px-6 lg:pr-32">
          <p className="max-w-[626px] text-[#2E4630] text-[70px] font-medium fontAbril">
            A Healthy Body Is A Guest-Chamber For The Soul
          </p>
          <button
            onClick={() => console.log("Get Your Appointment Clicked!")}
            className="flex  hover:shadow-md hover:bg-white hover:text-[#2E4630] text-white text-lg font-light font-quicksand leading-normal bg-[#2E4630] rounded-tr-[30px] rounded-bl-[30px] py-4 px-6"
          >
            get your appointment
          </button>
        </div>
        <div className="flex md:hidden  flex-row md:flex-col justify-start md:justify-center items-center md:items-start z-[99]  lg:pr-32">
          <img className="z-[99] w-fit  md:hidden" src={bgMobile} alt="_bg" />

          <span className="flex flex-col items-start mx-4 md:mx-0">
            {" "}
            <p className="max-w-[626px]  text-[#2E4630] text-2xl md:text-[70px] font-normal md:font-medium fontAbril">
              A Healthy Body Is A Guest-Chamber For The Soul
            </p>
            <button
              onClick={() => console.log("Get Your Appointment Clicked!")}
              className="flex mt-4   hover:shadow-md hover:bg-white hover:text-[#2E4630] text-white text-xs md:text-lg font-normal md:font-light font-quicksand leading-normal bg-[#2E4630] rounded-tr-[30px] rounded-bl-[30px] py-4 px-4 md:px-6"
            >
              get your appointment
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
