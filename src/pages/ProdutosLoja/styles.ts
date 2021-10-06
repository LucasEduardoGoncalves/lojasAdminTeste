import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`
    margin: 1rem;
    max-width: 100%;

    h1 {
        font-size: 1.5rem;

        margin-left: 1rem;
        margin-bottom: 2rem;
    }

    div {
        display: flex;
        align-items: center;

        button {
            border: 0;
            border-radius: 0.5rem;

            cursor: pointer;

            font-weight: 500;
            font-size: 0.8rem;

            padding: 0.8rem;
            margin-right: 1rem;

            color: #FFFFFF;
            width: 15rem;  

            height: 2.5rem;   
            transition: background-color 0.2s;

            svg {
                margin-right: 1rem;
            }
        }

        .minhasPromocoes {
            background: #654FAC;

            &:hover {
                background: ${shade(0.2,'#654FAC')};
            }
        }

        .catalogo {
            background: #32CD32;

            &:hover {
                background: ${shade(0.2,'#32CD32')};
            }
        }

        .click {
            background: ${shade(0.2,'#654FAC')};
        }
    }
`;

export const ProduList = styled.div`
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const Produtos = styled.div`
    background: #fff;
    text-decoration: none;
    font-size: 0.8rem;

    margin-right: 1rem;
    margin-top: 1rem;

    border-radius: 1rem;

    height: 7rem;
    width: 48%;
    min-width: 20rem;
    padding: 1.3rem;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
        transform: translateX(10px);
    }
    
    & + a {
        margin-top: 16px;
    }

    img {
        height: 4rem;
        border-radius: 50%;
    }

    div {
        margin-left: 2rem;

        strong {
            font-size:1rem;
            color:#707070;
        }

        p {
            font-size: 0.8rem;
            color: #A8A8B3;
            margin-top:0.7rem;
        }
    }    

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: auto;

        .detalhes {
            font-size: 1.5rem;
            color: #9628c6;
            transition: color 0.2s;

            &:hover{
            color: ${shade(0.2,'green')};
            }
        }

        .excluir{
            font-size: 1.2rem;
            color: #9628c6;
            margin-left: 2rem;
            transition: color 0.2s;

            &:hover{
            color: ${shade(0.2,'red')};
            }
        }
    }   
`;

export const ModalDetalhes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    width: 50rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1rem;
    }

    .leftSide {
        h3 {
            font-family: 'Poppins', 'Helvetica', Arial, sans-serif;
            font-size: 1rem;
        }

        img {
            max-height: 18rem;
        }
    }

    .rigthSide {
        width: 50%;  

        fieldset {
            max-width: 30rem;
            width: 100%;
            padding: 0.5rem;

            border: 1px solid #ccc;
            border-radius: 0.5rem;

            legend {
                padding: 0 0.5rem;
                color: #ccc;
            }

            textarea {
                width: 100%;
                min-height: 5rem;

                padding: 0 1rem;
                border: 0;
                font-family: 'Poppins', 'Helvetica', Arial, sans-serif;

                background: transparent;
                resize: none;

                ::-webkit-scrollbar {
                    width: 0;
                }
            }
        }

        .valorProduct {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;

            label {
                display: flex;
                align-items: center;

                input {
                    border: 1px solid #ccc;
                    border-radius: 0.5rem;
                    width: 5rem;
                    margin: 0.5rem;

                    padding: 0.5rem;
                }
            }
        }

        .buttonArea {
            margin-top: 0.5rem;
            width: 100%;

            button {
                width: 45%;
                padding: 0.5rem;

                border: 0;
                border-radius: 0.5rem;
                transition: background-color 0.2s;
            }

            .cancelar {
                background: #ccc;
                
                &:hover {
                    background:  ${shade(0.2, '#ccc')};
                }
            }

            .salvar {
                margin-left: 1rem;
                background: #32CD32;
                color: white;

                &:hover {
                    background: ${shade(0.4, '#32CD32')};
                }
            }
        }
    }
`;

export const ModalDelete = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        color: red;
        font-size: 2.5rem;

        margin: 0 1rem 1rem 1rem;
    }

    p {
        margin-bottom: 1rem;
    }

    div {
        width: 100%;
        
        display: flex;
        justify-content: center;

        gap: 0.5rem;
    }

    button {
        width: 50%;
        padding: 0.5rem;

        border: 0;
        border-radius: 0.5rem;
        transition: background-color 0.2s;
    }

    .cancelar {
        background: #ccc;
        
        &:hover {
            background:  ${shade(0.2, '#ccc')};
        }
    }

    .excluir {
        background: #f0160b;
        color: white;

        &:hover {
            background: ${shade(0.4, '#f0160b')};
        }
    }
`;