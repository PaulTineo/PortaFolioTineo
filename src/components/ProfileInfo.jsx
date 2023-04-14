import React from "react";

function ProfileInfo() {
  return (
    <div className="flex flex-col gap-9 p-4 ">
      <h1 className="text-black font-Shadows text-5xl">Hola a Todos!</h1>
      <p className="text-black font-Schibsted sm:text-xl text-sm">
        Mi nombre es Paul Tineo, tengo 23 años, soy una persona emprendedora,
        proactiva, organizada, paciente y responsable. Me gusta trabajar en
        equipo para alcanzar un objetivo en común. Busco un puesto donde pueda
        seguir desarrollándome profesionalmente{" "}
      </p>
      <div>
        <table cellPadding={5} className="font-Schibsted sm:text-xl text-sm">
          <tr>
            <td className="font-bold">Nombre:</td>
            <td>Paul Tineo Chumpitaz</td>
          </tr>
          <tr>
            <td className="font-bold">Edad:</td>
            <td>23 años</td>
          </tr>
          <tr>
            <td className="font-bold">Correo:</td>
            <td>paul.tauro.1088@gmail.com</td>
          </tr>
          <tr>
            <td className="font-bold">Telefono:</td>
            <td>+51 978211558</td>
          </tr>
          <tr>
            <td className="font-bold">Ubicación:</td>
            <td>Lima, Perú</td>
          </tr>
          <tr>
            <td className="font-bold">Experiencia:</td>
            <td>1 año</td>
          </tr>
        </table>
      </div>
      <a href="@assets/CVPAULTINEO.pdf" download>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-3/6 transition duration-500 hover:scale-110 ">
          Descargar CV
        </button>
      </a>
    </div>
  );
}

export default ProfileInfo;
