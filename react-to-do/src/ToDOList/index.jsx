import { useState } from "react"



function ToDOList() {

    const [toDo, setToDO] = useState('')

    return(
        <div>
          <input placeholder="Enter ToDo" name="ToDO" value={toDo} 
           onChange={(e)=> setToDO(e.target.value)}
          />
        </div>
    )
}


export default ToDOList