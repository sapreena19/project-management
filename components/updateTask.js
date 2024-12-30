import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskInList } from '../slices/tasksSlice';


const MyVerticallyCenteredModal = (props) => {
    const{selectedTask}=useSelector((state)=>state.tasks)
     const[title,setTitle]=useState('')
        const[description,setDescription]=useState('')
        const[id,setId]=useState(0)
        const dispatch=useDispatch()
    
    const updateTask=()=>{
        props.onHide()
        dispatch(updateTaskInList({id,title,description}))
    }
    useEffect(()=>{
        if(Object.keys(selectedTask).length!==0){
        setTitle(selectedTask.title)
        setDescription(selectedTask.description)
        setId(selectedTask.id)
        }

    },[selectedTask])
  return (
    <Modal
      {...props}
      size="1g"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          updateTask
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text"placeholder="Enter Task Title" value={title}
        onChange={(e)=>setTitle(e.target.value)}/>

      </Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text"placeholder="Enter Task Description" value={description}
        onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>
      
    </Form>
        
      </Modal.Body>
      <Modal.Footer>
        <div className='text-end'>
      <Button variant="primary" type="submit"onClick={(e)=>updateTask(e)}>
        updateTask
      </Button>
      </div>
      </Modal.Footer>
    </Modal>
  );
}
  

export default MyVerticallyCenteredModal