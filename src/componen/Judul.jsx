import React from "react";

function Judul() {
  const input = document.querySelector(".inputa");
  const mCari = () => {
    console.log(input.value);
  };

  const search = (hasil) => {
    console.log(hasil);
  };

  return (
    <div className=" fixed z-10 flex w-full flex-col items-center justify-center bg-green-50 p-10 shadow-lg backdrop-blur-lg ">
      <p className="p-2 text-[13px] font-bold uppercase text-slate-600">Landing Page Pencarian Film</p>
      <h1 className="text-center font-bold uppercase text-primary lg:text-4xl">Find... movie Present</h1>
      <p className="p-2  text-[10px] font-bold text-slate-400">Cari film Favorit anda dengan api terbaik</p>
      <div className="flex items-center justify-center">
        <input type="text" placeholder="Masukan nama film" className="inputa rounded-xl px-32 py-2 text-center"></input>
        <button onClick={mCari} onChange={({ target }) => search(target.value)} className="ml-3 rounded-xl bg-primary px-10 py-2 font-medium text-slate-700">
          Cari
        </button>
      </div>
    </div>
  );
}

export default Judul;
