import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
<<<<<<< HEAD
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';    
import "./list.css"
=======

>>>>>>> 7656bacfb75af54c398f49419c342b968ad12dfd

function List() {
    const [input, setInputvlaue] = useState('')
    const [listitem, setlistitem] = useState([])
<<<<<<< HEAD
    const [edit, setediting] = useState(false);
    const [markedone, setmarkdone] = useState([])
=======
>>>>>>> 7656bacfb75af54c398f49419c342b968ad12dfd

    function handler(e) {
        setInputvlaue(e.target.value)
    }

<<<<<<< HEAD

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



=======
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

>>>>>>> 7656bacfb75af54c398f49419c342b968ad12dfd
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
<<<<<<< HEAD
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
=======
                   listitem.map((element,index) => {
                    return(
                    <li key={index} 
                    >{element}<DeleteIcon onClick={() => handeldelete(element)} />
                    </li>
                    );
                   }
                   )
>>>>>>> 7656bacfb75af54c398f49419c342b968ad12dfd
                }
            </ul>
        </>
    )

}




export default List