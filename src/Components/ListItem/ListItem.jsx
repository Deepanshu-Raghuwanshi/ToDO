import { useState } from "react";
import Button from 'react-bootstrap/Button';
import styles from './ListItem.module.css'

const ListItem = ({ index, value,changeHandle, 
  deletehandler,saveHandler
}) => {

  const [input,setInput] = useState('')


   const [edit ,setEdit] = useState(false)


 const editHandler = (index) => {
        setEdit(!edit)
        
           }

  const cancleHandler = ()=>{
     setEdit(!edit)
   
  }

   const handleSave = () => {
    saveHandler(index, input);
    setEdit(false);
  };


  return (
    <>
      
       {value && (
        <div
          className={styles.listitem}
          key={index}
        >
         
          <h4 style={{display:"inline"}}>ToDo : </h4>{value.todo}
          <br />
          <br />
                      <input
              type="checkbox"
              checked={value.completed}
              onChange={() => {
                changeHandle(value.id);
              }}
            />
            <h5 style={{display:"inline"}}>Status : </h5>  {value.completed ? "completed" : "incompleted"}
          <br />
          <br />
            <Button className="me-2"  onClick={() => { deletehandler(index) }} variant="danger">Delete</Button>
          
          {edit && (
          <>
          <input type='text'
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            />
              <Button  className="me-2 ms-2"  onClick={handleSave}  variant="success">Save</Button>{' '}
             <Button className="me-2" onClick={()=>{cancleHandler(index)}} variant="info">Cancle</Button>{' '}
          
          </>
          
          )}
          {!edit&&(

  <Button  className="me-2" onClick={() => { editHandler(index) }} variant="info">Edit</Button>
           
          )}
                  </div>
      )} 

    </>
  )
}
export default ListItem;