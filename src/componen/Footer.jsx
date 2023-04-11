import React from "react";
import { AiFillBank, AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-basecolor p-8 text-basefont   lg:grid lg:grid-cols-4 lg:items-start lg:justify-start lg:gap-x-20 lg:px-24 lg:py-6">
      <div className="lg:-mr-14 lg:py-5">
        <h1 className="font-bold text-primary lg:-mt-2 lg:text-3xl">React App</h1>
        <p className="my-3 text-justify text-[10px] lg:mt-3 lg:-space-x-1 lg:text-[12.5px] lg:font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At vel suscipit obcaecati alias non culpa id inventore numquam cumque atque dignissimos quia magni, iure rerum eveniet? Distinctio remote juiao ut a esse.
        </p>
        <div className=" flex gap-2 lg:mt-5  lg:gap-5">
          <AiFillInstagram className="h-5 w-5"></AiFillInstagram>
          <AiFillFacebook className="h-5 w-5"></AiFillFacebook>
          <AiFillTwitterCircle className="h-5 w-5"></AiFillTwitterCircle>
          <AiFillGithub className="h-5 w-5"></AiFillGithub>
          <AiFillBank className="h-5 w-5"></AiFillBank>
        </div>
      </div>

      <div className="hidden md:flex md:gap-24">
        <div className="lg:ml-16 lg:flex lg:flex-col lg:p-5">
          <p className="text-[12px] font-bold lg:pb-3 lg:text-[18px]">Solutions</p>
          <p className="text-[10px] font-bold  text-slate-400 lg:pb-2 lg:text-[12px]">Analatytics</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Marketing</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Commerce</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-3 lg:text-[12px]">Insight</p>
        </div>

        <div className="lg:-ml-10 lg:flex lg:flex-col lg:p-5  ">
          <p className="text-[12px] font-bold lg:pb-3 lg:text-[18px]">Support</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Pricing</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Documentation</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Guides</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-3 lg:text-[12px]">API Status</p>
        </div>

        <div className="lg:-ml-12 lg:flex lg:flex-col lg:p-5 ">
          <p className="text-[12px] font-bold lg:pb-3 lg:text-[18px]">Company</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">About</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Blog</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Jobs</p>
          <p className="text-[10px] font-bold text-slate-400 lg:pb-3 lg:text-[12px]">Press</p>
        </div>
      </div>

      <div className=" grid grid-cols-3 md:hidden">
        <div className="  py-5 lg:ml-16 lg:flex lg:flex-col lg:p-5">
          <p className="text-[12px] font-bold lg:pb-3 lg:text-[18px]">Solutions</p>
          <p className="text-[8px] font-bold  text-slate-400 lg:pb-2 lg:text-[12px]">Analatytics</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Marketing</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Commerce</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-3 lg:text-[12px]">Insight</p>
        </div>

        <div className=" py-5 lg:-ml-5 lg:flex lg:flex-col lg:p-5  ">
          <p className="text-[12px] font-bold lg:pb-3 lg:text-[18px]">Support</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Pricing</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Documentation</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Guides</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-3 lg:text-[12px]">API Status</p>
        </div>

        <div className=" py-5 lg:-ml-24 lg:flex lg:flex-col lg:p-5 ">
          <p className="text-[12px] font-bold lg:pb-3 lg:text-[18px]">Company</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">About</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Blog</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-2 lg:text-[12px]">Jobs</p>
          <p className="text-[8px] font-bold text-slate-400 lg:pb-3 lg:text-[12px]">Press</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
