import produce from 'immer'

const INITIAL_STATE = {
    product: []
}

export default function cart(state = INITIAL_STATE, action){
    switch(action.type){
        case "ADD_TO_CART":
            return produce(state, draft =>{
                const indexProduct  = draft.findIndex((p) => p.id === action.product.id);
                if(indexProduct >= 0){
                    draft[indexProduct].amount +=1;
                }
                else{
                    draft.push({
                        ...action.product,
                        amount: 1
                    })
                }
            })
        case "REMOVE_FROM_CART":
            return produce(state, draft =>{
                const indexProduct  = draft.findIndex((p) => p.id === action.id);
                if(indexProduct >= 0){
                    draft.splice(indexProduct, 1);
                }
            })
        default:
            return state.product;
    }
}
