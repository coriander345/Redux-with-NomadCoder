import {createStore} from "redux"
import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit"

///before redux toolkit

// const ADD = "ADD"
// const DELETE = "DELETE"

// const addToDo =text=> {
//   return {
//     type: ADD,
//     text
//   }
// }
// const deleteToDo =id=> {
//   return {
//     type: DELETE,
//     id
//   }
// }

// const reducer =(state=[], action)=>{
//   console.log(action.type===deleteToDo.type )
//   switch(action.type){
//     case addToDo.type:
//       return [{text: action.payload, id: Date.now()}, ...state];
//     case deleteToDo.type:
//       console.log(state,action )

//       const newState = state.filter(el=>el.id!==parseInt(action.payload))
//       return newState;
//     default:
//       return state
//   }
// }

// const store = createStore(reducer)

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// }


/// after redux toolkit

// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE")

// const reducer = createReducer([],{
//   [addToDo]: (state, action) => {
//     if(!action.payload) return 
//     state.push({text: action.payload, id: Date.now()})
//   },
//   [deleteToDo]: (state, action) => 
//   state.filter(todo=> todo.id !== parseInt(action.payload))
// })

/// after createSlice => even simpler
 
 const toDos = createSlice({
   name: "toDosResucer",
   initialState: [],
   reducers: {
     add: (state, action) => {
          if(!action.payload) return 
          state.push({text: action.payload, id: Date.now()})
        },
     remove:(state, action) => 
       state.filter(todo=> todo.id !== parseInt(action.payload))
   }
 })


const store = configureStore({reducer: toDos.reducer})
// 다양한 부가기능 제공 ex) redux developer Tools 활성화
export const {
  add,
  remove
} = toDos.actions

export default store