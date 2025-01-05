import React, { useState } from 'react'

export default function Statecounter() {
  const[counter,setCounter]=useState({value:100,type:'counter'})
  const Increment=()=>{
    setCounter((prevCounter)=>{
      return{value:prevCounter.value+3}
    })
  }
  const Decrement=()=>{
    setCounter((prevCounter)=>{
      return{value:prevCounter.value-3}

    })
  }
  return (
    <>
      <h3>counter is ${counter.value}</h3>
      <button onClick={Increment}>+3</button>
      <button onClick={Decrement}>-3</button>
    </>
  )
}  
