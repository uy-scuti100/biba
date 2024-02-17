import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function BeebaTwo() {
  const tl2 = useRef(null);
  const tl3 = useRef(null);
  const imageRef = useRef(null);
  const h1Ref = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    tl2.current = gsap.timeline();
    tl3.current = gsap.timeline();

    tl2.current.from(
      h1Ref.current.children,
      3,
      {
        flexDirection: "column",
        y: "-400%",
        stagger: {
          amount: 0.4,
        },
        ease: "Expo.easeInOut",
      },
      "-=1"
    );
    tl3.current.from(btnRef.current, 1, {
      y: 700,
      ease: "power4.Out",
    });
  });
  return (
    <section className="pt-[3.5rem] bg-[#FEADBA] h-[100svh] w-screen relative">
      <div
        className="text-[128px] text-center rich_punk flex items-center justify-center"
        ref={(el) => (h1Ref.current = el)}
      >
        <p>B</p>
        <p>I</p>
        <p>B</p>
        <p>A</p>
      </div>

      <div
        className="absolute left-0 right-0 flex items-center justify-center -bottom-5"
        ref={btnRef}
      >
        <img src="image 8.png" alt="" className="object-cover w-full h-full" />
      </div>
    </section>
  );
}
