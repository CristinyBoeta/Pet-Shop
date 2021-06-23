import http from '../../http';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from '../Card'

const ProdutoDetalhe = () =>{
    const { id } = useParams()
    const[produto, setProduto] = useState({})
    useEffect(() => {
        http.get('produtos/'+id).then(response => {
          setProduto(response.data)
        })
    },[id])

    return (
        <div>
            <Card nome={produto.nome} preco={produto.preco}>
            </Card>

        </div>
    )
}

export default ProdutoDetalhe;