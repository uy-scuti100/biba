import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Biba() {
  const tl = useRef(null);
  const tl2 = useRef(null);
  const tl3 = useRef(null);
  const tl4 = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl2.current = gsap.timeline();
    tl3.current = gsap.timeline();
    tl4.current = gsap.timeline();

    tl.current.to(".bar", 1.5, {
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    tl2.current
      .from(".h1", 1.5, {
        delay: 0.5,
        y: 700,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      })
      .to(".home-overlay", 0.2, {
        display: "none",
        opacity: 0,
      });
    tl3.current.from(".image", 2, {
      delay: 0.5,
      y: 700,
      ease: "power4.inOut",
    });
    tl4.current.from(".view-art-btn", 1, {
      delay: 1.5,
      y: 700,
      ease: "power3.inOut",
    });
  });
  return (
    <section>
      <div className="fixed inset-0 z-40 flex gap-0 home-overlay">
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
        <div className="w-[10vw] h-[105vh] bg-black bar"></div>
      </div>

      <div className="bg-[#EDEDED] h-[100svh] w-screen pt-16 max-w-5xl mx-auto flex justify-between relative items-center flex-col z-20">
        <div className="flex flex-col items-center justify-center uppercase opacity-50 pointer-events-none select-none rubik">
          <div className="flex justify-between w-full leading-[100%]">
            <h1 className="relative h1">V</h1>
            <h1 className="relative h1">i</h1>
            <h1 className="relative h1">e</h1>
            <h1 className="relative h1">w</h1>
          </div>
          <div className="flex justify-between w-full leading-[100%]">
            <h1 className="relative h1">A</h1>
            <h1 className="relative h1">r</h1>
            <h1 className="relative h1">t</h1>
          </div>
        </div>
        {/* had to use a magic number to derive at a position that fits the image as its n the design file */}
        <div className="absolute inset-0 left-0 right-0 top-[28%] image">
          <img
            src="home-imag.png"
            alt="home-image"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="view-art-btn z-50 absolute bottom-[2rem]">
          <Link
            to={"/exhibition"}
            className="inline-flex gap-2 px-8 py-4 justify-center items-center rounded-3xl bg-[#F1FCC0]"
          >
            <span className="text-[#1a1a1a] roboto font-bold leading-normal">
              View Art
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M22.2071 12.7071C22.5976 12.3166 22.5976 11.6834 22.2071 11.2929L18.2071 7.29289C17.8166 6.90237 17.1834 6.90237 16.7929 7.29289C16.4024 7.68342 16.4024 8.31658 16.7929 8.70711L19.0858 11L3.5 11C2.94772 11 2.5 11.4477 2.5 12C2.5 12.5523 2.94772 13 3.5 13L19.0858 13L16.7929 15.2929C16.4024 15.6834 16.4024 16.3166 16.7929 16.7071C17.1834 17.0976 17.8166 17.0976 18.2071 16.7071L22.2071 12.7071Z"
                  fill="#1A1A1A"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
// pointer-events-none select-none
