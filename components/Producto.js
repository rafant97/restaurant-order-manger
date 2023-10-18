import Image from "next/image"
import {formatearDinero} from "../helpers/index.js"
import useQuiosco from "../hooks/useQuiosco.js"

const Producto = ({producto}) => {
  const {handleSetProducto, handleChangeModal} = useQuiosco()
  const {nombre, imagen, precio, id} = producto
  return (
    <div className="border p-3">
      <Image 
        src={`/assets/img/${imagen}.jpg`} 
        width={400} 
        height={500} 
        alt={`Imagen Platillo ${nombre}`} 
       />

       <div className="p-5">
         <h3 className="text-2xl font-bold">{nombre}</h3>
         <p className="mt-5 font-black text-amber-500 text-4xl">
            {formatearDinero(precio)}
         </p>

         <button
           type="button"
           className="bg-indigo-600 hover:bg-indigo-800 
           text-white w-full mt-5 p-3 uppercase font-bold"
           onClick={() => {
            handleSetProducto(producto)
            handleChangeModal()
           }}
         >Agregar 
         </button>
       </div>
    </div>
  )
}

export default Producto
