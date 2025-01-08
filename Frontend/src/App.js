import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AddCourse from './components/operations/AddCourse';
import {Container,Row,Col} from 'reactstrap';
import Menus from './components/Menus';
import ViewCourses from './components/operations/ViewCourses';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import UpdateCourse from './components/operations/UpdateCourse';




function App() {
  return (
    <div> 
       <ToastContainer />
       
        <Router>

          <Container>           
             <Header/>
              <Row className='5'>
                  <Col md={2}>            
                       <h4 style={{textAlign:'center'}}>Menu</h4>
                       <Menus/>
                  </Col>

                 <Col md={10}>
                     <Routes>
                     <Route path='/'Component={Home} exact/>
                     <Route path='/add-course'Component={AddCourse} exact/>
                     <Route path='/view-courses'Component={ViewCourses} exact/> 
                     <Route path='/update-course/:id'Component={UpdateCourse} exact />   
                     </Routes>         
                </Col>
              </Row>
           </Container>
           
        </Router>
    </div>
       
  );
}

export default App;
