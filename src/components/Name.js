import { useState} from "react"

function  Name(){
    const [username, setUsername] = useState("John Doe")

    return (
        <div className="">
            <h1>A simple {username}</h1>
            <button onClick={() => setUsername("Jane Doe")}></button>
        </div>
    )
}