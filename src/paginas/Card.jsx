import './estilos.css'

const Card = (props) => {
    return <div className="card">
        <p>
        {props.nome}
        </p>
        <p>
        {props.preco}
        </p>
    </div>
  }
  
  export default Card