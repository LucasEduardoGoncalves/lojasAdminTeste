import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'; 
import api from '../../services/api';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { useForm, SubmitHandler } from "react-hook-form";

import { Container } from '../../styles/container';

import CurrencyInput from 'react-currency-masked-input';

import { 
    Produtos,
    ImagemProdutos,
    DadosProdutos
} from './styles';
import { useToast } from '../../hooks/toast';
import toast, { Toaster } from 'react-hot-toast';

interface ProdutoParams {
    id: string;
}

interface Productos{
    name: string,
    codigo: string;
    descricao: string;
    image: {
        url: string;
    };
}

interface PostProdutosProps {
    descricao_loja: string;
    observacao_loja: string;
    preco: string;
    preco_promocao: string;
    loja_id: string;
    produto_id: string;
    promocao: boolean;
}

interface dataReturnProps {
    data: {
        productExists: boolean;
        message: string;
    }
}



const IncluirProdutos: React.FC = () => {

    const { addToast } = useToast();

    const { params } = useRouteMatch<ProdutoParams>();
    const [ produ, setProdu] = useState<Productos | null>(null);
    
    const history = useHistory();
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [check, setCheck] = useState(false);

    function toggleCheck() {
        setCheck(!check)
    };

    const onSubmitProdu: SubmitHandler<PostProdutosProps> = async data => {
        data.promocao = check;
        
        if(!check) {
            data.preco_promocao = '0.00'
        }

        if(data.preco === '0.00') {
            toast.error('O valor do produto não pode ser igual a 0.00')
            return;
        }

        if(check && data.preco_promocao === '0.00') {
            toast.error("O valor promocional não pode ser igual a zero.")
            setCheck(false);
            return;       
       }

        console.log(data);

        const dataReturn: dataReturnProps = await api.post('loja_produto', data);

        if(dataReturn.data.productExists) {
            addToast({
                type: "error",
                title: 'Erro de inserção de produto',
                description: dataReturn.data.message
            });
        } else {
            history.push('/produtos-loja');
        }
    };
    
    useEffect(()=>{
        api.get(`produto/${params.id}`).then(response=> {
            setProdu(response.data);
        });      
    },[params.id]);

    function backToProdutos() {
        history.push('/catalogo');
    };
    
    return (      
        <Container>            
            <Toaster />
            <Produtos>      
                <ImagemProdutos>                                                 
                    <p>{produ?.name}</p> 
                    <img src={produ?.image.url} alt="produto"/>
                    <p>{produ?.codigo}</p>                                                                               
                </ImagemProdutos>    

                <DadosProdutos>        
                    <form onSubmit={handleSubmit(onSubmitProdu)}>  
                        {errors.descricao_loja && <span>Confira se o campo foi preenchido</span>}                          
                        <fieldset>
                            <legend>Descrição:</legend>                                
                            <textarea {...register("descricao_loja", {required: true} )} defaultValue={produ?.descricao} />                                                 
                        </fieldset>
                                                    
                        <fieldset>
                            <legend>Observações:</legend>
                            <textarea {...register("observacao_loja")} defaultValue={'Sem observação'}/>  
                        </fieldset>                                  
                
                        <label>
                            <p>Valor do Produto R$</p>
                            <CurrencyInput {...register("preco")} defaultValue={'0.00'}/>

                            <div>
                                <p>Promoção</p>
                                {check ? <AiFillStar onClick={toggleCheck}/> : <AiOutlineStar onClick={toggleCheck}/>}
                            </div>
                        </label>
                       
                        <label>
                            <p className={!check ? 'input' : '' }>Preço Promocional R$</p>
                            <CurrencyInput disabled={!check} {...register("preco_promocao")} defaultValue={'0.00'}/>      
                        </label> 
                                 

                        <input {...register("loja_id")} type="hidden" defaultValue={user.loja_id}/>
                        <input {...register("produto_id")} type="hidden" defaultValue={params.id}/>
                        <input {...register("promocao")} type="hidden" defaultValue={`${check}`}/>
                        <input {...register("site")} type="hidden" defaultValue={"www"}/>

                        <div className="buttons">
                            <button type="button" className="cancelar" onClick={backToProdutos}>Cancelar</button>
                            <button type="submit" className="incluir">Incluir Produto</button>                                                                  
                        </div>                           
                    </form>                       
                </DadosProdutos>                        
            </Produtos>
        </Container>
    )
};

export default IncluirProdutos;