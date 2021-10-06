import styled from 'styled-components';

export const Container = styled.div`
    flex-grow: 1;
    padding: 1rem;
    
    border-radius: 1rem;
    background: #f4f4f4;

    min-width: 50rem;
    width: 100%;
    height: 100vh;

    overflow: auto;
    &::-webkit-scrollbar{
        width: 0px;
    }

    @media(print) {
        display: none;
    }
`;