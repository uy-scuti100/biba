import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function ExpressTwo() {
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
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "Power2.easeOut",
    });
    tl2.current.from(
      h1Ref.current.children,
      3,
      {
        x: "-400%",
        stagger: {
          amount: 0.4,
        },
        ease: "Expo.easeInOut",
      },
      "-=1"
    );
    tl3.current.from(btnRef.current, 1, {
      delay: 1,
      y: 700,
      ease: "power3.inOut",
    });
  });
  return (
    <section className="pt-[4.5rem] px-5 bg-[#E9EAEC] h-[100svh] w-screen relative page">
      <div
        ref={imageRef}
        className="w-full"
        style={{ clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }}
      >
        <img src="Frame 100.png" alt="" className="w-full" />
      </div>

      <div className="pt-6 text-sm roboto" ref={(el) => (h1Ref.current = el)}>
        <p>
          Personal or professional life, she always <br /> rises to the occasion
          and faces <br /> obstacle head-on.
        </p>
        &nbsp;
        <p>
          She is not afraid to take risks and try <br /> new things.
        </p>{" "}
        &nbsp;
        <p>
          What sets this woman apart is her ability <br /> to think outside of
          the box and come <br /> up with innovative solutions to problems.
        </p>
        &nbsp;
        <p>
          Her creativity is a powerful force that <br /> fuels her passion.
        </p>
      </div>

      <div
        className="absolute flex justify-end pb-2 right-5 bottom-5"
        ref={btnRef}
      >
        <Link
          to={"/beeba"}
          className="bg-[#D2A9C3] rounded-[24px] uppercase text-[#1F1B26] px-4 py-2 text-xs flex items-center justify-center"
        >
          At her best{" "}
          <span>
            <img src="Arrow - Right.png" alt="" />
          </span>
        </Link>
      </div>
    </section>
  );
}
