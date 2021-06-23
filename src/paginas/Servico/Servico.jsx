import { useState, useEffect } from 'react';
import http from '../../http';
import Card from '../Card'

const Servicos = () =>{

    const [servicos, setServicos] = useState([])
    const obterServicos = () => {
        http.get('servicos').then(response => {
          setServicos(response.data)
        })
          .catch(erro => {
            console.log(erro);
          })
        }
    
       useEffect(() => {
        obterServicos()
       }, [])

       return (
        <div>
            <h1 className="topoServicos">Servicos</h1>
            {servicos.map((item) => <Card key={item.id} nome={item.nome} preco={item.preco}>

            </Card>)}
        </div>
       )
}

export default Servicos;