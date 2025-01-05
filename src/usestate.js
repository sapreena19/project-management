import React, { useState } from 'react'

export default function Example(){
  const[user,setUser]=useState('React')
  const change=()=>{
    setUser('jsx')
    console.log('user')

  }
  
  return (
    <>
    <h2>{user}</h2>
    <button onClick={change}>changeName</button>
    </>
  )
}

