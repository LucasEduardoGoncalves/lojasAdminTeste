import styled from 'styled-components';

export const Container = styled.div`
    flex-grow: 1;
    
    border-radius: 1rem;
    background: #f4f4f4;

    min-width: 50rem;
    width: 100%;
    height: 100vh;

    overflow: auto;
    &::-webkit-scrollbar{
        width: 0px;
    }

    display: flex;
    justify-content: center;
    font-size: 12px;

    @media(print) {
        position: relative;
        width: 100vh;
    }
`;

export const Main = styled.main`
    height: 100%;
    max-width: 25rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media print {
        position: absolute;
        top: 0%;
        left: 0%;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        button {
            display: none;
        }
    }
`;


export const InfoLoja = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid black;

    img {
        height: 3rem;
        width: 3rem;
        margin-right: 2rem;
    }
`;

export const InfoUserPay = styled.section`
    display: block;
    width: 100%;

    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid black;

    p {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        font-weight: bold;
    }
`;

export const AreaPedidos = styled.table`
    width: 100%;
    border-spacing: 0.5rem;
    white-space: nowrap;

    .title {
        max-width: 9rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    th {
        text-align: left;
        font-weight: normal;
    }
`;

export const Divider = styled.div`
    content: '';
    height: 1px;
    width: 100%;
    background: black;
    margin: 0.5rem 0;
`;

export const AreaValorFinal = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 0.2rem;
    width: 100%;

    padding: 0.5rem 0;
    margin-bottom: 1rem;

    border-top: 1px solid black;
    border-bottom: 1px solid black;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &:last-child {
            font-weight: bold;
        }
    }

    span {
        margin-left: 0.5rem;
    }
`;

export const AreaButton = styled.div`
    margin-top: 1rem;

    button {
        justify-content: space-between;
        width: 10rem;
        border-radius: 1rem;        
        text-align: center;
        color: white;
        padding: 0.5rem;
        border-style: solid;
        font-size: 0.8rem;
        margin-left: 3px;

    }

    .confirmar {
        background: #09c80e;
        border-color: #14a11e;
        border-width: 1px;
        &:hover{
        background: #14a11e;
        }
    }
`;