import styled from 'styled-components';
import {shade} from 'polished';

export const Produtos = styled.div`
    display: flex;
    align-items: center;

    margin-top: 3rem;
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

`;

export const ImagemProdutos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #363636;

    img {
        border: 1px solid #ccc;
        border-radius: 1rem;

        padding: 0.5rem;
        width: 17rem;
        height: 20rem;

        margin: 0.5rem; 
        border-radius: 1rem;
    }
`;

export const DadosProdutos = styled.div`
    display: flex;  
    flex-direction: column;

    form{

        span {
            color: red;
            font-size: 10px;
            margin-left: 1rem;
        }

        fieldset {
            height: 6rem;
            width: 30rem;

            line-height: 1.3rem;

            margin: 0 1rem 1rem 1rem;
            padding: 0.2rem 1rem 0 1rem;

            border: 1px solid #ccc;
            border-radius: 1rem;

            legend {
                color: #ccc;
                padding: 0.3rem;
            }
        }

        textarea {
            font-family: 'Poppins', 'Helvetica', Arial, sans-serif;

            border: 0;
            width: 100%;
            height: 100%;

            resize: none;
            
            &::-webkit-scrollbar{
                width: 0;
                opacity: 0;
            }
        }

        label {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: 100%;
            margin-left: 1rem;

            & + label {
                margin-top: 0.5rem;
            }

            p {
                color: black;
                font-size: 0.8rem;
            }

            .input {
                color: #ccc;
            }

            div {
                display: flex;
                align-items: center;
                margin-left: 5rem;

                svg { 
                    font-size: 1.5rem;
                    margin-left: 1rem;
                    color: #654fac;
                }
            }

            input {
                border: 1px solid #ccc;
                border-radius: 1rem;

                padding: 0.3rem;
                margin-left: 0.2rem;

                width: 5rem;
            }

            input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button { 
                -webkit-appearance: none;
            }
        }

        button{
            border-radius: 10px;
            border: 0;
            width: 40%;
            font-weight: 500;
            margin: 16px;
            height: 37px;
    
            padding: 0 16px;
            color: #FFFFFF;
            transition: background-color 0.2s;
        }

        .cancelar{
            background: #FF9000;

            &:hover{
                background: ${shade(0.2,'#FF9000')};
            }
        }

        .incluir{
            background: #32CD32;

            &:hover{
                background: ${shade(0.2,'#32CD32')};
            }
        }
    }
`;