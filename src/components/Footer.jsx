import React from "react";
import LogoFacebook from "../Icons/LogoFacebook";
import LogoInstagram from "../Icons/LogoInstagram";
import LogoLinkedin from "../Icons/LogoLinkedin";
import LogoGitHub from "../Icons/LogoGitHub";
import { Link } from "react-router-dom";
import LogoWhatsapp from "../Icons/LogoWhatsapp";

function Footer() {
  const phoneNumber = "+51978211558";
  const message = "Hola, me gustaría contactarte";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="flex flex-col sm:gap-4 gap-1 sm:p-4 p-1">
      <div>
        <h1 className="text-white font-Shadows sm:text-5xl text-3xl text-center">
          Contactame
        </h1>
      </div>
      <div>
        <h1 className="text-white font-Shadows sm:text-3xl text-xl text-center">
          Redes Sociales
        </h1>
      </div>
      <div className="flex flex-row gap-3 justify-center">
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
          <button
            className="rounded-full bg-white w-8 h-8 transition duration-500 hover:scale-125 hover:bg-green-500 "
            onClick={() => openInNewTab(url)}
          >
            <LogoWhatsapp />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
