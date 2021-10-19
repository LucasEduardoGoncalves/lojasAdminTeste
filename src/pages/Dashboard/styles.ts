import styled from 'styled-components';

import { shade } from 'polished';

export const Header = styled.header`
    margin: 1rem;

    h1{
        font-size: 1.5rem;
    }

    div{   
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
    }

    input{
        margin-top: 0.3rem;
        margin-right: 0.5rem;

        max-width:13rem;
        width: 100%;

        height: 2.2rem;

        border: 1px solid #d0d0d0;
        border-radius: 1rem;

        padding: 0.5rem;
        font-size: 0.8rem;
    }

    select{
        font-size: 0.8rem;
        background: white;

        width: 12.5rem;
        
        border-radius: 1rem;
        border: 1px solid #d0d0d0;
        
        padding: 1rem;
        margin-top: 0.5rem;

        transition: border-color 0.2s;
        &:hover{
            border-color: ${shade(0.2, '#d0d0d0' )};
        }
    }

    button{
        min-width: 4rem;
        padding: 0.5rem;
        
        font-size: 1.5rem;
        color: white;
        background: #9ed9bc;

        border-radius: 1rem;
        border: 1px solid #66b58e;

        align-items: center;

        transition: border-color 0.2s;
        &:hover{
            border-color: ${shade(0.2, '#66b58e' )};
        }
    }
`;

export const BlocoMaior = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1rem;
        margin: 1rem;

        border-radius: 1rem;
        border-width: 1px;

        background: white;

        .icone {
            font-size: 2.5rem;
            margin: 1rem;  
        }

        .usuario{
            max-width: 18%;

            .itens{
                padding-bottom: 1rem;
                font-size: 0.8rem;
            }
        }

        .conteudoCentro{
            width: 40%;
            font-size: 0.8rem;

            .pedidopendente{
                background: #f6bc77;
                border-radius: 0.5rem;
                margin-top: 2.3rem;

                padding: 0.5rem;
                width: 100%;

                color: white;
                font-size: 0.8rem;
            }

            .color1 {
                background: #654fac;
            }

            .color2 {
                background: #FF0000;
            }

            .color3 {
                background: #f6bc77;
            }
            .color4 {
                background: #FF8400;
            }

            .color5 {
                background: #79F22E;
            }

            .color6 {
                background: #820303;
            }

            .color7 {
                background: #9e25fc;
            }
        }

        .col3{
            padding: 1rem;

            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap: nowrap;

            max-width: 10rem;
            overflow: hidden;

            p{
                font-size: 0.8rem;
            }

            span{
                margin: 0.3rem;
                font-size: 1.5rem;
            }

            button{
                padding: 0.5rem;
                font-size: 0.8rem;
                width: 8rem;
                
                color: white;
                background: #654fac;

                border-radius: 0.5rem;
                border: 1px solid ${shade(0.2, '#654fac')};

                transition: background-color 0.2s;
                &:hover{
                    background: ${shade(0.2, '#654fac')};
                }
            }    
        }
`;

export const AnalizarPedido = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: white;
    
    margin-top: 1rem;
    padding: 1rem;

    max-height: 25rem;

    border-radius: 1rem;

    .xerox {
        position: absolute;
        top: 0.8rem;
        right: 4rem;
        font-size: 1.5rem;

        color: #9e25fc;
        transition: all 0.2s;
        &:hover {
            color: ${shade(0.2, '#9e25fc')}
        }
    }

    .edit {
        position: absolute;
        top: 0.8rem;
        right: 7rem;
        font-size: 1.5rem;

        color: #9e25fc;
        transition: all 0.2s;
        &:hover {
            color: ${shade(0.2, '#9e25fc')}
        }
    }

    .localProduto{
        max-height: 26rem;
        flex: 1.5;

        padding: 1rem;
        overflow: auto;

        &::-webkit-scrollbar{
            width: 0px;
        }

        .produtos{
            display: flex;
            align-items: center;
            padding: 1rem;
            flex: 1;    

            border-bottom: 1px solid #ccc;
            
            > span {
                max-width: 5rem;
                width: 100%;
                max-height: 5rem;
                height: 100%;
                
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .descrição {
                display: flex;
                flex-direction: column;
                justify-content: center;

                gap: 0.5rem;
                
                margin: 0 1rem;
                width: 100%;

                 span {
                    margin-left: 0.25rem;
                }
            }
        }      

        

        img{
            max-height: 5rem;
            height: 100%;

            max-width: 5rem;
        }
    }

    section {
        display: flex;
        flex-flow: column nowrap;
        flex: 1;
        gap: 1rem;

        fieldset {
            border-radius: 1rem;
            padding: 1rem;
            border: 1px solid #ccc;
            font-size: 0.8rem;

            legend {
                padding: 0 0.2rem;
            }

            p + p {
                margin-top: 0.5rem;
            }
        }

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;

            button {
                width: 10rem;
                padding: 0.5rem;

                border-radius: 1rem;
                border: none;

                color: white;
            }

            .excluir {
                background: #f0160b;    
                transition: background-color 0.2s;

                &:hover {
                    background: ${shade(0.2, '#f0160b')};
                }
            }

            .confirmar {
                background: #09c80e;
                transition: background-color 0.2s;

                &:hover {
                    background: ${shade(0.2, '#09c80e')};
                }
            }
        }
    }
`;

