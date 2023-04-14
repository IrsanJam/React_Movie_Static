// import React from "react";
// import { useState, useEffect } from "react";
// import { dapatkanDaftarFilm, cariFilm } from "./Api";
// function Grid() {
//   const [filmPopular, setFilmPopular] = useState([]);

//   useEffect(() => {
//     dapatkanDaftarFilm().then((result) => setFilmPopular(result));
//   }, []);

//   const gambar = `https://image.tmdb.org/t/p/w500/`;

//   const TampilkanData = () => {
//     return filmPopular.map((movie, i) => {
//       return (
//         <div className=" grid h-auto max-w-full grid-cols-4 items-center justify-items-center gap-16 bg-green-100 p-28 pt-80">
//           <div className="box-border h-[30rem] w-64 rounded-sm bg-green-200  text-basecolor shadow-xl" key={i}>
//             <img src={`${gambar}/${movie.poster_path}`} alt="" className="h-60 w-full " />
//             <h3 className=" rounded-b-md bg-green-300 py-3 text-center font-bold ">{movie.title}</h3>
//             <hr className="mx-auto w-24 border-green-500" />
//             <p className=" p-3 text-justify text-[9px]  -tracking-tight ">{movie.overview}</p>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div className=" grid h-auto max-w-full grid-cols-4 items-center justify-items-center gap-16 bg-green-100 p-28 pt-80">
//       {/* menambah list */}
//       <TampilkanData></TampilkanData>
//     </div>
//   );
// }

// export default Grid;
