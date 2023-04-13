import { useRef } from "react";
import "./App.css";
import Experiencia from "./components/Experiencia";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProfileInfo from "./components/ProfileInfo";
import Proyectos from "./components/Proyectos";

function App(props) {
  return (
    <body>

      <div className="grid grid-cols-2 p-2">

        <div className="col-span-2 h-12 fixed inset-x-0 top-0 bg-white">
          {" "}
          <Navbar />
        </div>
        <div className="col-span-2 h-192  bg-slate-500" id="div1">
          <Inicio />
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="w-full h-full object-cover md:object-center"
          />
        </div>

      </div>

      <div className="flex flex-row gap-4" id="div2"> 
        <div className="m-4 h-192 sm:flex justify-center items-center hidden sm:w-4/6 w-full mt-8">
          <Profile />
        </div>
        <div className="m-4 sm:w-4/6 w-full mt-8 ">
          <ProfileInfo />
        </div>
      </div>

      <div className=" bg-gray-100 " id="div3" >
        <Experiencia />
      </div>

      <div className="col-span-2 h-64 mt-2" id="div4">
        <Proyectos />
      </div>

      <footer className="col-span-2  bg-black">
        <Footer />
      </footer>

    </body>
  );
}

export default App;
