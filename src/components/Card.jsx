

const Card = ({data, setPatient}) => {
  const {name,owner, email,date,symptoms}=data;
  return (
   <>
   <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="text-gray-700 font-bold uppercase mb-3">Nombre de la mascota: <span className="normal-case font-normal">{name}</span></p>
        <p className="text-gray-700 font-bold uppercase mb-3">Nombre del Propietario : <span className="normal-case font-normal">{owner}</span></p>
        <p className="text-gray-700 font-bold uppercase mb-3">Email: <span className="normal-case font-normal">{email}</span></p>
        <p className="text-gray-700 font-bold uppercase mb-3">Date: <span className="normal-case font-normal">{date}</span></p>
        <p className="text-gray-700 font-bold uppercase mb-3">Sintomas: <span className="normal-case font-normal">{symptoms}</span></p>

        <div className="flex justify-between mt-10">
          <button type="button" 
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
          onClick={()=>{
            setPatient(data)
          }}
          >Editar</button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md">Editar</button>
          
        </div>
      </div>
   </>
  )
}

export default Card
