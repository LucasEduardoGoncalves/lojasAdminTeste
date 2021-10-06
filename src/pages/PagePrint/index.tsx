import { useHistory } from 'react-router-dom';

import { Main, Container, InfoLoja, InfoUserPay, AreaPedidos, AreaValorFinal, AreaButton, Divider } from './styled';

import { useStore } from '../../hooks/print';
import { useAuth } from '../../hooks/auth';

export function PagePrint() {

    const history = useHistory();

    const { content } = useAuth();
    const { print } = useStore();

    console.log(print);

    return(
        <Container>         
            <Main>
                {print && content && 
                <>              
                    <InfoLoja>
                        <img src={content?.logo.url} alt="" />

                        <div>
                            <p>{content?.name}</p>
                            
                            <span>Cep: {content?.cep}</span>
                            <p>Pedido ID:{print.id}</p>
                        </div>
                    </InfoLoja>

                    <InfoUserPay>
                        <p><strong>Cliente:</strong> <span>{print?.user?.name}</span></p>
                        <p>
                            <strong>Valor a pagar: </strong> 
                            <span>
                                {new Intl.NumberFormat('pt-BR', 
                                    {
                                    style: 'currency',
                                    currency: 'BRL',
                                    }).format(Number(print.valor_final))
                                }
                            </span>
                        </p>
                        <Divider/>

                        <p>
                            <strong>Bairro:</strong>
                            <span>{print.endereco_entrega.district}</span>
                        </p>

                        <p>
                            <strong>Rua:</strong>
                            <span>{print.endereco_entrega.street}</span>
                        </p>

                        <p>
                            <strong>N°:</strong>
                            <span>{print.endereco_entrega.number}</span>
                        </p>

                        <p>
                            <strong>Referencia:</strong>
                            <span>{print.endereco_entrega.referencePoint}</span>
                        </p>
                    </InfoUserPay>

                    <AreaPedidos>
                        <thead>
                            <tr>
                                <th>CÓD.</th>                                
                                <th>Descrição</th>
                            </tr>
                        </thead>

                        <tbody>
                            {!print.itens_pedido && history.push('/')}
                            {print.itens_pedido?.map( item => 
                                <tr key={item?.id}>
                                    <td>{item?.id}</td>
                                
                                    <td className='title'>{item?.title}</td>
                                </tr>
                            )}
                        </tbody>
                    </AreaPedidos>
                    
                    <Divider/>

                    <AreaPedidos>
                        <thead>
                            <tr>
                                <th>CÓD.</th>                                
                                <th>QTD.</th>
                                <th>V.UNIT</th>
                                <th>V.Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {print.itens_pedido?.map( item => 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    
                                    <td>{item.units > 0 ? item.units : '1'}</td>
                                    <td>
                                        {item.valuePromotion ? 
                                        <>
                                            {new Intl.NumberFormat('pt-BR', 
                                                {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(Number(item.valuePromotion))
                                            }
                                        </>
                                        :
                                        <>
                                            {new Intl.NumberFormat('pt-BR', 
                                                {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(Number(item.price))
                                            }
                                        </>
                                        }
                                    </td>
                                    <td>
                                    {item.valuePromotion ? 
                                        <>
                                            {new Intl.NumberFormat('pt-BR', 
                                            {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(item.units > 0 ? Number(item.valuePromotion) * item.units : Number(item.valuePromotion))
                                            }
                                        </>
                                        :
                                        <>
                                            {new Intl.NumberFormat('pt-BR', 
                                            {
                                                style: 'currency',
                                                currency: 'BRL',
                                                }).format(item.units > 0 ? Number(item.valueMoney) * item.units : Number(item.valueMoney))
                                            }
                                        </>
                                        }                     
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </AreaPedidos>

                    <AreaValorFinal>
                        <div>Valor total: 
                            <span>
                                {new Intl.NumberFormat('pt-BR', 
                                    {
                                    style: 'currency',
                                    currency: 'BRL',
                                    }).format(Number(print.valor_total))
                                }
                            </span> 
                        </div>

                        <div>Valor frete: 
                            <span>
                                {new Intl.NumberFormat('pt-BR', 
                                    {
                                    style: 'currency',
                                    currency: 'BRL',
                                    }).format(Number(print.valor_frete))
                                }
                            </span> 
                        </div>

                        <div>Valor de desconto: 
                            <span>
                                {new Intl.NumberFormat('pt-BR', 
                                    {
                                    style: 'currency',
                                    currency: 'BRL',
                                    }).format(Number(print.valor_desconto))
                                }
                            </span> 
                        </div>
                        <div>Valor a pagar:
                            <span>
                                {new Intl.NumberFormat('pt-BR', 
                                    {
                                    style: 'currency',
                                    currency: 'BRL',
                                    }).format(Number(print.valor_final))
                                }
                            </span> 
                        </div>
                    </AreaValorFinal>

                    <h3>10Ejo o site feito para você!</h3>
                    
                    <AreaButton>
                        <button className="confirmar" onClick={() => window.print()}>Imprimir</button>
                        <button className="confirmar" onClick={() => history.push('/')}>Continuar sem imprimir</button>
                    </AreaButton>        
                </>
                }             
            </Main>
        </Container>
    )
}