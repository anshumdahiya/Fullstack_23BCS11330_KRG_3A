import React from "react";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    { name: "iPhone 14", price: 999, description: "Latest Apple iPhone", instock: true },
    { name: "Samsung Galaxy S23", price: 899, description: "Newest Samsung phone", instock: false },
    { name: "Google Pixel 8", price: 799, description: "Google flagship phone", instock: true }
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
          instock={product.instock}
        />
      ))}
    </div>
  );
}

export default App;
