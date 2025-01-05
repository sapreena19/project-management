import React, { useState } from 'react'

export default function Parentlocalstate() {
    const[user]=useState('React')
  return (
    <>
    <h1>Parentlocalstate</h1>
    <Component1 user={user}/>
    </>
  )

}
function Component1({user}){

    return(
        <>
        <h2>Component1</h2>
        <Component2 user={user}/>
        </>
    )
}
function Component2({user}){
    return(
        <>
        <h2>Component2</h2>
        <Component3 user={user}/>
        </>
    )
}
function Component3({user}){
    return(
        <>
        <h2>Component3</h2>
        <Component4 user={user}/>
        </>
    )
}
function Component4({user}){
    return(
        <>
        <h2>Component4</h2>
        <Component5 user={user}/>
        </>
    )
}
function Component5({user}){
    return(
        <>
        <h2>Component5</h2>
        <h1>{user}</h1>
        </>
    )
}



