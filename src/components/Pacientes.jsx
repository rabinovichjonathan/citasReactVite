import { useState, useEffect } from 'react'




function Pacientes({paciente, setPaciente, eliminarPaciente}) {
    useEffect(()=>{
        console.log('El componente esta listo')
      },[])

      const handleEliminar = () => {
          const respuesta = confirm('Deseas eliminar este paciente?');
          if(respuesta){
            eliminarPaciente(paciente.id)
          }
      }

  return (
    <div>
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{paciente.nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>{paciente.propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{paciente.email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: {''}
                <span className='font-normal normal-case'>{paciente.alta}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                <span className='font-normal normal-case'>{paciente.sintomas}</span>
            </p>
            <div className='flex justify-between'>
                <button
                    type="button" className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg ' onClick={()=> setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button" className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg' onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>    
        </div>
        
        
      
    </div>   
    
    
  )
}

export default Pacientes;