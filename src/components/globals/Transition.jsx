import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Transition({ pagename, color }) {
  const tl = useRef(null);
  const trans = useRef();

  useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current
      .to(trans.current, {
        duration: 0.3,
        // x: "30%",
        ease: "power4.easeOut",
        // clipPath: "circle(26.4% at 50% 50%)",
        clipPath: "circle(0% at 50% 50%)",
        clipPathOrigin: "center",
      })
      .to(
        trans.current,
        {
          duration: 1,
          ease: "power3.inOut",
          clipPath: "circle(50% at 50% 50%)",
          rotate: "360deg",
        },
        "-=0.3"
      )
      .to(
        trans.current,
        {
          duration: 1,
          ease: "Expo.easeIn",
          clipPath: "circle(100% at 50% 50%)",
          pointerEvents: "all",
          clipPathOrigin: "center",
          visibility: "none",
        },
        "-=0.3"
      )
      .to(
        trans.current,
        {
          duration: 1.2,
          ease: "power4.easeInOut",
          clipPathOrigin: "center",
          height: 0,
          y: "-100%",
          opacity: 1,
          visibility: "none",
        },
        "-=0.2"
      );
  }, []);
  return (
    <div
      className="fixed text-center inset-0 flex items-center justify-center bg-[#141414] uppercase text-white text-[6vw] font-bold trans rubik-hero z-[100000]"
      ref={trans}
    >
      <p
        style={{ color: `${color}`, pointerEvents: "none", userSelect: "none" }}
      >
        {pagename}
      </p>
    </div>
  );
}
