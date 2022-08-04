import React from 'react'


const Button = ({children, onClick}) => {
  return (
   
    <button style={{height:"30px", marginTop:"38%"}} onClick={onClick}>{children}</button>
  )
}

export default Button