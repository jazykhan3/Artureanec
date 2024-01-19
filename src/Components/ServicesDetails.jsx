// ServiceDetail.jsx

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import serviceImg1 from "../Assets/service-img-1.png";
import serviceImg2 from "../Assets/service-img-2.png";
import serviceImg3 from "../Assets/service-img-3.png";
import serviceImg4 from "../Assets/service-img-4.png";
import serviceImg6 from "../Assets/service-img-6.png";
import { FiArrowLeft } from "react-icons/fi";
function ServiceDetail() {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const handleMenuItemClick = (id) => {
    // Save the current id to local storage
    localStorage.setItem("currentId", id);
    // Navigate to home
    navigate("/");
  };
  useEffect(()=>{      window.scrollTo(0, 0);
  },[])
  const serviceList = [
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
  const selectedService = serviceList.find(
    (service) => service.heading.toLowerCase().replace(/\s+/g, "-") === serviceId
  );

  if (!selectedService) {
    return <div>Service not found</div>;
  }

  return (
<div className="bg-[#fefbf0]">    <div className="flex items-center mx-10 pt-6 gap-2 font-bold cursor-pointer"           onClick={() => handleMenuItemClick("servicesSection")}
><FiArrowLeft className="font-bold text-xl" /> Back</div><div className="px-10 py-6 md:p-40 flex flex-col md:flex-row gap-[20px] bg-[#fefbf0] items-start">
            <img src={selectedService.img} alt={selectedService.heading} />

<span className="flex flex-col w-100 md:w-[40%]"><p className="text-base font-normal text-[#9BA858]">WE ARE EXPERTS</p>      <h2 className="text-base font-normal md:font-bold my-6  md:text-5xl text-[#FF8300]">{selectedService.heading}</h2>
      <p className="text-sm md:text-base text-[#ffbf99] my-4">{selectedService.description}</p>
      <p className="text-base font-normal text-[#9BA858] mt-5">LEARN MORE</p>       </span>
    </div></div>
  );
}

export default ServiceDetail;
