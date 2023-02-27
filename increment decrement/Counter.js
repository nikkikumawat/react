import { useState } from "react";


function Counter(){
    const [Counter,setCounter] = useState(0)

    function incre(){
        setCounter (Counter+1)
    }

    function decre(){
        setCounter (Counter-1)
   }  


// return (
//     <>
//         <button onClick={() => setCounter(Counter + 1)}>Increment</button>
//         <p>{Counter}</p>
//         <button onClick={() => setCounter(Counter - 1)}>Decrement</button>
//     </>
// );
// }
return (
    <>
        <button onClick={() => incre(Counter+1) }>Increment</button>
        <p>{Counter}</p>
        <button onClick={() => decre(Counter-1)}>Decrement</button>
    </>
);      
}
export default Counter;