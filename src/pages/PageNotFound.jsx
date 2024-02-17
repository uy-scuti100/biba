import React from "react";
import Transition from "../components/globals/Transition";

export default function PageNotFound() {
  return (
    <>
      <Transition prop="404" />

      <section className="relative flex items-center justify-center h-screen pt-20">
        <h1 className="text-4xl font-black edito ">404</h1>
      </section>
    </>
  );
}
