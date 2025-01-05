import React, {useEffect, useState } from 'react'

export default function Home(){
    const[counter1,setCounter1]=useState(0)
    const[counter2,setCounter2]=useState(0)
  //useEffect(()=>{
  //    console.log('yes')
  //})
    useEffect(()=>{
        console.log('use effect is executed')
    },[counter1])
  return (
    <>
    <h2>{counter1}</h2>
    <h2>{counter2}</h2>
    <button onClick={()=>setCounter1(counter1+1)}>Increment1</button>
    <button onClick={()=>setCounter2(counter2+1)}>Increment2</button>
    </>
  )
}
