

const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-bold text-3xl text-center">Seguimiento de pacientes</h2>
        <p className="mt-5 text-lg text-center font-semibold mb-8" >Añade pacientes y {' '}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
            <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 ">
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="PetName">Nombre de Mascota</label>
                    <input 
                    id="PetName"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text" placeholder="Nombre de la mascota"/>
                </div>
    
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="Name">Nombre del Propietario</label>
                    <input 
                    id="Name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="text" placeholder="Nombre del Propietario"/>
                </div>
    
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="email">Email</label>
                    <input 
                    id="email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="email" placeholder="Email"/>
                </div>
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="date">Fecha de alta</label>
                    <input 
                    id="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date"/>
                </div>
                <div className="mb-5">
                    <label className="block font-bold text-gray-700 uppercase" htmlFor="symptoms">Sintomas</label>
                    <textarea 
                    id="symptoms"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    type="date" placeholder="Describe los sintomas" />
                </div>
                <input className="bg-indigo-600 hover:bg-indigo-700 w-full text-2xl py-2 cursor-pointer text-white rounded-md transition-colors " type="submit" value={'Agregar Paciente'} />
    
            </form>
        </div>
   
    
  )
}

export default Form
