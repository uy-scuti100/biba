import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Beeba() {
  const tl = useRef(null);
  const tl2 = useRef(null);
  const tl3 = useRef(null);
  const imageRef = useRef(null);
  const h1Ref = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline();
    tl2.current = gsap.timeline();
    tl3.current = gsap.timeline();

    tl.current.to(imageRef.current, 2, {
      delay: 0.8,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "Power2.easeOut",
    });
    tl2.current.from(
      h1Ref.current.children,
      3,
      {
        delay: 0.8,
        x: "-400%",
        stagger: {
          amount: 0.4,
        },
        ease: "Expo.easeInOut",
      },
      "-=1"
    );
    tl3.current.from(btnRef.current, 2, {
      delay: 1,
      y: 700,
      ease: "power3.inOut",
    });
  });
  return (
    <section className="page pt-[4.5rem] px-5 bg-[#1F1B26] h-[100svh] w-screen relative">
      <div
        className="text-[#FEADBA] rich_punk"
        ref={(el) => (h1Ref.current = el)}
      >
        <h1 className="text-[15.563rem] leading-[213px]">BI</h1>
        <h1 className="text-[15.563rem] leading-[213px]">BA</h1>
      </div>
      <div
        className="flex justify-end translate-x-5 -translate-y-12 "
        ref={imageRef}
      >
        <img src="lips.png" alt="" className="w-[273px] h-[400px]" />
      </div>

      <div
        className="absolute flex justify-end pb-2 left-5 bottom-5"
        ref={btnRef}
      >
        <Link
          to={"/beeba-two"}
          className="bg-[#FEADBA] rounded-[24px] uppercase text-[#1F1B26] px-4 py-2 text-xs flex items-center justify-center"
        >
          Art at <br />
          its best{" "}
          <span className="ml-5">
            <img src="Arrow - Right.png" alt="" />
          </span>
        </Link>
      </div>
    </section>
  );
}
