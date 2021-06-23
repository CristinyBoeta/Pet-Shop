import { Link } from 'react-router-dom'

const CardServico = ({nome, preco, id}) => {
    return(
        <div>
            <h3>{nome}</h3>
            <div>{preco}</div>

            <Link to={`/servicos/${id}`}>Ver detalhes</Link>
        </div>
    )
}

export default CardServico;