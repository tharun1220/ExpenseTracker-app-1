import React from "react";
import "./App.css";

function App() {
  return (
    <form>
      <div>
        <label>Product ID : </label>
        <input type="number"></input>
        <label>Selling Price : </label>
        <input type="number"></input>
        <label>Product Name : </label>
        <input type="text"></input>
        <button type="button">Add Product</button>
      </div>
    </form>
  );
}

export default App;
