import 


function Forms(){
    const [msg,setMsg] = useState("")
    return (
        <>
        <input value={msg} onChange={(e) => setMsg(e.target.value)} type="text"/>
        <p>Message: {Msg}</p>
        </>
    )
}

export default Forms