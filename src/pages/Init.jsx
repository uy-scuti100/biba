import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Init() {
  const tl = useRef(null);
  useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current
      .to(".header > h1", 2, {
        top: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.3,
        },
      })
      .to(".pre-loader-btn", 0.5, {
        opacity: 1,
        delay: 1,
        ease: "Expo.inOut",
      });
  });
  return (
    <section className="h-[100svh] pre-loader ">
      <div className="pre-loader-container">
        <div className="pre-loader-header">
          {/* 1 */}
          <div className="flex items-center justify-between gap-4 mx-5 header">
            <h1>Dignified</h1>
            <h1 data-text="strength">strength</h1>
            <h1> emanates</h1>
            <div className="header-wrapper"></div>
          </div>

          {/* 2 */}
          <div className="header">
            <h1>from her, &nbsp; earning her</h1>
            <div className="header-wrapper"></div>
          </div>
          {/* 3*/}
          <div className="flex items-center justify-between gap-1 header">
            <h1>reverence.</h1>
            <h1 data-text="universal">universal </h1>
            <div className="header-wrapper"></div>
          </div>
          {/* 4 */}
          <div className="header ">
            <h1>Radiating &nbsp; authority &nbsp; with </h1>
            <div className="header-wrapper"></div>
          </div>
          {/* 5 */}
          <div className="flex items-center justify-between gap-3 header">
            <h1>undeniable </h1>
            <h1 data-text="elegance">elegance</h1>
            <h1>.</h1>
            <div className="header-wrapper"></div>
          </div>
        </div>
        <Link to={"/biba"} className="pre-loader-btn font-poppins">
          <div className="uppercase btn">
            Click
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 10">
              <defs></defs>
              <path
                fill="#e2e2dd"
                d="M59.2,9.6V6.2h-58v-2c0,0,0,0,0,0h58V0.7L67,5.1L59.2,9.6z"
              ></path>
            </svg>
            to see <span className="text-[#F82E2E]"> &nbsp; her</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
