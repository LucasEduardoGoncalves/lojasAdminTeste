import React, { useState, FormEvent, useEffect } from 'react';

import {
    Header,
    Section,
    ModalEditarPass
} from './styles';

import { useAuth } from '../../hooks/auth';

import { Container } from '../../styles/container';

import Modal from '../../components/Modal';
import toast, { Toaster } from 'react-hot-toast';
import api from '../../services/api';

interface disableProps {
    0:{
        id: number;
        loja_id: number;
        preco_1: string,
        frete_1: string,
        preco_2: string,
        frete_2: string,
        frete_3: string,
        frete_gratis: boolean,
        createdAt: string,
    }
    length: number;
}

const Perfil: React.FC = () => { 

    const { user, content } = useAuth();
    const [valueFrete, setValueFrete] = useState<disableProps>({} as disableProps);

    useEffect(() => {
        api.get(`/frete_lojas_list/${user.loja_id}`).then(response=> {  
            setValueFrete(response.data);
        });  
    },[valueFrete, user.loja_id]);

    const [isOpenPasswordModal, setIsOpenPasswordModal] = useState(false);

    const [passwordAntigo, setPasswordAntigo] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function toggleModal() {
        setIsOpenPasswordModal(!isOpenPasswordModal)
    }

    async function handleTogglePasswordUser(e: FormEvent) {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            toast.error('Senhas não coencidem')
            return;
        }

        try {
            const troca = await api.put(`/dv1/user_loja/reset_psw/${user.id}`, {
                email: user.email,
                oldPassword: passwordAntigo,
                newPassword: confirmPassword,
            })

            console.log(troca);

            toast.success('Senhas trocadas com sucesso')

            setPasswordAntigo('')
            setNewPassword('')
            setConfirmPassword('')
            toggleModal()
        } catch (err) {
            toast.error('ocorreu um erro')
            // alert(err)
        }
    }

    return (
        <>
        <Toaster />
        <Container>          
            <Header>
                <img src={content?.logo.url} alt=""/>

                <div>                           
                    <h1>{content?.name}</h1>

                    <ul>
                        <li>Seu email: <span>{user?.email}</span></li>
                        <li>Seu Telefone-1: <span>{content?.telefone}</span></li>
                        <li>Seu Telefone-2: <span>{content?.telefone_2}</span></li>
                        <li>Seu Site: <span>{content?.site}</span></li>
                    </ul>
                </div>
            </Header>

            <Section>
                <div className='parteCima'>

                    {valueFrete?.length > 0 ? (
                        <>
                            {valueFrete[0].frete_gratis ? (
                                <div>
                                    <p>O seu Frete é gratuito</p>
                                </div>
                            ) : (
                            <div>
                                <p>Para compras até <span>R${valueFrete[0].preco_1}</span> o valor do frete é <span>R${valueFrete[0].frete_1}</span></p>
                                <p>Para compras de <span>R${valueFrete[0].preco_1}</span> até <span>R${valueFrete[0].preco_2} </span> o valor do frete é <span>R${valueFrete[0].frete_2}</span></p>
                                <p>Para compras acima de <span>R${valueFrete[0].preco_2}</span> o valor do frete é <span>R${valueFrete[0].frete_3}</span></p>                    
                            </div>
                            )}
                        </>
                    ) : (
                        <div>
                            <p>Você não possui frete cadastrado</p>
                        </div>
                    )}

                    <ul>
                        <li>Bairro: <span>{content?.bairro}</span></li>
                        <li>Rua: <span>{content?.rua}</span></li>
                        <li>N°: <span>{content?.numero_rua}</span></li>
                        <li>CEP: <span>{content?.cep}</span> </li>
                    </ul>
                </div>

                <h2>Descrição:</h2>
                <p className="description">{content?.descricao}</p>
                <button className="buttonPass" onClick={() => toggleModal()}>Mudar senha</button>            
            </Section>            

        </Container>

        <Modal
            isOpen={isOpenPasswordModal}
            onClose={toggleModal}
        >
            <ModalEditarPass>
            <h3>Mudar senha</h3> 

            <form onSubmit={handleTogglePasswordUser}>
                <label>
                    Senha antiga
                    <input type="password" onChange={e => setPasswordAntigo(e.target.value)} value={passwordAntigo}/>
                </label>

                <label>
                    Senha Nova
                    <input type="password" onChange={e => setNewPassword(e.target.value)} value={newPassword}/>
                </label>

                <label>
                    Repita sua senha
                    <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </label>

                <button type="submit">Salvar</button>
            </form>
            </ModalEditarPass>
        </Modal>
        </>
    )
};

export default Perfil;
