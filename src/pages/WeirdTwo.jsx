import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function WeirdTwo() {
  const tl = useRef(null);
  const tl2 = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl2.current = gsap.timeline();

    tl.current.from(".section-you", 1.5, {
      x: "-100%",
      delay: 0,
      ease: "power4.out",
    });
    tl2.current.from(".wierd-img", 1.5, {
      x: "100%",
      delay: 0,
      ease: "power4.out",
    });
  });
  return (
    <section className="page relative pt-[72px] h-[100svh] bg-[#C2E2FF]">
      <div className="pl-10 section-you">
        <h1 className="roboto text-[3.73rem] font-medium leading-[90%] uppercase">
          Stay{" "}
        </h1>
        <h1 className="text-[5.96rem] roboto leading-[90%]">
          <span className="font-medium ">W</span>
          <span className="arflex">E</span>
          <span className="font-normal ">I</span>
          <span className="font-medium ">R</span>
          <span className="font-medium ">D</span>
        </h1>
        <h1 className="leading-[50%] roboto font-medium text-[3rem] uppercase">
          and just
        </h1>
        <h1 className="flex  leading-[90%] pt-5">
          <span className="roboto font-medium text-[3rem] uppercase">do</span>
          <span className="font-semibold text-[6rem] tracking-[4%] uppercase translate-x-3 translate-y-3">
            you
          </span>
        </h1>
      </div>

      <div className="absolute left-0 right-0 -bottom-8 wierd-img">
        <img
          src="image 10.png"
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
}
