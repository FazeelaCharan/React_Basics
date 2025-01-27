import React from "react";

const Products = () => {
  const Items = [
    { title: "Cabbage", id: 1, category: "fruit", isFruit: false },
    { title: "Garlic", id: 2, category: "fruit", isFruit: false },
    { title: "Apple", id: 3, category: "vegetables", isFruit: true },
  ];

  return (
    <div>
      <h2 className="text-2xl text-orange-600">Shopping Cart</h2>
      <ul>
        {Items.map((item) => (
          <li
            key={item.id}
            className="list-disc"
            style={{ color: item.isFruit ? "red" : "green" }}
          >
            {item.title}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default Products;
