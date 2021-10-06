import React, { useCallback, useRef, useState } from 'react';

import { FiLogIn, FiMail, FiLock, FiAlertCircle } from 'react-icons/fi';
import { Container, Content, AnimationDiv } from './styles';

import logoImg from '../../assets/logo.png';
import Input from "../../components/Input";

import { Form } from '@unform/web'; 
import { FormHandles } from '@unform/core';

import Joi from 'joi';
import messages from '../../utils/messages';
import Tooltip from '../../components/Toolltip';

import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'

interface SignInFormData {
    email: string;
    password: string;
}

const SignIm: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();

    const { addToast } = useToast();

    const [erros, setErrors] = useState('');

    const handleSubmit = useCallback(async(data: SignInFormData) => {   
      
        const schema = Joi.object({
            email: Joi.string().required().messages(messages),
            password: Joi.string().min(6).messages(messages)
        });

        try {
            const value = await schema.validateAsync(data);
            setErrors('');     
            
            await signIn({
                email: value.email,
                password: value.password
            });
            
        } catch(err) {
            if(err instanceof Joi.ValidationError) {
                setErrors(err.message)
                console.log(err);
            } else {
                addToast({
                    type: "error",
                    title: 'Erro na autenticação',
                    description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
                });
            }

        }
    }, [signIn, addToast])

    return (
        <>
        <Container>
            <Content>
                <AnimationDiv>
                    <img src={logoImg} alt="10ejos"/>

                    <Form ref={formRef} onSubmit={handleSubmit}>

                        <h1>Faça seu login</h1>

                        <span className="tooltip" >
                            <Tooltip title={erros}><FiAlertCircle/></Tooltip>
                        </span>

                        <Input icon={FiMail} name="email" placeholder="E-mail"/>
                        <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>
                        
                        <button type="submit">Entrar</button>
                        
                        <a href="forgot"><FiLogIn/>Esqueci minha senha</a>
                    </Form>
                </AnimationDiv>
            </Content> 
        </Container>           
        </>
    );
};

export default SignIm;

// if(value.email === 'admin@10ejos.com.br') {
//     if(value.password === '10ejos-carlos2021') {
//         history.push('/dashboard');
//     } else {
//         setErrors("Senha invalida");
//     }
// } else {
//     setErrors("Email invalido");
// }

// const history = useHistory();

// const suaFuncao = () => {
//   // sua validacao
//   history.push('/dashboard');
// }
// o useHistory vc pega do react-router-dom