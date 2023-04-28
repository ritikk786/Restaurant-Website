import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultcartState = {
    items: [],
    totalAmount: 0
}


const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        const udateTotalamount = state.totalAmount + action.item.price * action.item.amount;

        const existingcartItemindex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        const existingCartItem = state.items[existingcartItemindex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingcartItemindex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: udateTotalamount,
        }
    }
    if(action.type==='REMOVE'){
        const existingcartItemindex=state.items.findIndex(
            (item)=>item.id === action.id
        );
        const existingItem = state.items[existingcartItemindex];
        const updateTotalAmount = state.totalAmount - existingItem.price;
        let updateItems;
        if(existingItem.amount === 1){
            updateItems = state.items.filter((item)=>item.id !== action.id);
        }
        else{
            const updatedItem ={...existingItem, amount:existingItem.amount - 1};
            updateItems=[...state.items];
            updateItems[existingcartItemindex]=updatedItem;
        }
        return{
            items:updateItems,
            totalAmount:updateTotalAmount
        }
    }
    return defaultcartState
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultcartState)


    const addItemToCart = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }
    const cartcontext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }
    return <CartContext.Provider value={cartcontext}>
        {props.children}
    </CartContext.Provider>

}
export default CartProvider;