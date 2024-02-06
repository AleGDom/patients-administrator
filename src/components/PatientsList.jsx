import { useEffect } from "react"
import Card from "./Card"


const PatientsList = ({patients,setPatient, deletePatient}) => {
  
  useEffect(()=>{
    if(patients.length>0){
      console.log('Nuevo paciente')
    }  
  },[patients])
  return (  
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-hidden">
      {patients.length ? (
        <>
            <h2 className="font-bold text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-lg font-semibold text-center mt-5 mb-8">Administra tus pacientes y <span className="text-indigo-600 font-bold">Citas</span></p>
            <div className="md:h-screen overflow-y-scroll">
              {
                patients.map((patient)=>{
                  return( <Card 
                            key={patient.id} 
                            data={patient}
                            setPatient={setPatient}
                            deletePatient={deletePatient}
                            /> )
                })
              }  
            </div>
        </>
      ): (
        <>
            <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>
            <p className="text-lg font-semibold text-center mt-5 mb-8">Comienza agregando pacientes y <span className="text-indigo-600 font-bold">Apareceran en este lugar</span></p>
        </>
      ) }
      
  </div>
    
  )
}

export default PatientsList
