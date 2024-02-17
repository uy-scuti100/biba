import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Aura() {
  const tl2 = useRef(null);
  const tl3 = useRef(null);
  const h1Ref = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    tl2.current = gsap.timeline();
    tl3.current = gsap.timeline();

    tl2.current.from(h1Ref.current, 1, {
      scale: 0,

      ease: "Power2.easeOut",
    });
    tl3.current.from(btnRef.current, 1, {
      scale: 2.5,
      opacity: 0,
      ease: "Expo.inOut",
    });
  });
  return (
    <section className="page pt-[3rem] bg-[#C32325] h-[100svh] w-screen relative">
      <h1
        className="text-[148px] text-center text-[#EAE0D4] crasus"
        ref={h1Ref}
      >
        HER
      </h1>
      <div
        className="absolute left-0 right-0 flex items-center justify-center -bottom-10"
        ref={btnRef}
      >
        <img src="aura.png" alt="" className="w-full" />
      </div>
    </section>
  );
}
