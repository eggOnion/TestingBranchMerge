import { useState, useEffect } from "react";

import mockAPI from "./api/mockapi";

import "./App.css";
import Table from "./components/Table";
import AddForm from "./components/AddForm";

const newProduct = {
  name: "iMac",
  price: 999,
  quantity: 888,
};
// When we call an API
// CRUD - Create, Read, Update, Delete
// HTTP method
// Read: GET
function App() {
  // Track the loading state
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [refresh, setRefresh] = useState(false);
  // infinite loop
  // loadProducts();

  // with an empty dependency array [], this will run when component loads
  useEffect(() => {
    console.log("Effect running");
    loadProducts();
  }, []);

  // READ - GET ALL
  // Async/Await method
  // need to mark function as async to use the await keyword
  const loadProducts = async () => {
    try {
      setIsLoading(true);

      // GET https://62ba9b04573ca8f8328762ca.mockapi.io/product
      const response = await mockAPI.get("/product");
      // If error occurs above, the lines below will not run
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log("❌ error: " + error.message);
    } finally {
      // This block will always run whether or not there is an error
      console.log("loadProducts completed.");
      setIsLoading(false);
    }
  };

  // READ - GET ONE
  // const apiGetId
  const loadProduct = async (id) => {
    try {
      setIsLoading(true);
      // GET https://62ba9b04573ca8f8328762ca.mockapi.io/product/88
      const response = await mockAPI.get(`/product/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log("❌ error: " + error.message);
    } finally {
      // This block will always run whether or not there is an error
      console.log("loadProduct completed.");
      setIsLoading(false);
    }
  };

  // CREATE
  // const apiPost
  const addProduct = async (newProduct) => {
    try {
      setIsLoading(true);
      // POST https://62ba9b04573ca8f8328762ca.mockapi.io/product/, newProduct
      const response = await mockAPI.post("/product", newProduct);
      console.log("🥳 New Product", response.data);

      loadProducts();
    } catch (error) {
      console.log("❌ error: " + error.message);
    } finally {
      // This block will always run whether or not there is an error
      console.log("addProduct completed.");
      setIsLoading(false);
    }
  };

  // UPDATE
  // PUT for updating, if the record doesn't exist, it will create it
  // const apiPut
  const updateProduct = async (id) => {
    try {
      setIsLoading(true);
      const response = await mockAPI.put(`/product/${id}`, {
        name: "Apple iPhone",
        price: 1999,
        quantity: 0,
      });
      console.log(response.data);
    } catch (error) {
      console.log("❌ error: " + error.message);
    } finally {
      // This block will always run whether or not there is an error
      console.log("updateProduct completed.");
      setIsLoading(false);
    }
  };

  // DELETE
  // const apiDelete
  const deleteProduct = async (id) => {
    try {
      setIsLoading(true);
      const response = await mockAPI.delete(`/product/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log("❌ error: " + error.message);
    } finally {
      // This block will always run whether or not there is an error
      console.log("deleteProduct completed.");
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Axios Demo</h1>
      <h2>Product</h2>
      <button onClick={addProduct}>Add Product</button>
      <button onClick={loadProducts}>Load Products</button>
      {/* Pass in a function, not pass in invocation of a function */}
      {/* loadProduct(49) means invoking the function */}
      <button onClick={() => loadProduct(172)}>Load Product 172</button>
      <button onClick={() => updateProduct(96)}>Update Product 96</button>
      <button onClick={() => deleteProduct(314)}>Delete Product 165</button>
      <button onClick={() => setRefresh((refresh) => !refresh)}>Refresh</button>

      <AddForm handlerAddItem={addProduct} />

      {isLoading && <p>⏳ Loading ...</p>}

      <Table list={products} />
    </div>
  );
}

export default App;

// Using Promise.then() method to consume API
// // const apiGet = () => {
// // Renamed apiGet to loadProducts
// const loadProducts = () => {
//   // this return a Promise - future value
//   // to consume a Promise, we use the .then() method
//   // GET https://62ba9b04573ca8f8328762ca.mockapi.io /product
//   // Endpoint https://62ba9b04573ca8f8328762ca.mockapi.io /product
//   // /product, /customer, /appointments - defined in the backend
//   mockAPI
//     .get("/product")
//     .then((response) => {
//       console.log(response.status);
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log("❌ error: " + error.message);
//     });
// };
