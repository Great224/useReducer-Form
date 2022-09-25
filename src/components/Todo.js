import {useState} from "react"

function Todo(){
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]) 

    const formStyles = {
        width: "700px",
        margin: "20px auto",
        backgroundColor: todos.length > 0 ? "#333" : "blue",
    }

    function handleSubmit(e) {
        e.preventDefault()

        //console.log(todo)
        setTodos([...todos, {value: todo, status: false}])
        setTodo("") 
    }
    function deleteTodo({index}){
        const newTodos = todos.filter((item, i) => i !== index)
        setTodos(newTodos)
        console.log("delete", index)
    }

    function checkItem({ index}) {
        const newTodos = todos.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    status: !item.status,
                }
            }
            return item
        })

        setTodos(newTodos)
    }
    return (
        <>
        <form style={formStyles} onSubmit={handleSubmit}>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text"/>
            <button>Add</button>
        </form>
        <ul style={{padding:"0"}}>
            {todos.map((item, i) => (
                <li style={{color:"pink",
                  backgroundColor: item.status === true ? "red" : "purple",
                  display: "flex",
                  gap:"30px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
                 key={i}>
                    <input onChange = {() => checkItem({index: i})} type= "checkbox" checked = {item.status === true}></input>
                    <span>{item.value}</span>
                    <button onClick={() => deleteTodo({index: i})} style={{ marginLeft:"auto"}}>Delete</button>
                </li>
            ))} 
        </ul>
            </>
    )
}

export default Todo
