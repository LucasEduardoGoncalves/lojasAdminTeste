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
    value: unicPoduProps[],
    addArray: ( by:unicPoduProps[] ) => void,
    addUnicProdu: ( by:unicPoduProps ) => void,
}

export const useEditProdu = create<useStoreProps>(set => ({
    value: [] as unicPoduProps[],
    addArray: (data: unicPoduProps[]) => set(() => ({ value: data})),
    addUnicProdu: (data: unicPoduProps) => set((state) => ({ value: [...state.value, data]})),
}))