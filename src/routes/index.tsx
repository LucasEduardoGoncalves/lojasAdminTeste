import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route'

import Dashboard from '../pages/Dashboard';
import { Catalogo } from '../pages/Catalogo';
import { PagePrint } from '../pages/PagePrint';
import SignIn from '../pages/SignIn';
import Entregas from '../pages/Entregas';
import IncluirProduto from '../pages/IncluirProduto';
import ProdutosLoja from '../pages/ProdutosLoja';
import SignUp from '../pages/SignUp';
import Perfil from '../pages/Perfil';

const Routes: React.FC = () => (      
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/dashboard" exact component={Dashboard} isPrivate/>
        <Route path="/catalogo" component={Catalogo} isPrivate/>
        <Route path="/login" component={SignIn} isPrivate/>
        <Route path="/entregas" component={Entregas} isPrivate/>
        <Route path="/incluir-produto/:id" component={IncluirProduto} isPrivate/>
        <Route path="/produtos-loja/" component={ProdutosLoja} isPrivate/>
        <Route path="/signup/" component={SignUp} isPrivate/>
        <Route path="/perfil" component={Perfil} isPrivate/>
        <Route path="/imprimir" component={PagePrint} isPrivate/>
    </Switch>
);
export default Routes;