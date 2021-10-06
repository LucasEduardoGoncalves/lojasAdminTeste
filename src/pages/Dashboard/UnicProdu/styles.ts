import styled from 'styled-components';

export const Container = styled.form`
    max-height: 26rem;
    flex: 1.5;

    padding: 1rem;
    overflow: auto;
    display: flex;

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
        margin-right: 1rem;
    }
`;
