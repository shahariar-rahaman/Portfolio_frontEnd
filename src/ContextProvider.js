import React,{createContext, useReducer, useState} from 'react'
export const store = createContext()
const ContextProvider = (props) => {
const initialState ={userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}
const reducer=(state,action)=>{
    switch(action.type){
        case "user_login":
        return {...state,userInfo:action.payload};
        case "user_logout":
        return {...state,userInfo:null};
        default:{
            return state;
        }
    }
}
    const [state,dispatch]=useReducer(reducer,initialState)
    console.log(state)
  return (
    <store.Provider value={{state,dispatch}}>
        {props.children}
    </store.Provider>
  )
}

export default ContextProvider