import styled from 'styled-components';
import { shade } from 'polished';

export const ModalEditarPass = styled.div`

    min-width: 300px;

    h3 {
        margin: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: space-between;
        }

        input {
            flex: 1;
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: none;
            background-color: #ccc;
        }

        button {
            width: 10rem;
            padding: 0.5rem;

            border-radius: 1rem;
            border: none;
            background: #731ab7;
            transition: all 0.2s;
            margin-top: 1rem;

            &:hover {
                background-color: ${shade(0.2, '#731ab7')};
            }

            color: white;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 2rem;
    width: 100%;

    img {
        height: 12rem;
        border-radius: 1rem;
    }

    div {

        h1 {
            font-family: sans-serif;
            font-size: 2rem;

            margin: 0.5rem;
        }

        ul {
            background: white;          
            border-radius: 1rem;

            width: 28rem;
            padding: 1rem;
            font-size: 0.8rem;
                   
            li {
                list-style: none;
                
                & + li {
                    margin-top: 0.5rem;
                }

                span {
                    color: #707070;
                    margin-left: 0.2rem;
                }
            }
        }
    }
`;

export const Section = styled.section`
    margin: 2rem;
    width: 100%;

    
    .buttonPass {
        width: 10rem;
        padding: 0.5rem;

        border-radius: 1rem;
        border: none;
        background: #ccc;
        transition: all 0.2s;
        margin-top: 1rem;

        &:hover {
            background-color: ${shade(0.2, '#ccc')};
        }

        color: white;
    }

    .parteCima{
        display: flex;
        align-items: center;
        justify-content: space-around;

        width: 100%;

        div {
            background: white;          
            border-radius: 1rem;

            width: 30rem;
            padding: 1rem;
            font-size: 0.8rem;

            p{
                font-size: 0.8rem;
                padding: 0.3rem;

                span {
                    margin-left: 0.2rem;
                    color: #707070;
                }
            }
        }

        ul {
            background: white;          
            border-radius: 1rem;

            width: 18rem;

            padding: 1rem;
            font-size: 0.8rem;

            li {
                list-style: none;
                
                & + li {
                    margin-top: 0.5rem;
                }

                span {
                    color: #707070;
                    margin-left: 0.2rem;
                }
            }
        }
    }

    > h2 {
        font-size: 1.5rem;
        margin: 2rem;
    }

    .description{
        background: white;          
        border-radius: 1rem;

        width: 95%;
        height: 10rem;
        padding: 1rem;
        font-size: 0.8rem;

        padding: 1rem; 
        color: #707070;
    }
`;