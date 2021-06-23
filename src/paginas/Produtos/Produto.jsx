import { useState, useEffect } from 'react';
import http from '../../http';
import Card from '../Card'

const Produto = () =>{

    const [produtos, setProdutos] = useState([])
    const obterProduto = () => {
        http.get('produtos').then(response => {
          setProdutos(response.data)
        })
          .catch(erro => {
            console.log(erro);
          })
        }
    
       useEffect(() => {
        obterProduto()
       }, [])

       return (
        <div>
            <h1 className="tituloProdutos">Produtos</h1>
            {produtos.map((item) => <Card key={item.id} nome={item.nome} preco={item.preco}>

            </Card>)}
        </div>
       )
}

export default Produto;