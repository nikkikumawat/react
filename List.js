import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';    
import "./list.css"

function List() {
    const [input, setInputvlaue] = useState('')
    const [listitem, setlistitem] = useState([])
    const [edit, setediting] = useState(false);
    const [markedone, setmarkdone] = useState([])

    function handler(e) {
        setInputvlaue(e.target.value)
    }


    function handlesubmit(e) {
        e.preventDefault()
        if (input.length > 0 && edit === false) {
            setlistitem([...listitem, input])
            setInputvlaue("")
        }

        else {
            listitem[edit] = input;
            setlistitem(listitem);
            setInputvlaue("");
            setediting(false);
        }
    }



    function handeldelete(e, index) {
        e.preventDefault()
        setlistitem(
            listitem.filter(( inde) => {
                return inde !== index

            }))
    }



    function Edit(e, item, index) {
        e.preventDefault()
        setlistitem(listitem)
        setediting(index)
    }



    function Check(e, index) {
        e.preventDefault()
        setmarkdone([...markedone, index]);
        
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
                    listitem.map((element, index) => {
                        return (

                            <li key={index}
                                className={markedone.includes(index) ? "completed" : ""}
                            >

                                {element}{" "}
                                <a href=""><DeleteIcon onClick={(e) => handeldelete(e, element, index)} /></a>
                                <a href="" ><EditIcon onClick={(e) => Edit(e, element, index)} /></a>
                                <a href="" ><CheckBoxIcon onClick={(e) => Check(e, index)} /></a>


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