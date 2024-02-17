import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Transition from "../components/globals/Transition";

export default function Weird() {
  const tl = useRef(null);
  const tl2 = useRef(null);
  const tl3 = useRef(null);
  const sectionweird = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl2.current = gsap.timeline();
    tl3.current = gsap.timeline();

    tl.current.from(".sectionweird", 3, {
      y: "100%",
      delay: 0.3,
      ease: "power4.inOut",
    });
    tl2.current.from(
      ".showtime",
      1.5,
      {
        delay: 3,
        opacity: 0,
      },
      "-=0.5"
    );
    tl3.current.from(".trust", 0.5, {
      y: "100%",
      opacity: 0,
      delay: 3,
    });
  });
  return (
    <>
      <Transition pagename="Yes" />
      <section className="pt-20 h-[100svh] sectionweird" ref={sectionweird}>
        <div className="flex flex-col items-center justify-center">
          <p className="roboto uppercase leading-[90%]">let's say</p>
          <h1 className="text-[8.125rem] leading-[122px]">
            <span>Y</span>
            <span className="arflex">E</span>
            <span>S</span>
          </h1>
        </div>

        <div className="">
          <div className="flex gap-[18px] items-center justify-center object-contain">
            <img
              src="Frame 101.png"
              alt=""
              className="w-[253.74px] h-[320.5px] object-contain"
            />
            <img src="yes-1.png" alt="" className="w-[254px] h-[327px]" />
            <img
              src="Frame 102.png"
              alt=""
              className="w-[253.74px] h-[323.65px] object-contain"
            />
          </div>
        </div>
        <div className="pt-[52px] showtime">
          <p className="text-center uppercase roboto">Its showtime</p>
          <p className="text-center uppercase roboto">babe</p>
        </div>

        <div className="flex items-center justify-center pt-5 trust">
          <Link
            to={"/weird"}
            className="rounded-[24px] bg-[#1A1A1A] flex justify-center items-center text-center font-bold uppercase px-6 py-4 text-white w-[285px]"
          >
            {" "}
            TRUST
          </Link>
        </div>
      </section>
    </>
  );
}
