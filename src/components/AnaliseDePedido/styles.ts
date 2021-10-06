import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const Products = styled.div`
    display: flex;
    img {
        
        border-radius: 30px;
        margin-left: 30px;
        margin-top: 30px;
    }
    form {
        margin 70px 30px;

        width: 500px;
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

           
            
        }

        
    }
 
`;
export const BarraDireita = styled.div`
    padding-top: 33px;
    background-color: #F5F6FA;
    width: 360px;
    border-radius: 30px;
`;

export const Logout = styled.div`
        background-color: #FFFFFF;
        border-radius: 30px;
        display: flex;
        align-items: center;
        width: 340px;
        height: 110px;
        margin-left:10px;
       

        img {
            height: 80%;
            border-radius: 30px;
            margin-left: 10px;
        }

        svg {
            margin-left: 100px;
        }

`;

export const TextLogout =styled.div`
        color: #707070;
        margin-left: 10px;
`;

export const Estatisticas = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #FFFFFF;
        border-radius: 30px;

        align-items: flex-start;
        width: 340px;
        height: 550px;
        margin-left:10px;
        margin-top:20px;
       

        img {
            height: 80%;
            border-radius: 30px;
            margin-left: 10px;
        } 

`;

export const TitleEstatisticas = styled.h1`
    font-size: 20px;
    color: #ABABFD;
    margin-top: 20px;
    margin-left: 25px;
`;

export const Parceiros = styled.div`
display: flex;
flex-direction: column;
background-color: #FFFFFF;
border-radius: 30px;

justify-content: center;
width: 340px;
height: 230px;
margin-left:10px;
margin-top:15px;
margin-botton:10px;


img {
    width: 80%;
    border-radius: 60px
    margin-top: 10px;
    margin-left: 10%;
    margin-botton: 10px;
} 
`;
