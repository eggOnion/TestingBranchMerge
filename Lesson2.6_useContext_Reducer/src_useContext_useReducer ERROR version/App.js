import Product from "./components/Product";
import "./App.css";

// ProductProvider - provider of the state data
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <div className="App">
    <ProductProvider>  
      <Product />
    </ProductProvider>
  </div>
  );
}

export default App;
