import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" container bg-slate-400 mx-auto ">
      <h1 className="text-center text-2xl text-green-300">Hello world!</h1>
      <button className="bg-sky-500 hover:bg-red-700 text-white py-2  px-4 m-3 font-bold rounded">
        My boton
      </button>
      <h1 className="text-right uppercase">Holaaaa</h1>
      <div className="m-5 border ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          eveniet repellat, mollitia corrupti provident sint? At libero nam
          laudantium rem laboriosam facere. Nobis eos reiciendis, eum porro
          vitae excepturi asperiores.
        </p>
      </div>
    </div>
  );
}

export default App;
