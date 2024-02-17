import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function AuraTwo() {
  const tl = useRef(null);
  const tl2 = useRef(null);
  const tl3 = useRef(null);
  const tl4 = useRef(null);
  const h1Ref = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl2.current = gsap.timeline();
    tl3.current = gsap.timeline();
    tl4.current = gsap.timeline();

    tl2.current.from(
      h1Ref.current.children,
      3,
      {
        delay: 1,
        rotate: 180,
        y: "-1000%",
        stagger: {
          amount: 0.4,
        },
        ease: "Expo.easeInOut",
      },
      "-=1"
    );
    tl3.current.to(btnRef.current, 5, {
      delay: 1,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.Out",
    });
    tl4.current.from(".wordings", 0.5, {
      delay: 2,
      opacity: 0,
      stagger: -0.2,
      ease: "power4.inOut",
    });
  });
  return (
    <section className="pt-[3.5rem] bg-[#EAE0D4] h-[100svh] w-screen relative">
      <div className="pt-[20px] px-5">
        <h1 className="roboto font-bold text-[32px] uppercase leading-none wordings">
          every <br /> day
        </h1>

        <div className="flex roboto uppercase pt-10 items-center justify-between text-[#141414]">
          <div>
            <p className="text-xs font-bold wordings">remember</p>
            <p className="font-bold wordings">how it started</p>
          </div>
          <div>
            <p className="font-bold wordings">How</p>
            <p className="font-bold wordings">it was</p>
          </div>
        </div>

        <div
          className="text-[#141414] text-center pt-[60px] crasus"
          ref={(el) => (h1Ref.current = el)}
        >
          <h1 className="text-[12.75rem] leading-[74%]">AU</h1>
          <h1 className="text-[12.75rem] leading-[74%]">RA</h1>
        </div>

        <div className="roboto uppercase text-[#141414] pt-[30px]">
          <p className="font-bold wordings">& How</p>
          <p className="font-bold wordings">it will be</p>
        </div>
      </div>
      <div
        className="absolute left-0 right-0 flex items-center justify-center bottom-5 "
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
        ref={btnRef}
      >
        <Link
          to={"/aura"}
          className="bg-[#C32325] rounded-[24px] uppercase text-[#FFFFFF] w-[164px] h-[56px] px-8 py-4  flex items-center justify-center"
        >
          EXPLORE
          <span className="ml-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L17.7071 7.29289C17.3166 6.90237 16.6834 6.90237 16.2929 7.29289C15.9024 7.68342 15.9024 8.31658 16.2929 8.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L16.2929 15.2929C15.9024 15.6834 15.9024 16.3166 16.2929 16.7071C16.6834 17.0976 17.3166 17.0976 17.7071 16.7071L21.7071 12.7071Z"
                fill="#F3F3F3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}

// clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", and  it animates to   clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
