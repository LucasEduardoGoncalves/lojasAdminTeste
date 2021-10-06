import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
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
            margin-right: 1rem;

            border-radius: 0.5rem;
            border: 0;

            height: 2.5rem;
            min-width: 15rem;

            color: #FFFFFF;          
            background: #654FAC;
            font-weight: 500;

            cursor: pointer;
            transition: background-color 0.2s;

            svg {
                margin-right: 14px;
            }

            &:hover{
                background: ${shade(0.2,'#654FAC')};
            }
        }

        input {
            display: flex;

            width: 100%;
            height: 2.5rem;

            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 0.5rem;

            padding: 0 10px;
            margin-left: 20px;
        }
    }
`;

export const Produtos = styled.div`
    margin: 1rem;
    margin-top: 2rem;
    max-width: 100%;

    a {
        display: flex;
        align-items: center;
        justify-content: space-between;

        background: #fff;
        border-radius: 1rem;

        width: 100%;
        height: 7rem;
        padding: 1.5rem;
        text-decoration: none;

        transition: transform 0.2s;
        &:hover {
            transform: translateX(0.5rem);
        }
        
        & + a {
            margin-top: 1rem;
        }

        img {
            height: 70%;
            border-radius: 1rem
        }

        div {
            margin-left: 1rem;
            width: 70%;
         
            strong {
                font-size: 20px;
                color:#707070;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top:4px;
            }
        }

        button {
            border-radius: 10px;
            background: #32CD32;
            height: 37px;
            border: 0;
            padding: 0 16px;
            color: #FFFFFF;
            
            width: 20%;
            font-weight: 500;
            margin: 16px;
            cursor: pointer;
            transition: background-color 0.2s;
            margin-left: auto;
            
            svg {
                margin-right: 14px;
            }

            &:hover{
                background: ${shade(0.2,'#32CD32')};
            }
        }

        svg {
            margin-left: auto;
            color: #654FAC;
        }
    }   
`;
