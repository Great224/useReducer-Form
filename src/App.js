 import React, {useReducer, useState} from "react"
 import { ReactDOM } from "react"




// function App() {
//   const [name,setName] = useState("John Doe")
//   return (
//     <div className="">
//    <h1> A simple  {name}</h1>
//    <button 
//    onClick={() => setName("Jane Doe")}>
//     update text
//    </button>
//     </div>
//   );
// }

// export default App;


function App() {

  const initialState = {
    totalForm: 0,
    forms:[],
  };
   
  const formReducer = (state = initialState,action) => {

    switch(action.type){

      case "ADD": {
        const newState ={
          forms: [
            ...state.forms,action.payload
          ],
          totalForm: state.forms.length + 1,
        }
        return newState;
      }
      case "UPDATE":{
        const newState ={
          ...state,
          totalForm: state.forms.length - 1,
          forms: state.forms.filter(note => note.id !== action.payload.id)
        }

      }
      case "REMOVE":{
        const newState ={
          ...state,
          totalForm: state.forms.length - 1,
          forms: state.forms.filter(note => note.id !== action.payload.id)
        }
        return newState;
      }
     
        default:
          return state; }
    };
  const [fullName,setFullName] = useState("");
  const [gMail, setGMail] = useState("");
  const [formState, dispatch] = useReducer(formReducer,initialState)
  
    const addName= (e) => {
      e.preventDefault();
      if(!fullName && !gMail){
        return;
      }
      const newForm ={
        id: new Date(),
        Name:fullName,
        Gmail:gMail
      }
      dispatch({type:"ADD",payload:newForm});
      // dispatch({type:"UPDATE",});
      setFullName("");
      setGMail("");
    };


  return (
    <>
    <h1>FORM</h1>
    <form onSubmit={addName}> 
  <label> My Full Name is:
  <input value={fullName} onChange={event => setFullName(event.target.value)}></input>
  </label>
  
  <label> My Gmail is:
  <input value={gMail} onChange={event => setGMail(event.target.value)}></input>
  </label><hr/>
 
  <button> Add form</button>

  </form>
  {formState && formState.forms.map(f => (
    <div key={f.id}>
      <span><b>{f.Name}</b>
      <b>{f.Gmail}</b></span>
      <button onClick={() => dispatch({type:"UPDATE", })}>Update</button>
      <button onClick={() => dispatch({type:"REMOVE", payload: f})}>Remove</button>
    </div>
  ))}
    </>
  )}
  
  
export default App;