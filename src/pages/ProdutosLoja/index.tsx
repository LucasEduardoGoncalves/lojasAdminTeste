import React, { FormEvent, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Header,
    Produtos,
    ProduList,
    ModalDelete,
    ModalDetalhes
} from './styles';
import { Container } from '../../styles/container';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth'; 

import { FiTag, FiPlus } from 'react-icons/fi';
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from 'react-icons/ai';
import { CgMenu } from 'react-icons/cg';
import { RiDeleteBinFill } from 'react-icons/ri';

import Modal from '../../components/Modal';

import toast, { Toaster } from 'react-hot-toast';

interface ProduUnicProp {
    descricao_loja: string;
    id: string;
    loja_id: string;
    observacao_loja: string;
    preco: string;
    preco_promocao: string;
    produto_id: string;
    promocao: boolean;

    produto: {
        id: string;
        name: string;
        image:{ 
            url: string;
        };
    }
}

const ProdutosLoja: React.FC = () => {

    const { user } = useAuth(); 

    const history = useHistory()

    const [ produ, setProdu] = useState<ProduUnicProp[]>([]);

    useEffect(() => {
        api.get(`lojas_produto_list/${user.loja_id}`).then(response=> {  
            setProdu(response.data);
        });  
    },[produ, user.loja_id]);
    
    function backToProdutos() {
        history.push('/catalogo');
    };
    
    const [detalhesProduModal, setDetalhesProduModal] = useState(false);
    const toggleModalInformationProduct = () => setDetalhesProduModal(!detalhesProduModal);

    const [detalhesProdu, setDetalhesProdu] = useState<ProduUnicProp>();
    async function detalhes(produId: ProduUnicProp) {
        setDetalhesProdu(produId);  

        setDescricaoLoja(produId.descricao_loja);
        setObservacaoLoja(produId.observacao_loja);
        setPreco(produId.preco);
        setPrecoPromocao(produId.preco_promocao);
        setCheck(produId.promocao);

        toggleModalInformationProduct(); 
    };

    const [descricaoLoja, setDescricaoLoja ] = useState('');
    const [observacaoLoja, setObservacaoLoja] = useState('');
    const [preco, setPreco] = useState('');
    const [precoPromocao, setPrecoPromocao] = useState('');

    const [check, setCheck] = useState(false);
    function toggleCheck() {
        setCheck(!check)
    }

    function onSubmitProdu (event: FormEvent)  {
        event.preventDefault();
        
        if(!check) {
            setPrecoPromocao('0.00')
        }

       if(check && precoPromocao === '0.00') {
            toast.error("O valor promocional não pode ser igual a zero.")
            setCheck(false);
            return;       
       }

        api.put(`/lojas/${user.loja_id}/produtos/${detalhesProdu?.produto_id}`, { 
            descricao_loja: descricaoLoja,
            observacao_loja: observacaoLoja,
            preco: preco,
            preco_promocao: check ? precoPromocao : '0.00',
            promocao: check,
        })

        toggleModalInformationProduct();
    }

    
    const [deleteProdutoModal, setDeleteProdutoModal] = useState(false);
    const toggleModalDeleteProduct = () => setDeleteProdutoModal(!deleteProdutoModal);
    
    const [deleteProduct, setDeleteProduct] = useState('');
    function informationDeleteProdu(produId: string) {        
        setDeleteProduct(produId);
        toggleModalDeleteProduct();
    };
 
    function handleDeleteProduct() {
       api.delete(`lojas/${user.loja_id}/produtos/${deleteProduct}`);
       toggleModalDeleteProduct();
    };

    const [promocaoItem, setPromocaoItem] = useState(false);


    return (
        <Container>
            <Toaster/>
            <Header>
                <h1>Minha Loja</h1>

                <div>     
                    <button className={`minhasPromocoes ${!promocaoItem && 'click'}`} onClick={() => setPromocaoItem(false)}>
                        <FiTag />  Meus Produtos
                    </button>    

                    <button className={`minhasPromocoes ${promocaoItem && 'click'}`} onClick={() => setPromocaoItem(true)}>
                        <FiTag />  Minhas Promoções
                    </button>

                    <button className="catalogo" onClick={backToProdutos}>
                        <FiPlus/> Ir para o Catalogo
                    </button>
                </div>
            </Header>

            { promocaoItem ? 
            
            <ProduList>
                {produ.filter(product => product.promocao).map(productos =>           
                    <Produtos key={productos.id}>
                        <img src={productos.produto.image.url} alt={productos.produto.name}/>

                        <div>
                            <strong>{productos.produto.name}</strong>
                            <p>R$ {productos.preco}</p>
                        </div>

                        <span>   
                            <RiDeleteBinFill className="excluir" onClick={() => informationDeleteProdu(productos.produto.id)}/>
                            <CgMenu onClick={() => detalhes(productos)} className="detalhes"/>
                        </span>   
                    </Produtos>                          
                )}
            </ProduList> : 
            
            <ProduList>
                {produ.map(productos =>           
                    <Produtos key={productos.id}>
                        <img src={productos.produto.image.url} alt={productos.produto.name}/>

                        <div>
                            <strong>{productos.produto.name}</strong>
                            <p>R$ {productos.preco}</p>
                        </div>

                        <span>   
                            <RiDeleteBinFill className="excluir" onClick={() => informationDeleteProdu(productos.produto.id)}/>
                            <CgMenu onClick={() => detalhes(productos)} className="detalhes"/>
                        </span>   
                    </Produtos>                          
                )}
            </ProduList>}

            

            <Modal isOpen={deleteProdutoModal} onClose={toggleModalDeleteProduct}>
                <ModalDelete>
                    <AiOutlineDelete/>
                    <p>Você realmente quer deletar este produto?</p>
                    <div>
                        <button onClick={toggleModalDeleteProduct} className="cancelar">Cancelar</button>
                        <button onClick={handleDeleteProduct} className="excluir" >Excluir</button>   
                    </div>  
                </ModalDelete>
            </Modal>

            <Modal isOpen={detalhesProduModal} onClose={toggleModalInformationProduct}>     
                <ModalDetalhes>                  
                    <div className="leftSide">
                        <h3>{detalhesProdu?.produto.name}</h3>
                        <img src={detalhesProdu?.produto.image.url} alt="Imagem Do Produto" />
                    </div>
                    
                    <form className="rigthSide" onSubmit={onSubmitProdu}>
                        <fieldset>
                            <legend>Descrição:</legend>                                
                            <textarea 
                                name="descricao_loja"
                                value={descricaoLoja}
                                onChange={e => setDescricaoLoja(e.target.value)}
                            />  
                        </fieldset>

                        <fieldset>
                            <legend>Observação:</legend>                                
                            <textarea
                                name="observacao_loja"
                                value={observacaoLoja}
                                onChange={e => setObservacaoLoja(e.target.value)}
                            />  
                        </fieldset>

                        <div className="valorProduct">
                            <label>
                                Valor do produto
                                <input 
                                    name="preco"
                                    type="number"
                                    value={preco}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPreco(e.target.value)}
                                />
                            </label>

                            <label>
                                Promoção
                                {check ? <AiFillStar onClick={toggleCheck}/> : <AiOutlineStar onClick={toggleCheck}/>}
                            </label>

                            <label>
                                Valor da promoção
                                <input 
                                    name="preco_promocao" 
                                    type="number"
                                    disabled={!check}
                                    value={precoPromocao}
                                    onChange={e => setPrecoPromocao(e.target.value)}
                                />
                            </label>
                        </div>

                        <div className="buttonArea">
                            <button className="salvar" type='submit'>Salvar</button>  
                            <button onClick={toggleModalInformationProduct} className="cancelar">Cancelar</button>                    
                        </div>
                    </form>
                </ModalDetalhes> 
            </Modal>
        </Container>
    )
};

export default ProdutosLoja;