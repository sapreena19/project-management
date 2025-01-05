import React, { useReducer } from 'react'
const transitionReducer=(state,action)=>{
    switch(action.type){
        case 'WITHDRAW':
        return state-action.payload
        case 'DEPOSIT':
            return state+action.payload
            default:
                return state
    }

}

export default function Reducers() {
    const withdraw=(amount=>{
        dispatch({type:'WITHDRAW',payload:amount})
    })
    const Deposit=(amount=>{
        dispatch({type:'DEPOSIT',payload:amount})
    })
    const[state,dispatch]=useReducer(transitionReducer,1000)
  return (
    <>
    <h3>('Balance is ${state}')</h3>
    <button onClick={()=>withdraw(500)}>withdraw</button>
    <button onClick={()=>Deposit(500)}>Deposit</button>
    </>
  )
}
