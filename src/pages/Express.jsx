import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Express() {
  const tl = useRef(null);
  const tl2 = useRef(null);
  const imageRef = useRef(null);
  const h1Ref = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl2.current = gsap.timeline();

    tl.current.to(imageRef.current, 2, {
      delay: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "Power2.easeOut",
    });
    tl2.current.from(
      h1Ref.current.children,
      3,
      {
        delay: 1,
        x: "-400%",
        stagger: {
          amount: 0.4,
        },
        ease: "Expo.easeInOut",
      },
      "-=1"
    );
  });
  return (
    <section className="pt-[4.5rem] px-5 bg-[#E9EAEC] h-[100svh] balbes uppercase page">
      <div
        className="text-[61px] leading-[90%]"
        ref={(el) => (h1Ref.current = el)}
      >
        <h1> New</h1> <h1>ways to</h1> <h1>express</h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <img
          ref={imageRef}
          style={{
            clipPath: "polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)",
          }}
          src="image 22.png"
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center h-[4rem] bg-[#E9EAEC]">
        <img
          src="Arrow - Right.png"
          alt=""
          className="rotate-[180deg] cursor-pointer"
          onClick={() => window.history.back()}
        />
        <p className="font-semibold roboto">UI DESIGNER</p>
        <Link to={"/express-two"}>
          <img src="Arrow - Right.png" alt="" className="rotate-[360deg]" />
        </Link>
      </div>
    </section>
  );
}
