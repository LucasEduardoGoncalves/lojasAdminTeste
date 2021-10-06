import styled from 'styled-components';
import hairBackground from '../../assets/hairBackground.jpg';
import {shade} from 'polished';

export const Container = styled.div`
    height: 100vh; /*Faz com que a div ocupe 100% da area visível*/

    display: flex;
    align-items: stretch; /*faz com o que os ícones dentro do Box tenho o tamanho total*/
    justify-content: center;
    
    img {
        
        border-radius: 50%;
        Heigth: 30%;
        width: 30%;
        
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*place-content: center; deixa tudo no centro*/

    width: 100%;
    max-width: 700px;

    form {
        margin 70px 0;
        width: 340px;
        text-align: center;
        a{
            text-decoration: none;
            color: #F4EDE8;
        }

        h1 {
            margin-bottom: 24px;
            color: #FFFFFF;
        }

        input {
            border-radius: 10px;
            background: #FFFFFF;
            border: 2px solid #FFFFFF;
            padding: 16px;
            width: 100%;

            & + input {
                margin-top: 7px;
            }
        }
        button {
            border-radius: 10px;
            background: #FF9000;
            height: 56px;
            border: 0;
            padding: 0 16px;
            color: #FFFFFF;
            width: 100%;
            font-weight: 500;
            margin-top: 16px;
            cursor: pointer;
            transition: background-color 0.2s;

            &: hover{
                background: ${shade(0.2,'#FF9000')};
            }
            
        }

        
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${hairBackground}) no-repeat center;
    background-size: cover;
`;