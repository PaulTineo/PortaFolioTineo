import React from 'react'

function Proyectos() {
  return (
    <div className='flex flex-col gap-8 justify-center sm:p-0 p-4'>
        <div>
            <h1 className='text-5xl  text-center font-Shadows'>Proyectos</h1>
        </div>
        <div className='flex flex-row gap-4 justify-center'>
            <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded '>Ecommerce Prox..</button>
            {/* <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded '>Proyecto 2</button>
            <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded '>Proyecto 3</button> */}
        </div>
    </div>
  )
}

export default Proyectos