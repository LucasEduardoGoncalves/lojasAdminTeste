import React from 'react';

import { 
    Container,
    Products  
} from './styles';

import topoAnaliseDePedidoImg from '../../assets/topAnalisePedido.png';
import produtosPedidoImg from '../../assets/produtosPedido.png';

const AnaliseDePedido: React.FC = () => {
    return (
        <Container>
            <img src={topoAnaliseDePedidoImg} alt="Aguarde Conexão" width="100%"/>
            <Products>
                <img src={produtosPedidoImg} alt="Aguarde Conexão" width="400px"/>
                <form>
                <input placeholder="Aqui vai estar escrito a observação do usuário"/>

                <input placeholder="Envie uma observação ou link de pagamento"/>
                    
                        <button type="submit">Enviar</button>
                    
            </form>
            </Products>
        </ Container>
    )
};

export default AnaliseDePedido;