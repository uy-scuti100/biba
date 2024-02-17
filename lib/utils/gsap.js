import gsap from "gsap";

const useMenuAnimation = (menuRef, setOpenNav) => {
  const tl = gsap.timeline({ paused: true });

  tl.to(menuRef.current, {
    duration: 0.3,
    opacity: 1,
  })
    .to(
      menuRef.current,
      {
        duration: 0.5,
        ease: "power3.inOut",
        clipPath: "circle(0.5% at 50% 50%)",
        clipPathOrigin: "center",
      },
      "-=0.3"
    )
    .to(
      menuRef.current,
      {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "circle(30% at 50% 50%)",
        rotate: "720deg",
      },
      "-=0.3"
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
    );

  const handleToggle = () => {
    setOpenNav((prev) => !prev);
    if (!tl.isActive()) {
      openNav ? tl.reverse() : tl.play();
    }
  };

  const handleClose = () => {
    setOpenNav(false);
    tl.reverse();
  };

  return { handleToggle, handleClose };
};

export default useMenuAnimation;
