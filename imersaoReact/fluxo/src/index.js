import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function CadastroVideo() {
  return (
    <div>
      Página de Cadastro de Video
    </div>
  )
}

const Pagina404 = () => (<div>Página Não Encontrada - Erro 404 </div>)

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={App} exact />
      <Route component={Pagina404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

