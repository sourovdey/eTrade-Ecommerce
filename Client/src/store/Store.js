import { create } from 'zustand';

const ProductStore = create((set) =>({
    product : [],
    addsProduct : (data) =>{
        set((satate) => ({
            product : data
        }))
    }
}))

export {ProductStore};