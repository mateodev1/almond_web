import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row justify-around gap-24 md:gap-0">
      <div className="md:w-1/2">
        <p className=" text-gray-300 pb-4">EXPERTOS EN DESARROLLO WEB</p>
        <h1 className="text-4xl font-bold pb-10">
          Creamos sitios webs atractivos y funcionales
        </h1>
        <h2 className="text-xl text-gray-200 pb-24">
          Llevamos tu emprendimiento o empresa al siguiente nivel.
        </h2>

        <Button className="bg-[#EFAE48] hover:bg-[#EB9814] text-xl font-semibold p-6 transition-all flex gap-2">
          Comunicate por WhatsApp <FaWhatsapp className="text-2xl" />
        </Button>
      </div>
      <div className="md:w-2/5 h-full flex flex-col gap-10 p-10 border border-gray-500 rounded-lg  bg-[#1C1B22]">
        <p className="text-center font-semibold">
          Empezá ahora. Contanos sobre tu proyecto.
        </p>
        <input type="text" placeholder="Nombre completo*" className="bg-[#3C3947] border-gray-500 p-4 rounded-lg" />
        <input type="text" placeholder="Correo electronico*" className="bg-[#3C3947] border-gray-500 p-4 rounded-lg" />
        <input type="text" placeholder="Numero de WhatsApp*" className="bg-[#3C3947] border-gray-500 p-4 rounded-lg" />
        <input type="text" placeholder="¿Como podemos ayudarte?" className="bg-[#3C3947] border-gray-500 p-4 rounded-lg" />
        <div className="flex justify-center">
          <Button className="border-2 border-[#C8A162] bg-[#151419] text-[#C8A162] text-lg p-3 hover:bg-[#EB9814] hover:text-black animate-pulse	 ">
            Enviar Mensaje
          </Button>
        </div>
      </div>
    </div>
  );
}
