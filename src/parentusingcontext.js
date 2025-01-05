import React, { createContext,useState,useContext}from 'react'
const UserContext=createContext();
export default function Parentusingcontext() {
  
    const[user]=useState('React')
      return (
        <UserContext.Provider value={user}>
        <h1>Parentusingcontext</h1>
        <Component1 />
        </UserContext.Provider>
      )
    
    }
    function Component1(){
    
        return(
            <>
            <h2>Component1</h2>
            <Component2/>
            </>
        )
    }
    function Component2(){
        return(
            <>
            <h2>Component2</h2>
            <Component3/>
            </>
        )
    }
    function Component3(){
        return(
            <>
            <h2>Component3</h2>
            <Component4/>
            </>
        )
    }
    function Component4(){
        return(
            <>
            <h2>Component4</h2>
            <Component5 />
            </>
        )
    }
    function Component5(){
        const user=useContext(UserContext)
        return(
            <>
            <h2>Component5</h2>
            <h1>{user}</h1>
            </>
        )
    }
    
    
    
    
  

