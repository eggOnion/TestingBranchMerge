import { createContext, useReducer } from "react";

import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";

// Create our context
export const ProductContext = createContext();

// Context Provider
export function ProductProvider({ children }) {
  // Storing the state in context
  const [{ count, discount, name, price }, dispatch] = useReducer(
    productReducer,
    initialProductState
  );

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
    count,
    discount,
    name,
    price,
    handlerPlus,
    handlerMinus,
    handlerChangeName,
    handlerChangePrice,
  };

  // ProductContext provides a Provider component
  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}
