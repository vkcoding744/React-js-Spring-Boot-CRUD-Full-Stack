import React from "react"
import { useState } from "react"
import axios from "axios";
import { Fragment } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../../SpringBootAPIs/Api";
import { toast } from "react-toastify";
import {Container} from 'reactstrap';
   
    const UpdateCourse=()=>
    {
    const[course,setCourse]=useState({})

    const handleUpdateForm=(e)=>
    {
        e.preventDefault(); 
        updateCourseDetails(course);
    }
    
     const updateCourseDetails=(data)=>
     {
       axios.put(`${base_url}/courses/${data}`)
      .then( (response)=>{console.log(response)
        // handle success 
       toast.success("Course has been Updated")  
      })                                                                        
      .catch((error)=>{console.log(error)             
           // handle error  
         toast.error("Somthing went Wrong")
      }) 
     }    
                    
        return <Fragment>
                <h3 style={{textAlign:"center",margin:10}}>Update Course Details</h3>

             <Form onSubmit={handleUpdateForm} style={{justifyItems:"center"}}>

               <FormGroup>
                  <Label for="title">Title</Label>
                  <Input style={{width:300}} type="text" name="title" id="title" onChange={(e)=>{setCourse({...course, title:e.target.value})}} placeholder="Enter title here" />               
               </FormGroup>

               <FormGroup>
                  <Label for="desc">Description</Label>              
                  <Input style={{height:100,paddingBottom:60,width:300}} type="text" name="desc" id="desc" onChange={(e)=>{setCourse({...course, description:e.target.value})}} placeholder="Enter description here" />                 
               </FormGroup>
                        <Container style={{justifyItems:"center",marginLeft:400}}>                       
                              <Button type="submit" style={{width:80}} className="btn-success">Update</Button>                                                                                      
                        </Container>                                                                    
             </Form>
              
          </Fragment>
   }

   export default UpdateCourse;