import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const [aura, setAura] = useState(false);
  const [biba, setBiba] = useState(false);
  const tl = useRef(null);
  const tl2 = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/aura") {
      setAura(true);
      setBiba(false);
    } else if (location.pathname === "/beeba") {
      setAura(false);
      setBiba(true);
    } else {
      setAura(false);
      setBiba(false);
    }
  }, [location.pathname]);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    tl2.current = gsap.timeline({ paused: true });

    tl.current
      .to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
      })
      .to(
        menuRef.current,
        {
          duration: 0.5,
          ease: "power4.inOut",
          clipPath: "circle(0.5% at 50% 50%)",
          clipPathOrigin: "center",
        },
        "-=0.5"
      )
      .to(
        menuRef.current,
        {
          duration: 1,
          ease: "power3.inOut",
          clipPath: "circle(100% at 50% 50%)",
          pointerEvents: "all",
          clipPathOrigin: "center",
        },
        "-=0.3"
      )
      .staggerFrom(
        ".socials",
        0.8,
        {
          y: 100,
          opacity: 0,
          ease: "Expo.easeOut",
        },
        "0.4",
        "-=0.6"
      )
      .from(
        ".menu__item",
        1.5,
        {
          delay: -0.5,
          x: -100,
          opacity: 0,
          stagger: {
            amount: 0.4,
          },
          ease: "Expo.easeInOut",
        },
        "-=1"
      );
  });

  const handleToggle = () => {
    tl.current.play();
    tl2.current.play();
  };

  const handleClose = () => {
    tl.current.reverse();
    tl2.current.reverse();
  };
  return (
    <>
      <header className="fixed z-30 w-full max-w-5xl ">
        <nav className="px-6 pt-6 mx-auto ">
          <div className="flex items-center justify-between ">
            <Link
              to="/biba"
              className={`font-bold uppercase roboto ${
                aura
                  ? "text-[#EAE0D4]"
                  : biba
                  ? "text-[#FEADBA]"
                  : "text-[#1A1A1A]"
              }`}
            >
              biba
            </Link>

            <div className="cursor-pointer" onClick={handleToggle}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17H5M19 12H5M19 7H5"
                  style={{
                    stroke: aura ? "#EAE0D4" : biba ? "#FEADBA" : "#1A1A1A",
                  }}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <div className="menu nav-container" ref={menuRef}>
        {/* close btn */}
        <div
          className="absolute z-50 cursor-pointer right-6 top-6"
          onClick={handleClose}
        >
          <img
            src="close.svg"
            alt="close-btn"
            className="h-10 w-10- md:h-20 md:w-20"
          />
        </div>
        {/* socials start */}
        <div className="absolute right-6 bottom-6">
          <div className="flex items-center gap-4 text-sm font-bold md:text-xl justify-items-end">
            <Link
              to={"https://twitter.com/UibyBiba"}
              target="_blank"
              className="uppercase socials"
            >
              Twitter
            </Link>
            <Link
              className="uppercase socials"
              to={"https://twitter.com/UibyBiba"}
              target="_blank"
            >
              Behance
            </Link>
          </div>
        </div>
        {/* socials ends here */}

        {/* nav menu */}

        <div className="sub__menu" ref={(el) => (navRef.current = el)}>
          {/* menu 1 */}
          <div className="menu__item" onClick={handleClose}>
            <Link to={"/aura-two"} className="menu__item__link">
              Aura
            </Link>
            <img
              src="aura.png"
              alt="aura-page-image"
              className="menu__item__img"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span> Aura - Aura - Aura - Aura - Aura - Aura - Aura </span>
              </div>
            </div>
          </div>
          <div className="menu__item" onClick={handleClose}>
            <Link to={"/beeba"} className="menu__item__link">
              Biba
            </Link>
            <img
              src="image 8.png"
              alt="biba-page-image"
              className="menu__item__img"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Biba - Biba - Biba - Biba - Biba - Biba - Biba</span>
              </div>
            </div>
          </div>

          {/* menu 3 */}
          <div className="menu__item" onClick={handleClose}>
            <Link to={"/express"} className="menu__item__link">
              Express
            </Link>
            <img
              src="express.png"
              alt="biba-page-image"
              className="menu__item__img"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  {" "}
                  Express - Express - Express - Express - Express - Express -
                  Express{" "}
                </span>
              </div>
            </div>
          </div>
          {/* menu 4 */}
          <div className="menu__item" onClick={handleClose}>
            <Link to={"/yes"} className="menu__item__link">
              Stay Weird
            </Link>
            <img
              src="weird.png"
              alt="biba-page-image"
              className="menu__item__img"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Stay Wierd - Stay Wierd - Stay Wierd - Stay Wierd - Stay Wierd
                  - Stay Wierd - Stay Wierd
                </span>
              </div>
            </div>
          </div>
          {/* menu 5 */}
          <div className="menu__item" onClick={handleClose}>
            <Link to={"/biba"} className="menu__item__link">
              View Art
            </Link>
            <img
              src="home-imag.png"
              alt="home-page-image"
              className="menu__item__img"
            />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  {" "}
                  View Art - View Art - View Art - View Art - View Art - View
                  Art - View Art{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
