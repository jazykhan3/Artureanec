import React, { useState } from "react";
import emailjs from "emailjs-com";
import phoneIcon from "../Assets/phone-icon.svg";
import locationIcon from "../Assets/location-icon.svg";
import mailIcon from "../Assets/mail-icon.svg";
import bg1 from "../Assets/touch-bg-1.svg";
import bg2 from "../Assets/touch-bg-2.svg";
import bg3 from "../Assets/touch-bg-3.svg";
import bg4 from "../Assets/touch-bg-4.svg";
import bg5 from "../Assets/touch-bg-5.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const sendEmail = () => {
    const userID = "Dnj-vts8njFl-GGau";
    const templateID = "template_vy3qry6";

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      to_name: "Danielbarenboim",
      message: formData.message,
    };

    return emailjs.send("service_utv8hcv", templateID, templateParams, userID);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await sendEmail();
      toast.success("Mail sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Email could not be sent:", error);
    }
  };


  return (
    <>
    <ToastContainer />
      <div id="inTouchSection" className="flex justify-center items-center py-10 y md:py-40 px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="absolute flex justify-between w-full mt-[-1431px] lg:mt-[-714px]">
          <img className="opacity-[0.9]" src={bg1} alt="_bg" />
          <img className="hidden sm:block opacity-[0.3] z-[-1]" src={bg3} alt="_bg" />
        </div>
        <div className="flex flex-col relative w-[90%]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[70%] bg-[#EDEBE4] pb-[10rem] md:pb-0 rounded-[20px] lg:rounded-tr-[0px] lg:rounded-br-[0px] flex flex-col gap-16 p-3 md:p-20 lg:pr-[200px] xl:pr-[300px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <p className="text-[#232323] text-2xl md:text-[47px] fontAbril font-medium leading-normal ">
                    Get in <span className="text-[#2E4630]">Touch</span>
                  </p>
                  <p className="text-[#666] fontQuicksand leading-normal text-sm md:text-lg">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="z-10 border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}                  />
                                {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

                  <input
                    type="email"
                    placeholder="Email"
                    className="z-10 border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}                     />
                                {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

                  <input
                    type="tel"
                    placeholder="Phone number*"
                    className=" z-10 border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent"
                    onChange={handleChange}
                    name="phone"
                    value={formData.phone}                   

                  />
                              {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

                  <textarea
                    placeholder="Message"
                    className="z-10 border border-[#DFD8CA] rounded-[10px] py-3 px-4 bg-transparent h-[152px]"
                    onChange={handleChange}
                    name="message"
                    value={formData.message}                    

                  />
                              {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}

                  <button
                    onClick={handleSubmit}
                    className="z-10 rounded-full cursor-pointer text-white bg-[#2E4630] p-3 fontQuicksand text-xs md:text-sm leading-normal hover:shadow-md cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div className="flex gap-1 md:gap-10 justify-start flex-wrap items-center pb-20 ">
                <div className="flex gap-3 justify-start items-center">
                  <img src={phoneIcon} className="md:hidden" width={16} height={16} alt="_phone" />
                  <img src={phoneIcon} className="hidden md:block" alt="_phone" />
                  <div className="fex flex-col gap-1">
                    <p className="fontMont font-medium text-[9px] md:text-sm leading-normal text-[#2E4630]">
                      Phone
                    </p>
                    <p className="fontMont text-[9px] md:text-sm leading-normal text-[#666]">
                      03 5432 1234
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={locationIcon} className="md:hidden" width={16} height={16} alt="_location" />
                  <img src={locationIcon} className="hidden md:block" alt="_location" />
                  <div className="fex flex-col gap-1">
                    <p className="fontMont font-medium text-[9px] md:text-sm leading-normal text-[#2E4630]">
                      Location
                    </p>
                    <p className="fontMont text-[9px] md:text-sm leading-normal text-[#666]">
                      03 5432 1234
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={mailIcon} className="md:hidden" width={16} height={16} alt="_email" />
                  <img src={mailIcon} className="hidden md:block" alt="_email" />
                  <div className="fex flex-col gap-1">
                    <p className="fontMont font-medium text-[9px] md:text-sm leading-normal text-[#2E4630]">
                      Email
                    </p>
                    <p className="fontMont text-[9px] md:text-sm leading-normal text-[#666]">
                      info@marcc.com.au
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[30%]  bg-[#2E4630] rounded-bl-[20px] rounded-br-[20px] lg:rounded-tl-[0px] lg:rounded-bl-[0px] flex justify-center items-center py-20 md:py-80 lg:py-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.1350832140897!2d-80.31032752424937!3d25.89792947726656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bace5dbdcf2b%3A0x50c19a70c7e5f119!2s8275%20W%2012th%20Ave%2C%20Hialeah%2C%20FL%2033014%2C%20USA!5e0!3m2!1sen!2s!4v1703827886302!5m2!1sen!2s"
                width="336px"
                height="280px"
                style={{ border: 0, borderRadius: 10, position: "absolute", maxWidth: "404px", top: "70%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="md:hidden"
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.1350832140897!2d-80.31032752424937!3d25.89792947726656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bace5dbdcf2b%3A0x50c19a70c7e5f119!2s8275%20W%2012th%20Ave%2C%20Hialeah%2C%20FL%2033014%2C%20USA!5e0!3m2!1sen!2s!4v1703827886302!5m2!1sen!2s"
                width="100%"
                height="519"
                style={{ border: 0, borderRadius: 10, position: "absolute", maxWidth: "404px" }}
                className="hidden md:block lg:left-[55%]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[-325px]">
            <img className="opacity-[0.3] w-[185px] h-[322px]" src={bg5} alt="_bg" />
          </div>
        </div>
        <div className="absolute flex justify-between w-full mt-[540px]">
          <img className="opacity-[0.3] z-[-1]" src={bg2} alt="_bg" />
          <img className="hidden sm:block opacity-[0.9]" src={bg4} alt="_bg" />
        </div>
      </div>
    </>
  );
}

export default InTouch;
