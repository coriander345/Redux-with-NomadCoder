import {createStore} from "redux"

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETO_TODO = "DELETE_TODO"

const reducer = (state=[], action) =>{
  
  
  
  switch(action.type){
    case ADD_TODO:
      return [{text: action.text, id: Date.now()},...state ];
    case DELETO_TODO:
      const newState= state.filter(el=>el.id!==Number(action.id))
      return newState
    default:
      return state
  }
}

const store = createStore(reducer)
// html에서 엘레멘트 가져오기

const addToDo = text =>{ 
  store.dispatch({type: ADD_TODO, text})
}

const paintToDos = () =>{
  const toDos = store.getState()
  ul.innerText=""
  toDos.forEach(toDo=>{
    const li  =document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText="Delete"
    btn.addEventListener("click", handleDelete)
    li.id = toDo.id
    li.innerText = toDo.text
    li.append(btn)
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos)

const onSubmit = e =>{
  e.preventDefault()
  
  const toDo = input.value
  if(!toDo) return
  addToDo(toDo)
  input.value=""
  
}

form.addEventListener("submit", onSubmit)

// Event handel funtion
function handleDelete(e){
 const id = e.target.parentNode.id
 store.dispatch({type: DELETO_TODO, id})
}