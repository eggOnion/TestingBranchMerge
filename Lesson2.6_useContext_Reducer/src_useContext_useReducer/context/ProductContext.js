import { createContext, useReducer } from "react";

import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";

// Create our context
const ProductContext = createContext();

// Context Provider
export function ProductProvider({ children }) {
  // Storing the state in context
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };

  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };

  const handlerChangeName = (value) => {
    // be sent to the reducer function
    // payload: value to update, could be optional
    dispatch({ type: "SET_NAME", payload: value });
    // setName(value);
  };
  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRICE", payload: value });
  };

  // Context values
  const context = {
    count: state.count,
    discount: state.discount,
    name: state.name,
    price: state.price,
    handlerPlus: handlerPlus,
    handlerMinus: handlerMinus,
    handlerChangeName: handlerChangeName,
    handlerChangePrice: handlerChangePrice,
  };

  // ProductContext provides a Provider component
  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
