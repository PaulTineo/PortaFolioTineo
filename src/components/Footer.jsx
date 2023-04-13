import React from "react";
import LogoFacebook from "../Icons/LogoFacebook";
import LogoInstagram from "../Icons/LogoInstagram";
import LogoLinkedin from "../Icons/LogoLinkedin";
import LogoGitHub from "../Icons/LogoGitHub";

function Footer() {
  return (
    <div className="flex flex-col sm:gap-4 gap-1 sm:p-4 p-1">
      <div >
        <h1 className="text-white font-Shadows sm:text-5xl text-3xl text-center">Contactame</h1>
      </div>
      <div>
        <h1 className="text-white font-Shadows sm:text-3xl text-xl text-center">Redes Sociales</h1>
      </div>
      <div className="flex flex-row gap-3 justify-center">
        <button className="rounded-full bg-white w-8 h-8">
          <LogoFacebook />
        </button>
        <button className="rounded-full bg-white w-8 h-8">
          <LogoInstagram />
        </button>
        <button className="rounded-full bg-white w-8 h-8">
          <LogoLinkedin />
        </button>
        <button className="rounded-full bg-white w-8 h-8">
          <LogoGitHub />
        </button>
      </div>
    </div>
  );
}

export default Footer;
