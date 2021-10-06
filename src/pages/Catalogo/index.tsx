import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Header,  
         Produtos,
} from './styles';
import { Container } from '../../styles/container';

import api from '../../services/api';

import {FiShoppingBag, FiTag } from "react-icons/fi";

interface Productos{
    id: string;
    name: string;
    descricao: string;
    categoria: string;
    image: {
        url: string;
    };
}

export const Catalogo: React.FC = () => {
    const [produ, setProdu] = useState<Productos[]>([]);
    const [search, setSearch] = useState('');

    const history = useHistory();
    
    useEffect(()=>{
        if (search !==''){
            api.get(`buscaprodutos/${search}`).then(response=> {
            if (response.data) {
                setProdu(response.data);               
            } 
        });  
        } else {
            api.get(`productslist`).then(response=> {
                if (response.data) {
                 setProdu(response.data.rows);
                } 
             });  
        }
    },[search]);

   function goToProdutosLoja() {
        history.push('/produtos-loja')
   }

    return (
        <Container>
            <Header>
                <h1> Catálogo de Produtos</h1>
                            
                <div>
                    <button onClick={goToProdutosLoja}>
                        <FiShoppingBag />
                        Minha Loja
                    </button>

                    <button onClick={goToProdutosLoja}>
                        <FiTag />
                        Minhas Promoções
                    </button>
                
                    <input 
                        type="search" 
                        placeholder="Buscar"
                        value={search}
                        onChange={(ev)=>setSearch(ev.target.value)}
                    />
                </div>
            </Header>

            
            <Produtos>
            {produ.map(productos =>(
                    <Link key={productos.id} to={`/incluir-produto/${productos.id}`}>
                                           
                    <img
                        src={productos.image.url}
                        alt={productos.name}
                    />
                    
                    <div>
                        <strong>{productos.name}</strong>
                        <p>{productos.categoria}</p>
                    </div>
                        
                    <button>
                            Incluir Produto
                    </button>                    
                    </Link>
                ))}
            </Produtos>
        </Container>
    );
};