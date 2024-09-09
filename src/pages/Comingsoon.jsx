import React from "react";
import { Link } from "react-router-dom";
import instagram from "../images/allsvg/instagram (4).webp";
import linkedIn from "../images/allsvg/linkedin (2).webp";
import twitter from "../images/allsvg/twitter.webp";
import Contact from "../images/allsvg/menu icon.webp";
import banners from '../images/allsvg/Group 34.webp';
import banner2 from "../images/allsvg/Frame1.webp";
import Tnent from "../images/allsvg/TNENNT.webp";
import AnimatedCounter from "./Animatedcounter.jsx"
import fb from '../images/allsvg/facebook (2).webp';
import { useState, useEffect } from "react";
import "animate.css";
import "./style.css";

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-07-16T00:00:00'); // Set your target date here

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
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
         {timeRemaining.days} {timeRemaining.days === 1 ? "day" : "days"}{' '}remaining...
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
          className="marqu"
          style={{
            backgroundSize: "contain",
            position: "absolute",
            top: 310,
            left: 0,
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            src={Tnent}
            alt="Tennent Logo"
            style={{ width: "550px", maxWidth: "200%", height: "auto" }}
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
<div className="lg:hidden">
      <div className="flex absolute top-5 left-6 gap-7">
        <div className="flex flex-col">
        <h2 className="text-xl font-extrabold text-[#094446]">
          <AnimatedCounter from={0} to={52} />
          </h2>
          <h3 className="text-[15px]">
            Total <span className="text-green-500">&bull;</span>
          </h3>
          <h3 className="text-[15px]">Tnent Store</h3>
        </div>
        <div className="flex flex-col">
        <h2 className="text-xl font-extrabold text-[#094446]">
          0<AnimatedCounter from={0} to={2} />
          </h2>
          <h3 className="text-[15px]">
            Middleman <span className="text-green-500">&bull;</span>
          </h3>
          <h3 className="text-[15px]">Strength</h3>
        </div>
      </div>
      </div>
      <a href="mailto:abc@gmail.com" target="_blank" className="mt-7 relative cursor-pointer flex justify-end right-6 ">
        <div className="relative animate__animated animate__fadeIn animate__slow">
          <img src={Contact} alt="" className="lg:w-44 w-36" />
          <p className=" absolute top-3 lg:left-0 left-3 right-14 text-center lg:text-[16px] text-[13px] text-white">
            Contact us
          </p>
        </div>
      </a>
      
      

      <div className="mt-7 ml-5 lg:ml-14">
        <h1 className="text-[6.4vw] lg:text-[40px] lg:mt-[-20px] mt-20 leading-tight font-extrabold animate__animated animate__fadeInLeft">
          YOUR EVERYDAY
          <br /> NEARBY STORE AT YOUR <br />
          FINGERTIPS
        </h1>
        <p className="mt-2 text-[#444444] animate__animated animate__fadeInLeft text-[3.4vw] lg:text-[25px]">
          Clothing, Electronics, Accessories, Books & More
        </p>
      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden lg:mt-28 mt-64 ml-[18vw] animate__animated animate__fadeInDown">
        <button className="bg-[#094446] px-7 py-2 text-white rounded-md cursor-pointer ">
          Coming Soon...
        </button>
        <Countdown />
      </div>

      <div className="lg:hidden fixed top-1/2 left-1/2 transform mt-44 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center">
          <button className="bg-[#094446] px-7 py-2 text-white rounded-md cursor-pointer mb-4 text-[3.5vw]">
            Coming Soon...
          </button>
          <div className="flex flex-col items-center justify-center mt-[-10px] text-[3.7vw]">
            <Countdown />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="fixed bottom-0 left-10 w-full py-4 px-6  hidden lg:block">
          <h2 className="text-2xl font-extrabold text-[#094446]">
          <AnimatedCounter from={0} to={52} />
          </h2>
          <h3 className="">
            Total <span className="text-green-500">&bull;</span>
            <br /> Tnent store
          </h3>
        </div>

        <div className="fixed bottom-0 left-72 w-full py-4 px-6 hidden lg:block">
          <h2 className="text-2xl font-extrabold text-[#094446]">0
          <AnimatedCounter from={0} to={2} />
          </h2>
          <h3 className="">
            Middleman <span className="text-green-500">&bull;</span>
            <br /> Strength
          </h3>
        </div>

        <div className="flex">
          <div className="fixed bottom-3 right-3 lg:right-64 hidden lg:block py-4 px-6">
            <h3 className="text-center lg:text-[#968a8a] ">
              Follow on socials to <br /> stay updated
            </h3>
          </div>

          <div className="fixed lg:hidden inset-x-0 bottom-3 py-4 px-6 flex justify-center">
            <div className="mt-[-90px] py-2 px-4 rounded-lg ">
              <h3 className="text-center text-[3.6vw]">Follow on socials to stay updated</h3>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex gap-5 fixed bottom-9 lg:right-16">
              <a href="https://www.facebook.com/profile.php?id=61560635516557&mibextid=ZbWKwL"  target="blank"><img src={fb} alt="" /></a>
              <a href="https://www.instagram.com/tnenntstore?igsh=MXZoeDQ5NXVxdjJqYg==" target="blank"><img src={instagram} className="" alt="Instagram"></img></a>
              <a href="https://x.com/tnenntstore?s=09" target="blank"><img src={twitter} className="" alt="Twitter"></img></a>
            </div>
          </div>

          <div className="flex justify-center gap-5 fixed bottom-9 lg:hidden left-1/2 transform -translate-x-1/2">
          <a href="https://www.facebook.com/profile.php?id=61560635516557&mibextid=ZbWKwL"  target="blank"><img src={fb} alt="" /></a>
          <a href="https://www.instagram.com/tnenntstore?igsh=MXZoeDQ5NXVxdjJqYg==" target="blank"><img src={instagram} className="" alt="Instagram"></img></a>
            <a href="https://x.com/tnenntstore?s=09" target="blank"><img src={twitter} className="" alt="Twitter"></img></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;
