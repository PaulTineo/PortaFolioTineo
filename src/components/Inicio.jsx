import React from "react";
import "../App.css";
import LogoFacebook from "../Icons/LogoFacebook";
import LogoInstagram from "../Icons/LogoInstagram";
import LogoLinkedin from "../Icons/LogoLinkedin";
import LogoGitHub from "../Icons/LogoGitHub";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function Inicio() {
  return (
    <div
      className="flex gap-3 flex-col  h-full justify-center items-center text-white "
      id="div1"
      ref={ref}
    >
      <h1 className="font-Shadows text-5xl text-center">Hola, me presento</h1>

      <h1 className="text-5xl font-Schibsted text-center">Paul Tineo</h1>
      <p className="font-Shadows text-2xl text-center">Programador FrontEnd</p>
      <div className="flex flex-row gap-3 justify-center ">
        <Link to="https://www.facebook.com/paul.tineo.50" target="_blank">
          <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-blue-600">
            <LogoFacebook />
          </button>
        </Link>
        <Link to="https://www.instagram.com/paultineoch/" target="_blank">
          <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-pink-600 ">
            <LogoInstagram />
          </button>
        </Link>
        <Link
          to="https://www.linkedin.com/in/paul-tineo-chumpitaz-13924a221/"
          target="_blank"
        >
          <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-sky-500 ">
            <LogoLinkedin />
          </button>
        </Link>
        <Link to="https://github.com/PaulTineo" target="_blank">
          <button className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-slate-500 ">
            <LogoGitHub />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;
