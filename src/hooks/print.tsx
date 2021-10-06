import create from 'zustand'


type unicPedidoProps = {
    id: string,
    forma_pagamento: number,
    cupom_desconto: string,
    valor_frete: string,
    valor_total: string,
    valor_desconto: string,
    valor_final: string,
    status: number,
    endereco_entrega: {
        id: string,
        number: string,
        street: string,
        country: string,
        district: string,
        referencePoint: string,
    },
    user: {
        id: string,
        name: string,
    }
    itens_pedido: [{
        id: string,
        price: string,
        title: string,
        units: number,
        Idloja: string,
        valueMoney: string,
        imageProduct: string,
        valuePromotion: string,
        promotion: boolean,
    }]
}


type useStoreProps = {
    print: unicPedidoProps,
    mudarValor: ( by:unicPedidoProps ) => void,
}

export const useStore = create<useStoreProps>(set => ({
    print: {} as unicPedidoProps,
    mudarValor: (data: unicPedidoProps) => set((state) => ({ print: data}))
}))