import React, { useRef } from "react";
import ExhibitionCard from "../components/locals/Exhibition-Card";
import Transition from "../components/globals/Transition";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Exhibition() {
  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current.from(".section", 3, {
      height: 0,
      delay: 1,
      ease: "power4.inOut",
    });
  });
  return (
    <section className="overflow-hidden section page">
      <Transition pagename="Exhibition" color="#F4F4F4" />

      <div className=" page overflow-hidden relative bg-[#F4F4F4] h-[100svh]  w-screen max-w-5xl mx-auto pt-16 px-6">
        <div className="pb-8">
          <div className="text-base leading-normal text-black roboto">
            <span>Welcome,&nbsp;</span>
            <spann className="font-bold">Liyana&nbsp;</spann>
            <span>👋</span>
          </div>

          <div className="mt-6 text-2xl font-semibold rubik-hero">
            <h2>ART EXHIBITION</h2>
          </div>
        </div>

        <div className="relative flex items-start justify-center gap-5 px-5">
          <div className="flex justify-center">
            <ExhibitionCard
              className="z-50 translate-x-[120px]"
              prop1="Eyes"
              prop2="01"
              prop3="art-page.png"
              prop4=" “Jirena” is a lady known for her looks, this piece of art is named after
        her."
            />
            <ExhibitionCard
              className="z-40 translate-y-[70px] translate-x-[47px]"
              prop1="Eyes"
              prop2="02"
              prop3="art-page-img-2.png"
              prop4=" This piece of art named “Peace” is a state of tranquility or quietness, often characterized by the absence of disturbance, conflict, or a virtual real life refer to both inner tranquility within oneself and the absence of war or conflict in the external world"
            />
            <ExhibitionCard
              className="z-30 translate-y-[90px]  translate-x-[-100px] opacity-10"
              prop1="Eyes"
              prop2="03"
              prop3="art-page-img-3.png"
              prop4="This piece of art named “Peace” is a state of tranquility or quietness, often characterized by the absence of disturbance, conflict, or a virtual real life refer to both inner tranquility within oneself and the absence of war or conflict in the external world"
            />
          </div>
        </div>

        <div className="flex flex-col w-full h-full gap-2 pt-24">
          <p className="text-sm roboto">
            Our exhibitor poured their passion and dedication into their
            creations, and it is our honor to be the audience to their
            brilliance.{" "}
          </p>

          <p className="text-sm roboto">
            Whether you are a seasoned professional, an aspiring artist, or
            someone simply seeking inspiration, I am confident that you will
            find something truly captivating within.
          </p>
        </div>

        <div className="absolute flex justify-end bottom-10 right-5">
          <Link
            to={"/yes"}
            className="bg-[#F82E2E] rounded-[8px] text-[#fff] px-8 py-2"
          >
            Next
          </Link>
        </div>
      </div>
    </section>
  );
}
