import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Container} from 'reactstrap';
import base_url from "../../SpringBootAPIs/Api";
import { toast } from "react-toastify";


   const AddCourse=()=>
   {
    useEffect(()=>{
      document.title="Add Course || Learn Code";     
     },[])

    const [course,setCourse]=useState({});
                   
       //form handler function
    const handleForm=(e)=>
    {
      console.log(course)
      e.preventDefault(); 
      postdatatoserver(course);
    };

    //creating function to post data on server
     const postdatatoserver=(data)=>
     {     
       axios.post(`${base_url}/courses`,data).then((response)=>{
          //handle success             
            console.log(response.data); 
            toast.success("Course Add Successfully")    
            setCourse({id:"",title:"",description:""})                             
       }).catch((error)=>{
          //handle error
         console.log(error)})
         toast.error("Somthing went wrong");
     }
             
        return <Fragment>
                <h3 style={{textAlign:"center",margin:10}}>Fill Course Details</h3>

             <Form onSubmit={handleForm} style={{justifyItems:"center"}}>

               <FormGroup>
                  <Label for="userId">Course Id</Label>
                  <Input style={{width:300}} type="text" name="userId" id="userId" onChange={(e)=>{setCourse({...course, id:e.target.value})}} placeholder="Enter courde id here" />                 
               </FormGroup>

               <FormGroup>
                  <Label for="title">Title</Label>
                  <Input style={{width:300}} type="text" name="title" id="title" onChange={(e)=>{setCourse({...course, title:e.target.value})}} placeholder="Enter title here" />               
               </FormGroup>

               <FormGroup>
                  <Label for="desc">Description</Label>              
                  <Input style={{height:100,paddingBottom:60,width:300}} type="text" name="desc" id="desc" onChange={(e)=>{setCourse({...course, description:e.target.value})}} placeholder="Enter description here" />                 
               </FormGroup>
                        <Container style={{justifyItems:"center",marginLeft:400}}>
                        
                              <Button type="submit" style={{width:80}} className="btn-success">Add</Button>            
                              <Button type="reset" style={{marginLeft:100}} className="btn-warning">Clear</Button>                              
                                                  
                        </Container>
                                                                        
             </Form>
              
          </Fragment>
        
   }
   export default AddCourse;