import { AiFillShop, AiFillAlipayCircle, AiFillAmazonSquare } from "react-icons/ai";

function Card() {
  return (
    <div id="package" className="mx-auto h-[62rem] w-full bg-basefont pb-10 lg:h-[44rem] lg:px-40 lg:py-14">
      <p className=" pt-8 text-center text-[9px] font-bold uppercase text-green-500 lg:mb-3  lg:text-[12px]">join to our programs</p>
      <h3 className="mb-2 text-center font-bold text-basecolor lg:mb-3 lg:mt-3 lg:text-4xl">Choose your Package to Learn</h3>
      <p className=" mb-5 text-center text-[9px] font-bold text-slate-500 lg:text-[12px]">Choose your package when Match for you</p>
      <hr className="mx-auto mb-14 h-[4px] w-[25%] bg-slate-400" />

      <div className="px-20 lg:flex  lg:items-center lg:justify-center lg:gap-14 ">
        <div className="group mb-16 rounded-xl bg-white text-center shadow-xl duration-300 ease-in-out hover:scale-110 hover:rounded-md hover:bg-slate-500 hover:text-basefont  lg:h-[21rem] lg:flex-1 lg:px-[-10rem] lg:py-14">
          <AiFillShop size={60} className="mx-auto -mt-[2rem] h-10 w-8 pt-3 lg:h-14 lg:w-14 lg:pt-0 "></AiFillShop>
          <h3 className="text-[1rem] font-bold">Package Start</h3>
          <h1 className="mx-12 border-b-[1px] border-slate-400 pb-3 text-4xl font-bold lg:py-3 lg:text-[2rem]">$39</h1>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn HTML</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn CSS</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn Javascript</p>
          <button className=" mb-2 mt-2 rounded-xl  bg-primary px-5 py-2 text-[10px] font-bold text-black hover:scale-105 group-hover:bg-orange-500 lg:mt-5 lg:px-14 lg:py-2 lg:text-[14px] ">Get Started</button>
        </div>

        <div className="group mb-16 rounded-xl bg-white text-center shadow-xl duration-300 ease-in-out hover:scale-110 hover:rounded-md hover:bg-slate-500 hover:text-basefont  lg:h-[21rem] lg:flex-1 lg:px-[-10rem] lg:py-14">
          <AiFillAlipayCircle size={60} className=" mx-auto -mt-[2rem] h-10 w-8 pt-3 lg:h-14 lg:w-14 lg:pt-0 "></AiFillAlipayCircle>
          <h3 className="text-[1rem] font-bold">Package Middle</h3>
          <h1 className="mx-12 border-b-[1px] border-slate-400 pb-3 text-4xl font-bold lg:py-3 lg:text-[2rem]">$69</h1>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn Git</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn TailwindCSS</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn Bootstrap</p>
          <button className=" mb-2 mt-2 rounded-xl  bg-primary px-5 py-2 text-[10px] font-bold text-black hover:scale-105 group-hover:bg-orange-500 lg:mt-5 lg:px-14 lg:py-2 lg:text-[14px] ">Get Started</button>
        </div>

        <div className="group mb-16 rounded-xl bg-white text-center shadow-xl duration-300 ease-in-out hover:scale-110 hover:rounded-md hover:bg-slate-500 hover:text-basefont  lg:h-[21rem] lg:flex-1 lg:px-[-10rem] lg:py-14">
          <AiFillAmazonSquare size={60} className="mx-auto -mt-[2rem] h-10 w-8 pt-3 lg:h-14 lg:w-14 lg:pt-0 "></AiFillAmazonSquare>
          <h3 className="text-[1rem] font-bold">Package Finishing</h3>
          <h1 className="mx-12 border-b-[1px] border-slate-400 pb-3 text-4xl font-bold lg:py-3 lg:text-[2rem]">$99</h1>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn Rest API</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn React JS</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-[8px] lg:font-bold lg:text-[11px]">Learn Deployment</p>
          <button className=" mb-2 mt-2 rounded-xl  bg-primary px-5 py-2 text-[10px] font-bold text-black hover:scale-105 group-hover:bg-orange-500 lg:mt-5 lg:px-14 lg:py-2 lg:text-[14px] ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
