import styled from 'styled-components';

import { shade } from 'polished';

export const BarraDireita = styled.div`
    border-radius: 1rem;
    background-color: #f4f4f4;
    
    padding: 1rem;
    align-items: center;

    max-width: 18rem;
    width: 100%;

    opacity: 1;

    @media print {
        display: none;
    }
`;

export const Logout = styled.div`
    background-color: #FFFFFF;
    border-radius: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 16rem;
    width: 100%;

    max-height: 6rem;
    height: 100%;
       
    img {
        max-height: 4rem;
        border-radius: 1rem;
        margin-left: 1rem;
    }

    /* .ico {
        color: #707070;
        font-size: 1.5rem;

        margin-left: 100%;
        cursor: pointer;

        &:hover{
            color:  ${shade(0.5,'#707070')};
        }
    } */

    .button {
        display: flex;
        align-items: center;

        color: #707070;
        background: transparent;
        border: 0;

        svg {
            font-size: 1rem;
            margin-right: 0.5rem;
        }

        margin-right: 3rem;
        transition: color 0.2s;

        &:hover{
            color: ${shade(0.5, '#707070')};
        }
    }

`;

export const Menu = styled.nav`
    max-width: 16rem;
    width: 100%;
    height: 23rem;
    margin-top: 1rem;

    background: #FFFFFF;
    border-radius: 1rem;

    img{
        align-items: center;

        padding: 1rem;
        max-width: 16rem;
    }
`;


export const TitleEstatisticas = styled.h1`
    font-size: 1rem;
    color: #ABABFD;
    
    padding-top: 1rem;
    margin-left: 1rem;
`;

export const Parceiros = styled.div`
    background-color: #FFFFFF;
    border-radius: 1rem;

    max-width: 16rem;
    width: 100%;

    max-height: 11rem;
    height: 100%;

    margin-top: 1rem;

    img {
        max-width: 14rem;
        margin: 1rem;
    } 
`;