import React from "react";
import Transition from "../components/globals/Transition";

export default function PageNotFound() {
  return (
    <>
      <Transition prop="404" />

      <section className="relative flex items-center justify-center h-[100svh] pt-20 page">
        <h1 className="text-4xl font-black edito ">404</h1>

        <h1 className="pt-5 text-5xl text-center">page nnot found</h1>
      </section>
    </>
  );
}
