import React from 'react'
//import Example from './usestate';
//import Statecounter from './statecounter';
//import Reducers from './reducers';
//import Parentlocalstate from './parentlocalstate';
//import Parentusingcontext from './parentusingcontext';
//port Home from './home';
import { Navbar} from './components/Navbar';
import Addtask from './components/Addtask';
import Container from './../node_modules/react-bootstrap/esm/Container';
import {Row,Col} from "react-bootstrap";
import TasksList from'./components/TasksList';

 const App=()=>{
  return (
    <Container>
      
      <Navbar/>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          
      <Addtask/>
      <TasksList/>
      </Col>
      </Row>

    
    </Container>
    
  );
  
}
export default App;