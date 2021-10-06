import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';

import api from '../services/api'

interface AuthState {
    token: string;
    user: UserProps;
}

interface UserProps {
    email: string;
    id: string;
    loja_id: string;
    name: string;
    permissao: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface StoreItemsProps {
    bairro: string;
    categoria: {
        id: string;
        name: string;
    };
    cep: string;
    cidade_id: number;
    cnpj: string;
    descricao: string;
    email: string;
    id: number;
    inscricao_social: string;
    logo: {
        url: string;
        name: string;
        path: string;
    };
    name: string;
    nome_fantasia: string;
    numero_rua: number;
    rua: string;
    telefone: number;
    telefone_2: string;
    site: string;
    logo_id: number;
}

interface AuthContextData {
    user: UserProps;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    userDadosLoja(): Promise<void>;
    content: StoreItemsProps | undefined;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@10ejos: token');
        const user = localStorage.getItem('@10ejos: user');

        if(token && user){
            return {token, user: JSON.parse(user)}
        }

        return {} as AuthState
    });

    const [content, setContent] = useState<StoreItemsProps>();
    const userDadosLoja = useCallback(async() => {
        if(data.user){
            const info= await api.get<StoreItemsProps>(`/lojas_list/${data.user.loja_id}`);
            setContent(info.data)
        }       
    }, [data.user]);

    const signIn = useCallback(async({email, password}) => {
        const response = await api.post('/sessions_lojas', {
            email,
            password
        })
        const { token , user } = response.data;

        localStorage.setItem('@10ejos: token', token);
        localStorage.setItem('@10ejos: user', JSON.stringify(user));

        setData({token, user});
    },[]);

    const signOut = useCallback(() => {
        localStorage.removeItem('@10ejos: token');
        localStorage.removeItem('@10ejos: user');

        setData({} as AuthState);
    },[]);

    useEffect(() => { userDadosLoja(); }, [userDadosLoja])

    return(
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, userDadosLoja, content }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    };

    return context;
}


