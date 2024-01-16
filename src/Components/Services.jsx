import serviceIcon1 from "../Assets/service-icon-1.svg";
import serviceIcon2 from "../Assets/service-icon-2.svg";
import serviceIcon3 from "../Assets/service-icon-3.svg";
import serviceIcon4 from "../Assets/service-icon-4.svg";
import serviceBg from "../Assets/service-bg.svg";
import serviceImg1 from "../Assets/service-img-1.png";
import serviceImg2 from "../Assets/service-img-2.png";
import serviceImg3 from "../Assets/service-img-3.png";
import serviceImg4 from "../Assets/service-img-4.png";
import serviceImg6 from "../Assets/service-img-6.png";
import { useNavigate } from "react-router-dom";


function Services() {
  const navigate = useNavigate();

  const serviceIcon = [
    { name: "Face Treatments", img: serviceIcon1 },
    { name: "Detox Massage", img: serviceIcon2 },
    { name: "Foot Massage", img: serviceIcon3 },
    { name: "Candle Relaxing", img: serviceIcon4 },
  ];

  const serviceList1 = [
    {
      img: serviceImg1,
      heading: "Salt Massage",
      description:
        "Salt massage, also known as salt therapy or halotherapy, is a wellness practice that involves the use of salt, typically.....",
      green: false,
    },
    {
      img: serviceImg2,
      heading: "Body Care",
      description:
        "Body care refers to a comprehensive approach to maintaining the health and well-being of the skin and body. It involves .... ",
      green: true,
    },
    {
      img: serviceImg3,
      heading: "Face Treatment",
      description:
        "Face treatment encompasses a variety of skincare practices and products specifically designed to address and improve .....",
      green: false,
    },

    {
      img: serviceImg4,
      heading: "BlissfulBody Therapies",
      description:
        "Indulge in the blissful experience of BlissfulBody Therapies. Our expert practitioners tailor each massage to your needs,...",
      green: false,
    },
    {
      img: serviceImg1,
      heading: "RejuvaRelax Wellness",
      description:
        "Discover the epitome of relaxation at RejuvaRelax Wellness. Our wellness experts are dedicated to rejuvenating your body and mind .....",
      green: false,
    },
    {
      img: serviceImg6,
      heading: "SootheSphere Massage",
      description:
        "At SootheSphere, our skilled therapists are dedicated to creating a personalized experience tailored to your unique needs....",
      green: false,
    },
  ];
  const gradientStyle = {
    background: "linear-gradient(180deg, #785445 5.98%, #FFFFFF 33.99%)",
  };
  const textStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    WebkitLineClamp: 5, // Number of lines before applying ellipsis
  };
  return (
    <>
      <div
        style={gradientStyle}
        id="servicesSection"
        className="flex flex-col bg-white z-[1]"
      >
        <img
          className="hidden md:block absolute mt-[377px]"
          src={serviceBg}
          alt="_bg"
        />
        <div className="bg-transparent md:bg-[#785445] flex flex-row gap-4 lg:gap-[200px] justify-center px-3 md:px-24 py-3 md:py-6">
          {serviceIcon.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 md:gap-7 justify-center items-center"
            >
              <img
                src={item.img}
                width={37}
                className="md:hidden"
                alt="_service"
              />
              <img src={item.img} className="hidden md:block" alt="_service" />

              <p className="max-w-[150px] text-center text-medium text-white leading-normal fontMont text-sm md:text-[20px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-transparent md:bg-white  md:pt-40 px-3 sm:px-6 md:px-8 lg:px-24 flex flex-col gap-6 md:gap-16 justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center z-[1]">
            <div className="flex flex-col gap-2 md:gap-7 justify-center items-center">
              <p className="text-[#232323] fontQuicksand text-base md:text-2xl font-semi-bold md:font-medium leading-normal">
                Services
              </p>
              <p className="text-[#2E4630] px-9  md:px-0 font-normal text-2xl leading-normal max-w-[679px] fontAbril text-center">
                Take A Deep Breath And Just Enjoy Life
              </p>
            </div>
            <p className="text-[##666666]  px-6  md:px-0 text-sm md:text-lg leading-normal max-w-[743px] fontQuicksand text-center">
              Without making it feel so…. clinical. We believe in having your
              cake and eating it too, with clinically proven treatments,
              licensed and insured aestheticians, ambient lighting, heated beds,
            </p>
          </div>
          <div className="flex flex-row flex-wrap  md:flex-col gap-0 md:gap-20 justify-center items-center w-full">
            <div className="flex justify-between flex-wrap  flex-row  xl:flex-row gap-0  md:gap-10 w-full">
              {serviceList1.map((item, index) => (
                <div
                  key={index}
                  className="md:w-[325px] w-[10rem] mb-12  md:mb-0 flex flex-col justify-center items-center"
                >
                  <img
                    className="hidden md:block  w-[195px] h-[200px] md:w-[325px] md:h-[396px] rounded-md"
                    src={item.img}
                    alt="_service"
                  />
                  <img
                    className=" md:hidden w-[195px] h-[200px] md:w-[325px] md:h-[396px] rounded-md"
                    src={item.img}
                    width={200}
                    alt="_service"
                  />
                  <div className=" flex flex-col justify-center items-center w-[172px] md:w-[335px] h-[224px] mt-[-60px] md:mt-[-130px]">
                    <div
                      className={`flex flex-col gap-3 justify-center items-center 
                        bg-white text-black
                       rounded-md mx-3 px-2 md:px-5 py-3 md:py-6 pb-12`}
                    >
                      <p
                        className={`text-[#2E4630]
                          fontQuicksand text-base md:text-[20px] leading-normal`}
                      >
                        {item.heading}
                      </p>
                      <p
                        className={`
                         text-[#666]
                         fontQuicksand text-xs md:text-base md:mb-5 leading-normal text-center`}
                        style={textStyle}
                      >
                        {item.description}
                      </p>
                    </div>
                    <button
      onClick={() => navigate(`/services/${item.heading.toLowerCase().replace(/\s+/g, "-")}`)}
      className={`w-fit flex  text-white
                    text-base md:text-lg font-quicksand leading-normal
                         bg-[#2E4630]
                      rounded-tr-[30px] rounded-bl-[30px] py-2 md:py-4 px-3 md:px-6 mt-[-34px] hover:shadow-lg hover:font-bold`}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
