import { useState, useReducer, useContext } from "react";

import ProductContext from "../context/ProductContext";

// import {
//   initialProductState,
//   productReducer,
// } from "../reducers/productReducer";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

function Product() {
  // global state
  const productCtx = useContext(ProductContext);
  console.log(productCtx);
  // console.log("productCtx.name", productCtx.name);
  // console.log("productCtx.price", productCtx.price);
  // useReducer takes in a reducer function and initial state
  // returns an array - destructure the array to get the 1st and 2nd item

  // local component state
  // const [state, dispatch] = useReducer(productReducer, initialProductState);

  // destructure an object
  // const { name, discount, count, price } = state;
  const {
    name,
    discount,
    count,
    price,
    handlerPlus,
    handlerMinus,
    handlerChangeName,
    handlerChangePrice,
  } = productCtx;

  // Do not mutate the state directly
  // imperative approach - we manipulate the JS variable directly
  // name = "Tony";

  // immutability - don't modify the state yourself
  // only way to update state is to use dispatch function

  // const [count, setCount] = useState(1);
  // count = 5;
  // const [discount, setDiscount] = useState(0);
  // const [name, setName] = useState("Banana");
  // const [price, setPrice] = useState(2.99);

  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);

  // const handlerPlus = () => {
  //   dispatch({ type: "PLUS_COUNT" });
  // };

  // const handlerMinus = () => {
  //   dispatch({ type: "MINUS_COUNT" });
  // };

  // const handlerChangeName = (value) => {
  //   // be sent to the reducer function
  //   // payload: value to update, could be optional
  //   dispatch({ type: "SET_NAME", payload: value });
  //   // setName(value);
  // };
  // const handlerChangePrice = (value) => {
  //   dispatch({ type: "SET_PRICE", payload: value });
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
      {/* <DiscountPrice price={price} /> */}
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
