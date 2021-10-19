import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { format } from 'date-fns';

import { 
    Header,     
    BlocoMaior,       
    AnalizarPedido,
} from './styles';
import { Container } from '../../styles/container';

import { GrDropbox } from 'react-icons/gr';

import Modal from '../../components/Modal';

import { useAuth } from '../../hooks/auth';
import { useStore } from '../../hooks/print';
import api from '../../services/api';

import { GiEmptyHourglass } from 'react-icons/gi';
import { ModalDelete } from '../ProdutosLoja/styles';
import { AiOutlineDelete, AiFillPrinter, AiFillEdit } from 'react-icons/ai';

import { useEditProdu } from '../../hooks/editProdu';
// import { useEditProduFixed } from '../../hooks/editProduFixed';

import UnicProdu from './UnicProdu'; 

import toast, { Toaster } from 'react-hot-toast'

type pedidoProps = {
    id: string,
    forma_pagamento: number,
    cupom_desconto: string,
    valor_frete: string,
    valor_total: string,
    valor_desconto: string,
    valor_final: string,
    status: number,
    created_at: string,
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
        units: number,
        Idloja: string,
        valueMoney: string,
        promotion: false
        imageProduct: string,
        valuePromotion: string,
    }]
}

interface arrayUnit {
        id: string,
        price: string,
        title: string,
        units: number,
        Idloja: string,
        valueMoney: string,
        promotion: false
        imageProduct: string,
        valuePromotion: string,
}

