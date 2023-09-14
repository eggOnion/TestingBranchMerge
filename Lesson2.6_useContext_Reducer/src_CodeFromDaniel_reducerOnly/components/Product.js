import { useState, useReducer } from "react";

import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  // useReducer takes in a reducer function and initial state
  // returns an array - destructure the array to get the 1st and 2nd item
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  // destructure an object
  const { name, discount, count, price } = state;

  // const [count, setCount] = useState(1);
  // const [discount, setDiscount] = useState(0);
  // const [name, setName] = useState("Banana");
  // const [price, setPrice] = useState(2.99);

  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  // const handlerPlus = () => {   
  //   setCount((prevCount) => {
  //     let count = prevCount + 1;
  //     if (count >= 5) {
  //       setDiscount(20);
  //     }
  //     return count;
  //   });
  // };

    // const handlerMinus = () => {
  //   setCount((prevCount) => {
  //     let count = prevCount - 1;
  //     if (count < 5) {
  //       setDiscount(0);
  //     }
  //     if (count < 0) return 0;
  //     return count;
  //   });
  // };

  const handlerPlus = () => {
    dispatch({ type: "PLUS_COUNT" });
  };

  const handlerMinus = () => {
    dispatch({ type: "MINUS_COUNT" });
  };

  const handlerChangeName = (value) => {
    // be sent to the reducer function
    dispatch({ type: "SET_NAME", payload: value });
    // setName(value);
  };
  const handlerChangePrice = (value) => {
    dispatch({ type: "SET_PRICE", payload: value });
    // setPrice(value);
  };




  // const handlerChangeName = (value) => {
  //   // be sent to the reducer function
  //   dispatch({ type: "SET_NAME", payload: value });
  //   // setName(value);
  // };
  // const handlerChangePrice = (value) => {
  //   // setPrice(value);
  // };

  const handlerAddProduct = () => {
    console.log("handlerAddProduct: name, price: ", name, price);

    // Create new list item
    const newItem = {
      name: name,
      quantity: count,
      price: price,
      discount: discount,
      total: (count * price * (100 - discount)) / 100,
    };

    // Copy previous list and append new item to its end
    const newList = [...list, newItem];
    console.log("  newList:", newList);
    setList(newList);

    // Add the item total to the running listTotal
    const sum = sumTotal + newItem.total;
    console.log("  sumTotal:", sumTotal);
    setSumTotal(sum);
  };

  return (
    <div className={styles.container}>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
