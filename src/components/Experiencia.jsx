import React from "react";
import Book from "../Icons/Book";
import Bag from "../Icons/Bag";

function Experiencia() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 ">
      <div className=" sm:w-2/4 w-full p-3 mt-8">
        <p className="text-center mb-3 font-Shadows text-4xl">EDUCACION</p>
        <div className="flex flex-row gap-20 justify-center">
          <div className="sm:flex hidden">
            <Book />
          </div>

          <div className="flex flex-col gap-6 font-Schibsted">
            <div className="bg-white sm:w-5/6  w-80 rounded-lg p-3 shadow-xl">
              <p className="text-center font-bold">
                Universidad Nacional de Ingenieria
              </p>
              <p> • Graduado con honores académicos </p>
              <p>• Bachiller en proceso.</p>
            </div>
            <div className="bg-white sm:w-5/6 w-80 rounded-lg p-3 shadow-xl">
              <p className="text-center font-bold">Idiomas/Certificados</p>
              <p> • Ingles-Basico </p>
              <p>• Expecialista en Excel-Avanzado</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:w-2/4 w-full p-3 mt-8">
        <p className="text-center mb-3 font-Shadows text-4xl">EXPERIENCIA</p>
        <div className="flex flex-row  gap-20 justify-center">
          <div className="sm:flex  hidden ">
            <Bag />
          </div>
          <div className="flex flex-col gap-6 font-Schibsted">
            <div className="bg-white sm:w-5/6 w-80 rounded-lg p-3 shadow-xl">
              <p className="text-center font-bold">Programador FrontEnd</p>
              <p> • Desarrollador de componentes que requiera el proyecto. </p>
              <p>
                • Experiencia de desarrollo con React.js, Redux Tolkit,
                JavaScript, HTML5, CSS3, SASS, Axios.
              </p>
              <p>
                • Conocimientos en el framework Material-UI, Bootstrap y
                TailwindCss.
              </p>
              <p>• Experiencia en Node.js para la creación de APIS.</p>
              <p>• Conocimientos en Git.</p>
            </div>
            <div className="bg-white sm:w-5/6 w-80 rounded-lg p-3 shadow-xl">
              <p className="text-center font-bold">Soporte Tecnico</p>
              <p> • Recepción de tickets de incidencias de usuarios. </p>
              <p>• Soporte y actualización de Redes(VPN).</p>
              <p>• Preparación de equipos para los usuarios.</p>
              <p>• Instalación y configuración de programas de la empresa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
