import { useState } from "react";

function AddForm({ handlerAddItem }) {
  const [item, setItem] = useState();

  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerAddItem(item);
    console.log("Item to add", item);
  };

  const handlerForm = (e) => {
    setItem((item) => {
      return {
        ...item,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handlerName = (e) => {
    const form = { ...item, name: e.target.value };
    setItem(form);
  };

  const handlerQuantity = (e) => {
    const form = { ...item, quantity: e.target.value };
    setItem(form);
  };

  const handlerPrice = (e) => {
    const form = { ...item, price: e.target.value };
    setItem(form);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          onChange={handlerForm}
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          onChange={handlerForm}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handlerForm}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddForm;
