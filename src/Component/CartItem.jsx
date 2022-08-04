import React from 'react'
import Button from "./Button";
 import styles from "../Component/CartItem.module.css"

const CartItem = ({id, name, price, qty, handleClick}) => {
 

  return (
    <div className={styles.containerDiv}>
         <h4>{name}</h4>
          <h4> ₹ {price}</h4>
          <div className={styles.btnCon}>
            <Button onClick={()=>handleClick(id, -1)}>-</Button>
            <h4 style={{margin:"0 5px 0 5px", marginTop:"38%"}}>{qty}</h4>
            <Button onClick={()=>handleClick(id, +1)}>+</Button>
          </div>
    </div>
  )
}

export default CartItem