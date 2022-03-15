import { useState, useEffect } from 'react';
import Pacientes from './Pacientes';



function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {
 

  return (
   
     
     <>

      <div className='md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll'>
      
        {pacientes && pacientes.length ? (
         <> 
            <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Administra tus {''}
              <span className='text-indigo-600 font-bold'>pacientes y citas</span>
            </p>
            {
            pacientes.map(paciente =>(
              <Pacientes 
                key = {paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}
              />
            
            
            ))}
          </>     
        ): (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              comienza agregando pacientes {''}
              <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
            </p>
          </>
        )} 
        
        
      </div>
      
      
     </>  
  )
}

export default ListadoPacientes;