import {useEffect, useState} from 'react';
import Error from './Error';


const Form = ({setPatients, patients, setPatient ,patient}) => {

  const [name, setName]=useState('');  
  const [owner, setOwner]=useState('');  
  const [email, setEmail]=useState('');  
  const [date, setDate]=useState('');  
  const [symptoms, setSymptoms]=useState(''); 
  
  const [err, setErr]=useState(false);

  useEffect(()=>{
    if(Object.keys(patient).length>0){
        setName(patient.name);
        setOwner(patient.owner);
        setEmail(patient.email);
        setDate(patient.date);
        setSymptoms(patient.symptoms);
    }
  },[patient])
  
  
  const generateId = ()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random+fecha;
  }
   
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        if([name, owner,email,date,symptoms].includes('')){
            console.log('Hay al menos un campo vacio')
            return setErr(true);   
        } 

        setErr(false);

        const PatientObject={
            name,
            owner,
            email,
            date,
            symptoms,
            
        }

        if(patient.id){
            PatientObject.id=patient.id;
            const Updates = patients.map(element=>{
                if(element.id === patient.id){
                    return PatientObject;
                } else{
                    return element;
                }
            })

            setPatients(Updates);            

        } else{
            PatientObject.id=generateId();
            setPatients([...patients,PatientObject]);
        }
        setPatient({});
        
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');

    }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-bold text-3xl text-center">Seguimiento de pacientes</h2>
        <p className="mt-5 text-lg text-center font-semibold mb-8" >Añade pacientes y {' '}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
            <form 
            onSubmit={handleSubmit}
            action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 ">

                {
                    err&&(<Error>JIJIJA</Error>)
                }

                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="PetName">Nombre de Mascota</label>
                    <input 
                    id="PetName"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text" 
                    placeholder="Nombre de la mascota"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    />
                </div>
    
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="Owner">Nombre del Propietario</label>
                    <input 
                    id="Owner"
                    name='owner'
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text" 
                    placeholder="Nombre del Propietario"
                    value={owner}
                    onChange={(e)=>{
                        setOwner(e.target.value)
                    }} />
                </div>
    
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="email">Email</label>
                    <input 
                    id="email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}  />
                </div>
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="date">Fecha de alta</label>
                    <input 
                    id="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date"
                    value={date}
                    onChange={e=>{
                        setDate(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="symptoms">Sintomas</label>
                    <textarea 
                    id="symptoms"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date" placeholder="Describe los sintomas"
                    value={symptoms}
                    onChange={e=>{
                        setSymptoms(e.target.value);
                    }} />
                </div>
                <input className="bg-indigo-600 hover:bg-indigo-700 w-full text-2xl py-2 cursor-pointer text-white rounded-md transition-colors"
                type="submit" 
                value={patient.id ? 'Editar Paciente' : 'Agregar paciente'} />
    
            </form>
        </div>
   
    
  )
}

export default Form
