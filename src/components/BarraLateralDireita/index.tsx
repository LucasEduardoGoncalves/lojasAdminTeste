import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { 
    Logout, 
    BarraDireita, 
    TitleEstatisticas,
    Parceiros,
    Menu,
} from './styles';

import { IoMdExit } from 'react-icons/io';

import estatisticas from '../../assets/estatisticas.png';
import bioextratus from '../../assets/bio-direita.jpg';

import { useAuth } from '../../hooks/auth';

const BarraLateralDireita: React.FC = () => {

    const { signOut, content } = useAuth();
    const location = useLocation();

    return (
        <>
        {location.pathname !== '/' && (
            <BarraDireita>
                <Logout> 
                    <Link to='/perfil'>
                        <img src={content?.logo.url} alt="10ejos-Lojas"/>
                    </Link>
                    
                    <div className="button" onClick={signOut}>
                        <IoMdExit/>
                        <p>Logout</p>
                    </div>                                  
                </Logout>     
                    
                <Menu>
                    <img src={estatisticas} alt="parceiros"/>
                </Menu>

                <Parceiros>
                    <TitleEstatisticas>Parceiros</TitleEstatisticas>
                    <a target="_blank" rel="noreferrer" href="https://bioextratus.com.br/">
                        <img src={bioextratus} alt="parceiros"   />
                    </a>
                </Parceiros>
            </BarraDireita>
        )}       
        </>
    )
};

export default BarraLateralDireita;