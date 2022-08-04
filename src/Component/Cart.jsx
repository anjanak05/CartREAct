import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [items, setItems] = useState([]);
  // const[cart1, setCart] = useState(0)
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let res = await fetch(`http://localhost:9090/cartData`);
    res = await res.json();
    setItems(res);
  };

  const handleClick=(id, qnty)=>{
    const quantity = items.map((elem)=>{
      if(elem.id===id){
        return  {...elem,
            qty: elem.qty +qnty
          } 
      }else{
        return elem
      }
    })
    setItems(quantity)
  }

const cart1 = items.reduce((acc, elem)=>{
  return acc + (elem.qty * elem.price)
}, 0) 


  return (
    <div>
    <h1>CART</h1>
      {items.map((e) => (
        <div key={e.id}>
          <CartItem id={e.id} name={e.name} price={e.price} qty={e.qty} handleClick={handleClick}></CartItem>
        </div>
      ))}
      <h1>Cart : ₹{cart1}</h1>
    </div>
  );
};

export default Cart;
