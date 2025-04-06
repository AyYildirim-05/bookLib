import React, { useState } from "react";

function CreateTodo(){
const[newTodo,setNewTodo] = useState("")
console.log(newTodo)
    return(
        <div>
        <p>This is todo creation</p>
        
        </div>
    )
}

export default CreateTodo;