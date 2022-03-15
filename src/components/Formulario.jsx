
import { useState, useEffect } from 'react';
import Error from './Error';





function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const[error, setError] = useState(false);

  useEffect(()=>{
   if(Object.keys(paciente).length>0){
     setNombre(paciente.nombre)
     setPropietario(paciente.propietario)
     setEmail(paciente.email)
     setAlta(paciente.alta)
     setSintomas(paciente.sintomas)
   }
  },[paciente])


  const generateId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion del formulario

    if([nombre, propietario, email, alta, sintomas].includes('')){
      console.log('Hay al menos un campo vacío');
      setError(true);
      return;
    }
    setError(false);

    const objetoPaciente = {
      nombre, 
      propietario,
      email, 
      alta,
      sintomas
    }
    if(paciente.id){
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados);
      setPaciente({});
    }else{
      objetoPaciente.id = generateId();
      setPacientes([...pacientes, objetoPaciente])
    }

    
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');

  }

  return (
    <div className="Formulario md:w-1/2 lg:w-2/5 ml-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y {''}
        <span className='text-indigo-600 font-bold text-lg'>Administralos</span>
      </p>
      <form 
      
        onSubmit = {handleSubmit} className='bg-white shadow-md rounded py-10 px-5'>
          {error && <Error mensaje='Todos los campos son obligatorios'/>

            
         }
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-grey-700 uppercase'>Nombre mascota</label>
          <input
            id="mascota" 
            type="text"
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder:-grey-400 rounded-md'
            value = {nombre}
            onChange = {(e) => setNombre(e.target.value)}
          />
          
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-grey-700 uppercase'>Nombre del propietario</label>
          <input
            id="propietario" 
            type="text"
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder:-grey-400 rounded-md'
            value = {propietario}
            onChange = {(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-grey-700 uppercase'>Email</label>
          <input
            id="email" 
            type="email"
            placeholder='Email'
            className='border-2 w-full p-2 mt-2 placeholder:-grey-400 rounded-md'
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='alta' className='block text-grey-700 uppercase'>Alta</label>
          <input
            id="alta" 
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder:-grey-400 rounded-md'
            value = {alta}
            onChange = {(e) => setAlta(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-grey-700 uppercase'>Síntomas</label>
          <textarea
            id="sintomas" 
            type="text"
            placeholder='Escribe tus síntomas'
            className='border-2 w-full p-2 mt-2 placeholder:-grey-400 rounded-md'
            value = {sintomas}
            onChange = {(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className='bg-indigo-600 w-full h-10 text-white  uppercase font-bold rounded hover:bg-indigo-700 cursor-pointer transition-all'
          value= {paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>

  )
}

export default Formulario;