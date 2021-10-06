import create from 'zustand'


type unicPoduProps = {
    id: string,
    price: string,
    title: string,
    units: number,
    Idloja: string,
    valueMoney: string,
    imageProduct: string,
    valuePromotion: string,
    promotion: boolean,
}


type useStoreProps = {
    valueFixed: unicPoduProps[],
    addArrayValueFixed: ( by:unicPoduProps[] ) => void,
}

export const useEditProduFixed = create<useStoreProps>(set => ({
    valueFixed: [] as unicPoduProps[],
    addArrayValueFixed: (data: unicPoduProps[]) => set(() => ({ valueFixed: data})),
}))