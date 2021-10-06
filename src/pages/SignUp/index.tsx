import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Form} from '@unform/web';

import logoImg from '../../assets/logo.png';

import {Container, Content } from './styles';

const SignUp: React.FC = ()=>{
    const [name, setName] = useState('');

    function handleSubmit(data:object): void{
        console.log(name);
        
    }
    return(
        <Container>
        <Content>
            <img src={logoImg} alt="10ejos"/>

            <Form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <input 
                    
                    value={name}
                    onChange={(ev)=>setName(ev.target.value)}
                    placeholder="Nome"/>
                
                <input placeholder="E-mail"/>

                <input type="password"placeholder="Senha"/>
                    
                        <button type="submit">Cadastrar</button>
                    
                
            </Form>

            <a href="login">
                <FiArrowLeft />
                Voltar Para Logon
            </a>
        </Content>

        
    </Container>
   
);
}

export default SignUp;