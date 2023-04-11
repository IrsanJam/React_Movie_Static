import React from "react";

function Contact() {
  return (
    <div id="contacts" className=" flex flex-col items-center  justify-center bg-basecolor p-10  text-center text-basefont lg:flex lg:h-40 lg:max-w-full lg:flex-row lg:items-center lg:justify-between lg:px-28 ">
      <div className="lg:-ml-3 lg:flex lg:flex-col lg:items-start lg:justify-center">
        <p className=" text-[9px] font-bold uppercase text-primary lg:mb-8  lg:text-[12px]">join to our programs</p>
        <h3 className="text-[15px] font-bold lg:-mt-6 lg:text-2xl ">Interest to Learn Contact us</h3>
        <p className=" text-[9px] font-bold text-slate-400  lg:text-[12px]">Sign up is easy just fill out to your email</p>
      </div>

      <div>
        <div className="lg:mt-3 lg:flex lg:gap-2">
          <form action="#uu" method="get">
            <input type="text" placeholder="Enter your email" className="h-[18px] w-[15rem] rounded-md text-center text-[10px] text-black lg:h-7 lg:w-[20rem] lg:px-3 lg:py-[2px] lg:text-left lg:text-[13px]"></input>
            <button type="submit" className="ml-2 rounded-md bg-primary px-3 py-[2px] align-middle text-[8px] font-bold text-slate-800 lg:px-3 lg:py-1  lg:text-[12px]">
              Notify me
            </button>
          </form>
        </div>
        <p className="mt-2 text-[7px] font-bold text-slate-400 lg:-ml-[16rem] lg:mt-2 lg:text-[12px]">We care about your privacy</p>
        <p className="text-[6px] font-bold text-slate-400 lg:-ml-[21rem]  lg:-mt-[3px] lg:text-[12px]">
          <a href="#rr" className="lg-mt-10  font-bold text-primary underline  lg:text-[11px]">
            Privacy policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
