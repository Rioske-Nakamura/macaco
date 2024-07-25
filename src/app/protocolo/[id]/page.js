import Image from "next/image";
export default async function Product({params}){
    const response = await fetch("http://localhost:3000/api" + params.id);
    const data = await response.json()
    return(

        <div>
            <p>{data.nome}</p>
            <p>{data.piloto}</p>
            <p>{data.classe}</p>
            <p>{data.habilidades.nome}</p>
            <p>{data.habilidades.descricao}</p>
            <p>{data.estrategia}</p>
          
        </div>
    )
}