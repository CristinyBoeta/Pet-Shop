import img from '../img/franquias-de-pet-shop.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <img className="logo" src={img}></img>
                <div className="titulo">
                    <h1 >Pet shop dos Bichinhos</h1>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>

                            </li>
                            <li>
                               <Link to="/">Início</Link>
                            </li>
                            <li>
                                <Link to="/produtos">Produtos</Link>
                            </li>
                            <li>
                                <Link to="/servicos">Serviços</Link>
                            </li>
                            <li>
                                <Link to="/cadastro">Cadastre-se</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;