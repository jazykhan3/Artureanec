import aboutImg from "../Assets/about-img.svg";
import aboutBg1 from "../Assets/about-bg-1.svg";
import aboutBg2 from "../Assets/about-bg-2.svg";

function About() {
  return (
    <>
      <div id="aboutSection" className="flex flex-col lg:flex-row gap-20 md:gap-4 justify-center otems-center px-4 sm:px-6 md:px-8 lg:px-24 bg-[#785445]">
        <div className="absolute flex w-[96%] lg:w-full justify-between">
          <img
            className="mt-[-1311px] lg:mt-[-436px] opacity-[0.5]"
            src={aboutBg1}
            alt="_bg"
          />
          <img
            className="hidden sm:block mt-[321px]"
            src={aboutBg2}
            alt="_bg"
          />
        </div>
        <div className="lg:w-[50%] xl:w-auto flex flex-col gap-2 md:gap-6 pt-10 md:pt-32 z-[1]">
          <div className="flex flex-col gap-5">
            <p className="text-white fontQuicksand text-base md:text-2xl font-medium leading-normal">
              About Us
            </p>
            <p className="text-white fontAbril text-2xl md:text-[50px] font-medium leading-normal xl:max-w-[537px]">
              A Healthy Body Is A Guest-Chamber For The Soul
            </p>
            <p className="text-white text-sm md:text-base fontMont leading-normal">
              “Go On – Treat Yourself”
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-white text-sm md:text-base fontMont leading-normal max-w-[507px]">
              Beauty is finding confidence in your own skin, and we could not be
              more honored to help you along your journey. We’re a team of
              licensed professionals dedicated to making our clients feel safe,
              comfortable, and confident with the latest aesthetic treatments
              and procedures.
            </p>
            <button onClick={() => console.log("Book Now Clicked!")} className="w-fit flex text-[#1E1E1E] text-lg fontQuicksand leading-normal bg-white hover:font-bold hover:shadow-lg hover:text-white hover:bg-[#2E4630]  rounded-tl-[30px] rounded-br-[30px] py-4 px-6">
              Book Now
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] xl:w-auto z-[1]">
          <img className="pb-12 md:pb-24" src={aboutImg} alt="_about" />
        </div>
      </div>
    </>
  );
}

export default About;
