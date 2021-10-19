import React from 'react';

import { Container } from './styles';
import { useEditProdu } from '../../../hooks/editProdu';
import { useForm, SubmitHandler } from "react-hook-form";

interface PropsContainer {
    item: {
        id: string,
        price: string,
        title: string,
        units: number,
        Idloja: string,
        valueMoney: string,
        imageProduct: string,
        valuePromotion: string,
        promotion: boolean;
    }
}

interface PropsInput {
    units: number,
}

const UnicProdu: React.FC<PropsContainer> = ({item}) => {

    const { value } = useEditProdu();
    const { register, handleSubmit } = useForm();

    const edit: SubmitHandler<PropsInput> = (data) => {   
        const array = value.findIndex((object) => object.id === item.id)

        if (data.units > 0 ) {
            value[array] = {
                id: item.id,
                price: String(Number(item.valueMoney) * data.units),
                title: item.title,
                units: data.units,
                Idloja: item.Idloja,
                valueMoney: item.valueMoney,
                imageProduct: item.imageProduct,
                valuePromotion: item.valuePromotion,
                promotion: item.promotion,
            };
        }
    }

    return (
        <Container onSubmit={handleSubmit(edit)}>
            <span>
                <img src={item.imageProduct} alt="10ejos-Lojas" />
                
                <button type="submit">Salvar</button>

            </span>

            <div className="descrição">                           
                <p>{item.title}</p>
                <p> QTD: <input {...register('units')} defaultValue={item.units > 0 ? item.units : '1'}/> </p>
                
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
        </Container>
    );
}

export default UnicProdu;