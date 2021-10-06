import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './styles/global'
//Vinde Espírito Santo!
import Routes from './routes';

import BarraLateralDireita from './components/BarraLateralDireita';
import BarraLateralEsquerda from './components/BarraLateralEsquerda';

import AppProvider from './hooks';

const App: React.FC =()=> (
  <Router>
    <AppProvider>
        <div className="Global">
          <BarraLateralEsquerda/>
          <Routes/>
          <BarraLateralDireita/>
        </div>
    </AppProvider>     
    <GlobalStyle/>
  </Router>
); 

export default App;
