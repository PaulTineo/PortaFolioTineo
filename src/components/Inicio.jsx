import React from "react";
import "../App.css";
import LogoFacebook from "../Icons/LogoFacebook";
import LogoInstagram from "../Icons/LogoInstagram";
import LogoLinkedin from "../Icons/LogoLinkedin";
import LogoGitHub from "../Icons/LogoGitHub";
function Inicio() {
  return (
    <div
      className="flex gap-3 flex-col  absolute text-white top-2/4 left-2/4 "
      style={{ transform: "translate(-50%,-50%)" }}
    >
      <h1 className="font-Shadows text-5xl text-center">Hola, me presento</h1>
      <h1 className="text-5xl font-Schibsted text-center">Paul Tineo</h1>
      <p className="font-Shadows text-2xl text-center">Programador FrontEnd</p>
      <div className="flex flex-row gap-3 justify-center ">
        <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-blue-600  ">
          <LogoFacebook />
        </button>
        <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-pink-600 ">
          <LogoInstagram />
        </button>
        <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-sky-500 ">
          <LogoLinkedin />
        </button>
        <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-slate-500 ">
          <LogoGitHub />
        </button>
      </div>
    </div>
  );
}

export default Inicio;
