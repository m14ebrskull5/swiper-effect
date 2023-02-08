import { useState, useTransition, startTransition } from 'react';

import { generateProducts } from './data';
import ProductList from './components/ProductList';
import { Button, DatePicker, Space, version } from "antd";
const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  

  return (
    <div id="app">
      <h1>antd version: {version}</h1>
      <Space style={{margin: "2rem"}}>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  );
}

export default App;
