import {createStore} from "redux"
import {createAction} from "@reduxjs/toolkit"

const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

const reducer =(state=[], action)=>{
  console.log(action.type===deleteToDo.type )
  switch(action.type){
    case addToDo.type:
      return [{text: action.payload, id: Date.now()}, ...state];
    case deleteToDo.type:
      console.log(state,action )

      const newState = state.filter(el=>el.id!==parseInt(action.payload))
      return newState;
    default:
      return state
  }
}

const store = createStore(reducer)

export const actionCreators = {
  addToDo,
  deleteToDo
}

export default store