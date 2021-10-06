import React, { useEffect, useState } from 'react';

import { 
    Header,     
    BlocoMaior,       
    AnalizarPedido,
} from './styles';
import { Container } from '../../styles/container';

import { GrDropbox } from 'react-icons/gr';

import Modal from '../../components/Modal';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { GiEmptyHourglass } from 'react-icons/gi';

type pedidoProps = {
    id: string,
    forma_pagamento: number,
    cupom_desconto: string,
    valor_frete: string,
    valor_total: string,
    valor_desconto: string,
    valor_final: string,
    status: number,
    endereco_entrega: {
        id: string,
        number: string,
        street: string,
        country: string,
        district: string,
        referencePoint: string,
    },
    user: {
        id: string,
        name: string,
    },
    itens_pedido: [{
        id: string,
        price: string,
        title: string,
        loja_id: string,
        valueMoney: string,
        imageProduct: string,
        valuePromotion: string,
    }]
}

const Entrega: React.FC = () => {

    const { user } = useAuth();

    const [pedidoUnico, setPedidoUnico] = useState<pedidoProps>();
    const [pedidos, setPedidos] = useState<pedidoProps[]>([]);

    const [isModalOPen, setModalState] = useState(false);
    const toggleModal = () => setModalState(!isModalOPen);

    useEffect(() => {
        api.get(`/stores/${user.loja_id}/orders`).then(response => {
            setPedidos(response.data);
        });
    },[pedidos, user.loja_id]);
    
    function PedidoUnico(data: pedidoProps) {
        setPedidoUnico(data);
        toggleModal();
    };

    return (
        <Container>
            <Header>
                <h1>Pedidos em entrega</h1>
            </Header>

            {pedidos?.filter(pedidos => pedidos.status === 5).length === 0 
            ?(           
                <div>
                    <GiEmptyHourglass size={50}/> 
                    <h2>Pelo visto você está sem Pedidos...</h2>
                </div>
            ) : ( 
                <>
                {pedidos?.filter(pedidos => pedidos.status === 5).map( pedido =>
                    <BlocoMaior key={pedido.id}>
                        <div className="icone"> <GrDropbox /> </div>        

                        <div className="usuario">
                            <div className="itens"><strong>Usuario: {pedido.user.name}</strong></div>
                            <div className="itens"><em>PedidoID: {pedido.id}</em></div>
                        </div>

                        <div className="conteudoCentro">
                            <div>Hoje 10:45 AM</div>               

                            <div className="linhabaixo">
                             <div className={`pedidopendente 'color4'}`}>Em entrega</div>
                            </div>
                        </div>

                        <div className="col3">
                            <p>Total do pedido:</p>
                            <span>R$ {pedido.valor_total}</span>
                            <button onClick={() => PedidoUnico(pedido)}>Analisar pedido</button> 
                        </div>
                    </BlocoMaior>    
                )}           
                </>
            )}         

            <Modal isOpen={isModalOPen} onClose={toggleModal} isButtonClose>                      
                <AnalizarPedido>
                    <div className="localProduto">
                        {pedidoUnico?.itens_pedido.map(item =>
                        <div className="produtos" key={item.id}>
                            <img src={item.imageProduct} alt="10ejos-Lojas" />

                            <div className="descrição">                           
                                <p>{item.title}</p>
                                <strong>R${item.valueMoney}</strong>
                            </div>
                            <hr/>
                        </div>
                        )}
                    </div>
                    
                    <section>
                        <fieldset>
                            <legend>Entrega</legend>                    
                            <p>Bairro:{pedidoUnico?.endereco_entrega.district}</p>
                            <p>Rua:{pedidoUnico?.endereco_entrega.street}</p>
                            <p>N°:{pedidoUnico?.endereco_entrega.number}</p>
                            <p>Referencia:{pedidoUnico?.endereco_entrega.referencePoint}</p>
                        </fieldset>

                        <fieldset className="modoPagamento">
                            <legend>Modo de pagamento</legend>
                            {pedidoUnico?.forma_pagamento === 1 && <p>Pix</p>}
                            {pedidoUnico?.forma_pagamento === 2 && <p>Dinheiro</p>}
                            {pedidoUnico?.forma_pagamento === 3 && <p>Cartão de Crédito</p>}
                            {pedidoUnico?.forma_pagamento === 4 && <p>Cartão de Débito</p>}
                        </fieldset>
                        
                        <div>
                            <button className="excluir" onClick={toggleModal}>Cancelar Pedido</button>               
                            <button className="confirmar">Concluir pedido</button>
                        </div>
                    </section>    
                </AnalizarPedido>
            </Modal>          
        </Container>     
    )
};

export default Entrega;