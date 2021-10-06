import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;

    background: #f4ede8;
    color: #666360;

    width: 100%;
    height: 56px;
    padding: 0 16px;

    border: 2px solid #f4ede8;
    border-radius: 10px;
      
    font-weight: 500;
    transition: background-color 0.3s;

    ${props => props.isFocused && css`
        border-color: #FF9000;
        color:#FF9000;
    `}

    ${props => props.isFilled && css`
        color:#FF9000;
    `}
    
    & + div {
        margin-top: 8px;
    }

    input {
        border: none;
        background: transparent;
        flex: 1;

        &::placeholder{
            color: #666360
        }
    }

    svg {
        margin-right: 1rem;
    }
`;