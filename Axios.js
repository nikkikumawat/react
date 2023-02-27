import { PlayCircle } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
    const [data, setdata] = useState([])
    useEffect(() => {
    async function fetchdata(){
        const response = await axios.get("https://dummyjson.com/products")
       
        setdata(response.data.products)
    }

    fetchdata()
}, [])
              
    return (
        <div className='blog'>
            {
                data.map((element,index) => {
                    return (<div key={index}>
                    <h1>{element.title}</h1>
                    <img src={element.images[0]}></img>
                    <p>{element.description}</p>
                    <h2>{element.brand}</h2>
                    </div>)

                })}


        </div>

    )
}

export default Axios












 //     axios.get("https://dummyjson.com/products")
    //         .then((response) => {
    //             console.log(response)
    //             setdata(response.data.products)
    //         })
    //