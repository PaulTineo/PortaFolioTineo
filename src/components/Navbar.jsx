import React from "react";
import "../App.css";
import Logo from "../Icons/Logo";
import Menu from "../Icons/Menu";
function Navbar(props) {
  function OpenMenu() {
    let menu = document.getElementById("menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="flex justify-between h-full items-center p-2 ">
      <div>
        <Logo />
      </div>
      <div className="sm:hidden flex">
        <Menu onClick={() => OpenMenu()} />
      </div>

      <div
        id="menu"
        className=" sm:flex hidden  sm:mr-3 mr-3 font-Schibsted font-semibold absolute sm:relative sm:top-0 top-14 right-0"
      >
        <div className="flex flex-col sm:flex-row gap-12  bg-white sm:py-0 py-9 sm:px-0 px-4 w-full sm:w-full h-full sm:h-full border-2 border-gray-400 sm:border-none ">
          <a
            className=" hover:text-sky-400 cursor-pointer"
            onClick={() => handleNavClick("div1")}
          >
            INICIO
          </a>
          <p
            className=" hover:text-sky-400 cursor-pointer"
          onClick={() => handleNavClick("div2")}
          >
            SOBRE MI
          </p>
          <a
            className=" hover:text-sky-400 cursor-pointer "
            onClick={() => handleNavClick("div3")}
          
          >
            TRABAJOS
          </a>
          <a
            className=" hover:text-sky-400 cursor-pointer"
            onClick={() => handleNavClick("div4")}
          >
            PROYECTOS
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
