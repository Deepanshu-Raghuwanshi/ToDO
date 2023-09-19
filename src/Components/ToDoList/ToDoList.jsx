import React from 'react'
import ListItem from '../ListItem/ListItem';
import { useState,useEffect } from "react";

const ToDoList = () => {

 const [todo, setToDo] = useState('')

  const [data,setData] = useState([])

 useEffect(()=>{
    fetch('https://dummyjson.com/todos')
    .then((res)=>res.json())
    .then((data)=>{
                  setData(data.todos)}
         )
    },[])

   const addToDo1 = () => {
    const obj = {
             userId: 1,
    id: data.length + 1, 
    todo: todo,
    completed: false,
    }
    setData([...data, obj]);
    setToDo('');
  }
  

 const changeHandle = (id) => {
    let _data = [...data];
    _data.map((ele) => {
      if (ele.id === id) {
                ele.completed = !ele.completed;
        setData(_data);
      }
    });
  };


const deletehandler = (index)=>{
    let item = [...data]
  item.splice(index,1)
  setData(item)
}

const saveHandler = (index, input) => {
  console.log(index,input)
  let updatedItems = [...data];
  updatedItems[index].todo = input; 
  setData(updatedItems);
 
};

 

  return (
    <>
      <h1> ToDo List</h1>

<br/>
<br/>

      <div>
        <label>Enter ToDo  </label>
        <input type='text'
          placeholder='enter todo'
          value={todo}
          onChange={(e) => { setToDo(e.target.value) }}
        />
        <button
          onClick={addToDo1}
        >Add ToDo</button>

      </div>
<br/>
<br/>

      {data && 
        data.map((ele, index) => {
                    return (<>
            <ListItem key={ele.id} index={index}
             value={ele}
              changeHandle={changeHandle}
              deletehandler={deletehandler} 
              saveHandler={saveHandler} 
                         
              />
          </>)
        })
      } 
    </> 
  )
}
export default ToDoList