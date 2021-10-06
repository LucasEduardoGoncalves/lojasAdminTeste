import React from 'react';

import {
        MenuLateral, 
        Menu
   } from './styles';

import { Link, useLocation } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import bioExtratus from '../../assets/bio-esquerda.jpg';

import { FiTruck, FiShoppingBag, FiShoppingCart, FiTag, FiMessageCircle } from "react-icons/fi";

const BarraLateralEsquerda: React.FC = () => {

    const location = useLocation();
    
    return (
        <>
        {location.pathname !== '/' && (
        <MenuLateral>
            <img src={logoImg} alt="10ejos-Lojas" width="100px" height="100px" />

                <Menu>
                        <Link to="/produtos-loja" className={`${location.pathname === '/produtos-loja' && 'roxo'}`}>
                                <FiShoppingBag />
                                Minha Loja
                        </Link>

                        <Link to="/dashboard" className={`${location.pathname === '/dashboard' && 'roxo'}`}>
                                <FiShoppingCart />
                                Pedidos
                        </Link>

                        <Link to="/entregas" className={`${location.pathname === '/entregas' && 'roxo'}`}>
                                <FiTruck />
                                Em Entrega
                        </Link>

                        <Link to="/catalogo" className={`${location.pathname === '/catalogo' && 'roxo'}`}>
                                <FiTag />
                                Catalogo
                        </Link>

                        <a target="_blank" rel="noreferrer" href="https://bioextratus.com.br/sublinhas/anticaspa-tratamento-e-hidratacao">
                                <img src={bioExtratus} alt="news" width="150px" height="310px" />
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5532988332178&text=Ol%C3%A1%2C%20preciso%20de%20ajudar%20com%20o%2010ejos.">
                                <FiMessageCircle />
                        suporte
                        </a>
                </Menu>
        </MenuLateral>
        )}        
        </>          
    )
};

export default BarraLateralEsquerda;