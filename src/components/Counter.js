import { useState } from "react"

function Counter(){
   const [counter,setCounter] = useState(0)
     function Increase( prev ) {
   if (prev > 9) return prev
   
   return prev + 1
}
 function Decrease( prev ) {
    if (prev < -9) return prev
    return prev - 1
 }
   return (
        <div>
            <h1>counter: { counter }</h1>
            <button onClick={() => setCounter(Increase)}>Increase counter</button>
            <button onClick={() => setCounter(Decrease)}>Decrease counter</button>
            <button onClick={() => setCounter(0)}>Reset counter</button> 
        </div>
    )
}

export default Counter