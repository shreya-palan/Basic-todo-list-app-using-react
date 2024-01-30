import React, { useState } from 'react'

const Todo = () => {

    const[inputVal,setInputVal] = useState('');
    const[inputArr,setInputArr] = useState([]);

    //called when the user clicks on submit button
    const addItems = () =>{

        if(!inputVal){
            alert("please give some data");
        }
        else{
            setInputArr([...inputArr,inputVal]);
            setInputVal("")
        }
    }/*checks if inputval is empty or not if it is empty alert is shown
    otherwise inpuval is added to the inpuArr and inputval is set to empty string*/

    //called when user clicks on delete button
    const DeleteItem = (id) =>{
        const newArr = inputArr.filter((val,ind)=>{
            return id !== ind
        });
        setInputArr(newArr);
    }
    /*It filters out the item at the specified index (id) 
    from the inputArr and sets the new array using setInputArr */


  return (
    <div style={{textAlign: "center"}}>
      <div>
        Todo App <br/>
        <input type='text' value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} />
        <button onClick={addItems}>Submit</button>
      </div>
      <div>
        <ul>
            {
                inputArr.map((val,ind)=>{
                    return <li key ={ind}>{val} <button onClick={()=>DeleteItem(ind)}>Delete</button></li>
                })
            }
        </ul>
      </div>
    </div>
  )
}

export default Todo
