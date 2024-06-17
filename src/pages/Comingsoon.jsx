import React from "react";
import instagram from "../images/instagram (4).png";
import linkedIn from "../images/linkedin (2).png";
import twitter from "../images/twitter.png";
import Contact from "../images/menu icon.png";
import banners from "../images/Group 1.svg";
import banner2 from "../images/Frame1.svg";
import Tnennt from "../images/TNENNT.svg";
import { useState, useEffect } from "react";
import "animate.css";
import "./style.css";

const Countdown = () => {
  const [daysRemaining, setDaysRemaining] = useState(30);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setDaysRemaining((prevDays) => prevDays - 1);
    }, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <p className="mt-2 ml-2 text-[#858585]">
      {daysRemaining} {daysRemaining === 1 ? "day" : "days"} remaining...
    </p>
  );
};

const Comingsoon = () => {
  return (
    <>
      <div
        className="comingsoon-container lg:m-20 hidden lg:block"
        style={{
          position: "absolute",
          top: 100,
          left: -20,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundImage: `url(${banners})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          minHeight: "50%",
          minWidth: "90%",
        }}
      ></div>

      <div style={{ position: "relative" }} className="lg:hidden">
        <marquee
          behavior="scroll"
          direction="left"
          style={{
            backgroundSize: "contain",
            position: "absolute",
            top: 300,
            left: 0,
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            src={Tnennt}
            alt="Tennent Logo"
            style={{ width: "900px", maxWidth: "200%", height: "auto" }}
          />
        </marquee>

        <div
          className="comingsoon-container lg:m-5 lg:hidden"
          style={{
            position: "absolute",
            top: 200,
            left: 100,
            right: 0,
            bottom: 0,
            zIndex: -1,
            backgroundImage: `url(${banner2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            minHeight: "50vh",
            minWidth: 0,
          }}
        ></div>
      </div>

      <div className="mt-7 relative cursor-pointer flex justify-end right-6">
        <div className="relative">
          <img src={Contact} alt="" className="w-44" />
          <p className="absolute top-3 left-0 right-14 text-center text-[16px] text-white">
            Contact us
          </p>
        </div>
      </div>

      <div className="mt-5 ml-5 lg:ml-14">
        <h1 className="text-[30px] lg:text-[40px] lg:mt-[-20px] mt-14 leading-tight font-extrabold animate__animated animate__fadeInUp animate__slow">
          YOUR EVERYDAY
          <br /> NEARBY STORE AT YOUR <br />
          FINGERTIPS
        </h1>
        <p className="mt-3 text-[#444444]">
          Clothing, Electronics, Accessories, Books & More
        </p>
      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden lg:mt-36 mt-64 ml-[25vw]">
        <button className="bg-[#094446] px-7 py-2 text-white rounded-md cursor-pointer">
          Coming Soon...
        </button>
        <Countdown />
      </div>

      <div className="lg:hidden fixed top-1/2 left-1/2 transform mt-44 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center">
          <button className="bg-[#094446] px-7 py-2 text-white rounded-md cursor-pointer mb-4">
            Coming Soon...
          </button>
          <div className="flex flex-col items-center justify-center mt-[-10px]">
            <Countdown />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="fixed bottom-0 left-10 w-full py-4 px-6 bg-white hidden lg:block">
          <h2 className="text-2xl font-extrabold text-[#094446]">50</h2>
          <h3 className="">
            Total <span className="text-green-500">&bull;</span>
            <br /> Tenant
          </h3>
        </div>

        <div className="fixed bottom-0 left-72 w-full py-4 px-6 hidden lg:block bg-white">
          <h2 className="text-2xl font-extrabold text-[#094446]">02</h2>
          <h3 className="">
            Middleman <span className="text-green-500">&bull;</span>
            <br /> Strength
          </h3>
        </div>

        <div className="flex">
          <div className="fixed bottom-3 right-3 lg:right-64 hidden lg:block py-4 px-6">
            <h3 className="text-center lg:text-[#968a8a]">
              Follow on socials to <br /> stay updated
            </h3>
          </div>

          <div className="fixed lg:hidden inset-x-0 bottom-3 py-4 px-6 flex justify-center">
            <div className="mt-[-90px] py-2 px-4 rounded-lg ">
              <h3 className="text-center">Follow on socials to stay updated</h3>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex gap-5 fixed bottom-9 lg:right-16">
              <img src={instagram} className="" alt="Instagram"></img>
              <img src={linkedIn} className="" alt="LinkedIn"></img>
              <img src={twitter} className="" alt="Twitter"></img>
            </div>
          </div>

          <div className="flex justify-center gap-5 fixed bottom-9 lg:hidden left-1/2 transform -translate-x-1/2">
            <img src={instagram} className="" alt="Instagram"></img>
            <img src={linkedIn} className="" alt="LinkedIn"></img>
            <img src={twitter} className="" alt="Twitter"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;
