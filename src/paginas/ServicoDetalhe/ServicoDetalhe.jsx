import http from '../../http';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../Card";

const ServicoDetalhe = () =>{
    const { id } = useParams()
    const[servico, setServico] = useState({})
    useEffect(() => {
        http.get('servicos/'+id).then(response => {
          setServico(response.data)
        })
    },[id])

    return (
        <div>
            <Card nome={servico.nome} preco={servico.preco}>
            </Card>

        </div>
    )
}

export default ServicoDetalhe;