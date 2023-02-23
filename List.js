import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function List() {
    const [input, setInputvlaue] = useState('')
    const [listitem, setlistitem] = useState([])

    function handler(e) {
        setInputvlaue(e.target.value)
    }

    function handlesubmit(e) {
        e.preventDefault()
        setlistitem([...listitem, input])
        setInputvlaue(" ")
    }

    function handeldelete(item){
        setlistitem(
        listitem.filter((li) =>{
            return li !==item
        
        }))
    }

    return (
        <>
            <h1>To Do list</h1>
            <form onSubmit={handlesubmit}>
                <input type="text"
                    placeholder="Enter your name"
                    value={input}
                    onChange={handler}
                ></input>
                <button type="submit">Submit</button>
            </form>

            <ul>
                {
                   listitem.map((element,index) => {
                    return(
                    <li key={index} 
                    >{element}<DeleteIcon onClick={() => handeldelete(element)} />
                    </li>
                    );
                   }
                   )
                }
            </ul>
        </>
    )

}




export default List