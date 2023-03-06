import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (indexValue) => {
        setState({
            ...state,
            cart: [...state.cart, indexValue]
        });
    };

    const removeFromCart = (indexValue) => {
        setState({
          ...state,
          cart: state.cart.filter((_,index) => index !== indexValue),
        })
      }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;