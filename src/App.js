import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './paginas/Home/Home'
import Produto from './paginas/Produtos/Produto'
import Servico from './paginas/Servico/Servico'
import Pag404 from './paginas/Pagina404/Pag404'
import Navbar from './paginas/Home/Navbar'
import ProdutoDetalhe from './paginas/ProdutoDetalhe/ProdutoDetalhe'
import ServicoDetalhe from './paginas/ServicoDetalhe/ServicoDetalhe'
import Cadastro from './paginas/Login/Cadastro'
import Login from './paginas/Login/index'
import './paginas/estilos.css'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/cadastro">
        <Cadastro/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/produtos">
        <Produto/>
      </Route>
      <Route exact path="/servicos">
        <Servico/>
      </Route>
      <Route path="/produtos/:id">
        <ProdutoDetalhe/>
      </Route>
      <Route path="/servicos/:id">
        <ServicoDetalhe/>
      </Route>
      <Route>
        <Pag404/>
      </Route>
    </Switch>
    </BrowserRouter>
 

  );
}

export default App;
