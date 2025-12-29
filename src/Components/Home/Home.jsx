import React from "react";
import Hero from "./Hero";
import Process from "./Process";
import Package from "./Package";

function Home() {
  return (
    <>
      <Hero />
      <hr className="border-t border-gray-300 my-6" />

      <Process />
      <hr className="border-t border-gray-300 my-6" />

      <Package />
      <hr className="border-t border-gray-300 my-6" />
    </>
  );
}

export default Home;
