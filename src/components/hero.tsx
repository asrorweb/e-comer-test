"use client";

import { ProductType } from "@/interfaces/product.type";
import OptimazeImage from "./image";
import { FC } from "react";

const Hero: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <section className="body-font pt-20 pb-10">
      <div className="container min-h-[60vh] glasses-effect py-7  mx-auto flex px-5 xl:px-40 justify-center md:justify-start md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <OptimazeImage width={900} height={900} src={product.img} alt="shoes" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
