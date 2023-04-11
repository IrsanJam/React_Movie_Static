import React from "react";
import Gambar from "./2.jpg";

function Programming() {
  return (
    <div id="about" className="mark container max-w-full">
      <div className="aturan-box lg:flex lg:items-center lg:justify-between lg:gap-5 lg:px-[4rem] lg:py-16">
        <div className=" -mt-5 mb-5 h-[10rem] w-full lg:flex lg:h-[16rem] lg:w-[25rem] ">
          <img src={Gambar} alt="" className="rounded-lg" />
        </div>
        <div className=" text-justify lg:h-[20rem] lg:w-full lg:py-16 lg:pl-10 lg:pr-2">
          <p className="pt-5 text-[10px] font-bold uppercase text-green-500 md:text-[12px] lg:-mt-9 lg:pb-10">talk How programming come</p>
          <h3 className="mb-2 font-bold text-basecolor lg:-mt-8 lg:mb-5 lg:text-4xl">About Programming</h3>
          <p className="text-[10px] md:text-[12px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis error exercitationem blanditiis mollitia consequuntur ex saepe expedita aperiam, cum corporis? Qui laboriosam iusto suscipit tempora ullam fugit,
            exercitationem quia eligendi ex nam officia commodi eos quisquam aperiam aliquam sequi neque.
          </p>
          <button className="mt-5 rounded-xl bg-primary px-5 py-2 text-[10px] font-bold text-black lg:px-14 lg:py-2 lg:text-[14px] ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Programming;
