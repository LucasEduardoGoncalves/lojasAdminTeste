import styled, { keyframes } from 'styled-components';

import {shade} from 'polished';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    min-width: 200px;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimationDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    min-width: 200px;

    animation: ${appearFromLeft} 1s;

    img {
        width: 100%;
        max-width: 200px;
        border-radius: 50%;
    }

    form {
        margin: 3rem 0;
        width: 340px;
        text-align: center;

        .tooltip {
            position: fixed;
            right: 33rem;
            top: 20rem;
        }
        
        h1 {
            margin-bottom: 24px;
            color: #f4ede8;
        }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.3s;
            font-size: 1rem;

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }

            svg {
                margin-right: 12px;
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

            &:hover{
                background: ${shade(0.2,'#FF9000')};
            }   
        }
    }

`;