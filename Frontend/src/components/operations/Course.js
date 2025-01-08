
import { Card,CardBody,CardSubtitle,CardText,Button,Container, Row, Col } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../SpringBootAPIs/Api";
import { Link} from "react-router-dom";
import { useId } from "react";



 const Course=({course,updatedlist})=>
 {
    
  //delete course by id from server
  const deletecourse=(id)=>{
    
    axios.delete(`${base_url}/courses/${id}`)
    .then( (response)=>{console.log(response)
      // handle success 
     toast.success("Course has been deleted")
     updatedlist(id);
    })                                                                        
    .catch((error)=>{console.log(error)             
         // handle error  
       toast.error("Somthing went wrong")
    }) 
    }

   return(
     <Row xs={1} md={2} style={{display:"inline-block"}}>
      <Col >
         <Card style={{ width:'18rem',height:150,marginLeft:15,marginBottom:15}}>
           <CardBody>
             <CardSubtitle style={{fontWeight: 'bold'}}>{course.title}</CardSubtitle>
              <CardText>{course.description}</CardText>
                <Container className="text-center">
                  <Button onClick={()=>{deletecourse(course.id)}} color="danger">Delete</Button>
                 <Link to={`/update-course/${course.id}`}><Button color="warning" style={{marginLeft: '20px'}}>Update</Button></Link> 
                </Container>
          </CardBody>
      </Card>
    </Col>
   </Row>
   )
}

export default Course;