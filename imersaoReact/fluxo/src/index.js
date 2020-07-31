/* eslint-disable linebreak-style */
import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import {

  BrowserRouter as Router,

  Switch,

  Route,

} from 'react-router-dom';

import Home from './pages/Home/Home';

import CadastroVideo from './pages/cadastro/Video';

import CadastroCategoria from './pages/cadastro/Categoria';

// Desafio Master Blaster

const Pagina404 = () => (

  <div>

    Página Não Encontrada - Erro 404

  </div>

);

ReactDOM.render(

  <Router>

    <Switch>

      <Route path="/" component={Home} exact />

      <Route path="/cadastro/video" component={CadastroVideo} />

      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={Pagina404} />

    </Switch>

  </Router>,

  document.getElementById('root'),

);