const Dashboard: React.FC = () => {

    const history = useHistory();

    const { user } = useAuth();
    const { mudarValor } = useStore();
    const { addArray, value } = useEditProdu();
    // const { valueFixed, addArrayValueFixed } = useEditProduFixed()

    const [pedidoUnico, setPedidoUnico] = useState<pedidoProps>();
    const [pedidoUnicoEdit, setPedidoUnicoEdit] = useState<pedidoProps>();
    const [pedidos, setPedidos] = useState<pedidoProps[]>([]);

    // const [pedidoUnicoFixed, setPedidoUnicoFixed] = useState<arrayUnit[]>();

    const [isModalOPen, setModalState] = useState(false);
    const toggleModal = () => setModalState(!isModalOPen);

    const [isModalOPenEdit, setModalStateEdit] = useState(false);
    const toggleModalEdit = () => setModalStateEdit(!isModalOPenEdit);

    const [cancelPedidoModal, setCancelPedidoModal] = useState(false);

    const [cancelPedidoId, setCancelPedidoId] = useState('')

    function SetModalCancel(id: string) {
        setCancelPedidoId(id);
        toggleModalDeleteProduct();
    }

    function toggleModalDeleteProduct() {
        setCancelPedidoModal(!cancelPedidoModal)
    }

    useEffect(() => {
        api.get(`/stores/${user.loja_id}/orders`).then(response => {
            setPedidos(response.data);
        });
    },[pedidos, user.loja_id]);
    
    function PedidoUnico(data: pedidoProps) {
        console.log(data);
        setPedidoUnico(data);
        toggleModal();
    };

    function editPedidoUnic(data: pedidoProps) {
        addArray(data.itens_pedido);
        localStorage.setItem('@10ejos: dadosArrayPedido', JSON.stringify((data.itens_pedido)));
        setPedidoUnicoEdit(data);
        toggleModalEdit();
    };

    async function goToPrint(data: pedidoProps) {
        mudarValor(data);
        await api.put(`/stores/${user.loja_id}/orders/${data.id}/status/3`)
        history.push('/imprimir');
    };

    async function changeValue(dataId: string, change: number) {
        await api.put(`/stores/${user.loja_id}/orders/${dataId}/status/${change}`)
        toggleModal();
        setCancelPedidoModal(false);
    };

    const [valueSelect, setValueSelect] = useState('8');


    function submitReabrirPedido() {

        const useri = localStorage.getItem('@10ejos: dadosArrayPedido');
        const userParse: arrayUnit[] = useri !== null && JSON.parse(useri)

        const algumaCoisa = userParse.map(pedido => {
            const array = value.findIndex((object) => object.id === pedido.id);

            var returni = {}

            if (pedido.units === value[array].units) {
                
                return null;
            }

            if (pedido.units !== value[array].units) {
                var returnid = {
                    id: value[array].id,
                    price: value[array].price,
                    title: value[array].title,
                    units: {
                        from: pedido.units === undefined ? '1' : pedido.units,
                        to: value[array].units
                    },
                    Idloja: value[array].Idloja,
                    changeFor: "R$0,00",
                    promotion: value[array].promotion,
                    valueMoney: value[array].valueMoney,
                    imageProduct: value[array].imageProduct,
                    valuePromotion: value[array].valuePromotion
                } 

                returni = returnid;
            }

            return returni;
        })

        const ada = algumaCoisa.filter(item => item)

        if(ada.length === 0 ) {
            toast.error("Não é possivel salvar sem alguma alteração")
            return;
        }

        const summary = value?.reduce((acc, transaction) => { 
            if(transaction.promotion) {
                acc.total += Number(transaction.valuePromotion) * Number(transaction.units);
            } else {
                acc.total += Number(transaction.price);
            }

            return acc;
            },{
              total: 0 
            }
        )

        api.put(`/stores/${user.loja_id}/orders/${pedidoUnico?.id}/reabrir-pedido`, {
            id: pedidoUnico?.id,
            forma_pagamento: pedidoUnico?.forma_pagamento,
            cupom_desconto: pedidoUnico?.cupom_desconto,
            valor_frete: pedidoUnico?.valor_frete,
            valor_total: pedidoUnico?.valor_total,
            valor_desconto: pedidoUnico?.valor_desconto,
            valor_final: summary.total,
            status: 10,
            endereco_entrega: pedidoUnico?.endereco_entrega,
            itens_pedido: value,
            alteracoes:algumaCoisa,
            created_at: pedidoUnico?.created_at,
            user: pedidoUnico?.user
        })

        toggleModal();
        toggleModalEdit();
    }

    return (
        <Container>
            <Toaster />

            <Header>
                <h1>Pedidos em análise</h1>

                <select value={valueSelect} onChange={e => setValueSelect(e.target.value)}>
                    <option value='1'>Aberto (pelo usuário)</option>
                    <option value='2'>Cancelado (pelo usuário)</option>
                    <option value='3'>Aceito</option>
                    <option value='4'>Preparando para entrega</option>
                    <option value='5'>Em entrega</option>
                    <option value='6'>Concluido</option>
                    <option value='7'>Cancelado pela loja</option>
                    <option value="10">Reaberto pela loja</option>
                    <option value="8">Todos</option>
                </select>
            </Header>

            {pedidos?.filter(pedidos => pedidos.status === Number(valueSelect)).length === 0 && valueSelect !== '8' &&           
                <div>
                    <GiEmptyHourglass size={50}/> 
                    <h2>Pelo visto você está sem Pedidos...</h2>
                </div> 
            }

            {pedidos?.length === 0 &&           
                <div>
                    <GiEmptyHourglass size={50}/> 
                    <h2>Pelo visto você está sem Pedidos...</h2>
                </div> 
            }   

            {valueSelect === '8' &&           
                 <>
                 {pedidos?.map( pedido => 
                    <BlocoMaior key={pedido.id}>
                        <div className="icone"> <GrDropbox /> </div>        
                        <div className="usuario">
                            <div className="itens"><strong>Usuario: {pedido.user.name}</strong></div>
                            <div className="itens"><em>PedidoID: {pedido.id}</em></div>
                        </div>

                        <div className="conteudoCentro">
                            <div>
                                {format(new Date(pedido.created_at), " dd 'de' MMMM', ' HH:mm'h'")}                                
                            </div>      

                            {pedido.status === 1 && <div className={`pedidopendente ${pedido.status === 1 && 'color1'}`}>Aberto (pelo usuário)</div>}
                            {pedido.status === 2 && <div className={`pedidopendente ${pedido.status === 2 && 'color2'}`}>Cancelado (pelo usuário)</div>}
                            {pedido.status === 3 && <div className={`pedidopendente ${pedido.status === 3 && 'color3'}`}>Aceito</div>}
                            {pedido.status === 4 && <div className={`pedidopendente ${pedido.status === 4 && 'color3'}`}>Preparando para entrega</div>}
                            {pedido.status === 5 && <div className={`pedidopendente ${pedido.status === 5 && 'color4'}`}>Em entrega</div>}
                            {pedido.status === 6 && <div className={`pedidopendente ${pedido.status === 6 && 'color5'}`}>Concluido</div>}
                            {pedido.status === 7 && <div className={`pedidopendente ${pedido.status === 7 && 'color6'}`}>Cancelado pela loja</div>}
                            {pedido.status === 10 && <div className={`pedidopendente ${pedido.status === 10 && 'color7'}`}>Pedido reaberto</div>}
                        </div>

                        <div className="col3">
                            <p>Total do pedido:</p>
                            <span>R$ {Number(pedido.valor_final).toFixed(2)}</span>
                            <button onClick={() => PedidoUnico(pedido)}>Analisar pedido</button> 
                        </div>
                    </BlocoMaior>    
                    )}           
                </>
            }

            {valueSelect !== '8' && pedidos?.filter(pedidos => pedidos.status === Number(valueSelect)).length !== 0 &&
                <>
                {pedidos?.filter(pedido => pedido.status === Number(valueSelect)).map( pedido =>               
                    <BlocoMaior key={pedido.id}>
                        <div className="icone"> <GrDropbox /> </div>        
                        <div className="usuario">
                            <div className="itens"><strong>Usuario: {pedido.user.name}</strong></div>
                            <div className="itens"><em>PedidoID: {pedido.id}</em></div>
                        </div>

                        <div className="conteudoCentro">
                            <div>
                                {format(new Date(pedido.created_at), " dd 'de' MMMM', ' HH:mm'h'")}                                
                            </div>      

                            {pedido.status === 1 && <div className={`pedidopendente ${pedido.status === 1 && 'color1'}`}>Aberto (pelo usuário)</div>}
                            {pedido.status === 2 && <div className={`pedidopendente ${pedido.status === 2 && 'color2'}`}>Cancelado (pelo usuário)</div>}
                            {pedido.status === 3 && <div className={`pedidopendente ${pedido.status === 3 && 'color3'}`}>Aceito</div>}
                            {pedido.status === 4 && <div className={`pedidopendente ${pedido.status === 4 && 'color3'}`}>Preparando para entrega</div>}
                            {pedido.status === 5 && <div className={`pedidopendente ${pedido.status === 5 && 'color4'}`}>Em entrega</div>}
                            {pedido.status === 6 && <div className={`pedidopendente ${pedido.status === 6 && 'color5'}`}>Concluido</div>}
                            {pedido.status === 7 && <div className={`pedidopendente ${pedido.status === 7 && 'color6'}`}>Cancelado pela loja</div>}
                            {pedido.status === 10 && <div className={`pedidopendente ${pedido.status === 10 && 'color7'}`}>Pedido reaberto</div>}
                        </div>

                        <div className="col3">
                            <p>Total do pedido:</p>
                            <span>R$ {Number(pedido.valor_final).toFixed(2)}</span>
                            <button onClick={() => PedidoUnico(pedido)}>Analisar pedido</button> 
                        </div>
                    </BlocoMaior>    
                 )}           
               </>
            }

            <Modal isOpen={isModalOPen} onClose={toggleModal} isButtonClose>                      
                <AnalizarPedido>
                    <div className="localProduto">
                        {pedidoUnico?.itens_pedido.map(item =>
                        <div className="produtos" key={item.id}>
                            <span>
                                <img src={item.imageProduct} alt="10ejos-Lojas" />
                            </span>

                            <div className="descrição">                           
                                <p>{item.title}</p>
                                <p>QTD: {item.units > 0 ? item.units : '1'}</p>
                                
                                <strong>
                                    <p>V. Unit:
                                        <span>
                                            {new Intl.NumberFormat('pt-BR', 
                                                {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(Number(item.valueMoney))
                                            }
                                        </span>
                                    </p>

                                    <p>V. Promoção:                                    
                                        {item.valuePromotion ? 
                                            <span>
                                            {new Intl.NumberFormat('pt-BR', 
                                                {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(Number(item.valuePromotion))
                                            }
                                            </span>
                                        : '---' }         
                                    </p>
                                        

                                    <p>V. Total:  {item.valuePromotion ? 
                                        <span>
                                            {new Intl.NumberFormat('pt-BR', 
                                            {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(item.units > 0 ? Number(item.valuePromotion) * item.units : Number(item.valuePromotion))
                                            }
                                        </span>
                                        :
                                        <span>
                                            {new Intl.NumberFormat('pt-BR', 
                                            {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(item.units > 0 ? Number(item.valueMoney) * item.units : Number(item.valueMoney))
                                            }
                                        </span>
                                        } 
                                    </p>
                                </strong>
                            </div>
                            {/* <hr/> */}
                        </div>
                        )}
                    </div>

                    <AiFillEdit onClick={() => pedidoUnico && editPedidoUnic(pedidoUnico)} className='edit'/>
                    <AiFillPrinter onClick={() => pedidoUnico && goToPrint(pedidoUnico)} className='xerox'/>
                    
                    <section>
                        <fieldset>
                            <legend>User</legend>                    
                            <p>Cliente: {pedidoUnico?.user.name}</p>
                            <p>Cliente ID: {pedidoUnico?.user.id}</p>
                            <p>ID Pedido: {pedidoUnico?.id}</p>
                        </fieldset>

                        <fieldset>
                            <legend>Entrega</legend>                    
                            <p>Bairro: {pedidoUnico?.endereco_entrega.district}</p>
                            <p>Rua: {pedidoUnico?.endereco_entrega.street}</p>
                            <p>N°: {pedidoUnico?.endereco_entrega.number}</p>
                            <p>Referencia: {pedidoUnico?.endereco_entrega.referencePoint}</p>
                        </fieldset>

                        <fieldset className="modoPagamento">
                            <legend>Modo de pagamento</legend>
                            {pedidoUnico?.forma_pagamento === 2 && <p>Pix</p>}
                            {pedidoUnico?.forma_pagamento === 1 && <p>Dinheiro</p>}
                            {pedidoUnico?.forma_pagamento === 3 && <p>Cartão de Crédito</p>}
                            {pedidoUnico?.forma_pagamento === 4 && <p>Cartão de Débito</p>}
                        </fieldset>
                        
                        <div>
                            {pedidoUnico?.status !== 7 && pedidoUnico?.status !== 2  && <button className="excluir" onClick={() => pedidoUnico && SetModalCancel(pedidoUnico?.id)}>Cancelar Pedido</button>}   
                            {pedidoUnico?.status === 1 && <button onClick={() => pedidoUnico && goToPrint(pedidoUnico)} className="confirmar">Confirmar Pedido</button>}            
                            {pedidoUnico?.status === 3 && <button onClick={() => changeValue(pedidoUnico.id, 4)} className="confirmar">Preparando para entrega</button>}
                            {pedidoUnico?.status === 4 && <button onClick={() => changeValue(pedidoUnico.id, 5)} className="confirmar">Em entrega</button>}
                            {pedidoUnico?.status === 5 && <button onClick={() => changeValue(pedidoUnico.id, 6)} className="confirmar">Concluido</button>}         
                        </div>
                    </section>    
                </AnalizarPedido>
            </Modal>       

            <Modal isOpen={cancelPedidoModal} onClose={toggleModalDeleteProduct}>
                <ModalDelete>
                    <AiOutlineDelete/>
                    <p>Você realmente quer cancelar este pedido?</p>
                    <div>
                        <button onClick={toggleModalDeleteProduct} className="cancelar">Cancelar</button>
                        <button onClick={() => changeValue(cancelPedidoId, 7)} className="excluir" >Excluir</button>   
                    </div>  
                </ModalDelete>
            </Modal>

            <Modal isOpen={isModalOPenEdit} onClose={toggleModalEdit} isButtonClose>                      
                <AnalizarPedido>
                    <div className="localProduto">
                        {pedidoUnicoEdit?.itens_pedido.map(item =>
                            <UnicProdu key={item.id} item={item}/> 
                        )}
                    </div>
                    
                    <section>
                        <fieldset>
                            <legend>User</legend>                    
                            <p>Cliente: {pedidoUnicoEdit?.user.name}</p>
                            <p>Cliente ID: {pedidoUnicoEdit?.user.id}</p>
                            <p>ID Pedido: {pedidoUnicoEdit?.id}</p>
                        </fieldset>

                        <fieldset>
                            <legend>Entrega</legend>                    
                            <p>Bairro: {pedidoUnicoEdit?.endereco_entrega.district}</p>
                            <p>Rua: {pedidoUnicoEdit?.endereco_entrega.street}</p>
                            <p>N°: {pedidoUnicoEdit?.endereco_entrega.number}</p>
                            <p>Referencia: {pedidoUnicoEdit?.endereco_entrega.referencePoint}</p>
                        </fieldset>

                        <fieldset className="modoPagamento">
                            <legend>Modo de pagamento</legend>
                            {pedidoUnicoEdit?.forma_pagamento === 2 && <p>Pix</p>}
                            {pedidoUnicoEdit?.forma_pagamento === 1 && <p>Dinheiro</p>}
                            {pedidoUnicoEdit?.forma_pagamento === 3 && <p>Cartão de Crédito</p>}
                            {pedidoUnicoEdit?.forma_pagamento === 4 && <p>Cartão de Débito</p>}
                        </fieldset>
                        
                        <div>
                             <button className="confirmar" onClick={submitReabrirPedido}>Salvar</button>            
                             <button className="excluir" onClick={toggleModalEdit}>Cancelar</button>         
                        </div>
                    </section>    
                </AnalizarPedido>

                {/* <ModalDelete>
                    <AiFillEdit/>
                    <p>Prezado(a) parceiro(a) 10ejo!,</p>

                    <p>Essa funcionalidade vai estar disponível nos próximos dias. Estamos  trabalhando para uma aplicação conforme o seu 10ejo!</p>

                    <p>Aqui você será capaz de alinhar o pedido do cliente com o seu estoque.</p>

                    <p>Estamos todos os dias pensando em fazer mais e melhor.</p>

                    <p>At.te,</p>
                    <p>Equipe 10ejo.</p>
                    
                    <div>
                        <button onClick={toggleModalEdit} className="cancelar">Cancelar</button>
                          
                    </div>  
                </ModalDelete> */}
            </Modal>       

            <Modal isOpen={cancelPedidoModal} onClose={toggleModalDeleteProduct}>
                <ModalDelete>
                    <AiOutlineDelete/>
                    <p>Você realmente quer cancelar este pedido?</p>
                    <div>
                        <button onClick={toggleModalDeleteProduct} className="cancelar">Cancelar</button>
                        <button onClick={() => changeValue(cancelPedidoId, 7)} className="excluir" >Excluir</button>   
                    </div>  
                </ModalDelete>
            </Modal>
        </Container>     
    )
};

export default Dashboard;