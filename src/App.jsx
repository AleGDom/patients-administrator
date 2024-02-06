import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"



function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient,setPatient]=useState({});

  const deletePatient = (id)=>{
    const Updates= patients.filter(patient=>patient.id!==id);
    setPatients(Updates);
  }

  useEffect(()=>{
    localStorage.setItem('patients',JSON.stringify(patients));
  },[patients])

  return (
      <div className="container mx-auto mt-12">
      <Header/>
      <div className="mt-12 md:flex">
        <Form setPatients={setPatients} patients={patients} patient={patient} setPatient={setPatient}/>
        <PatientsList patients={patients} setPatient={setPatient} deletePatient={deletePatient}/>
      </div>
      </div>
  )
}

export default App
