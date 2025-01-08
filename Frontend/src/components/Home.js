import React, { useEffect } from "react";
import {Button } from 'reactstrap';

const Home =()=>
{
  useEffect(()=>{
    document.title="Home || Learn Code";
  },[])

   return(
      <div style={{textAlign:"center"}}>
      <h1 className="display-3">Hello I'm Kishan</h1>
      <p className="lead">I'm Full Stack Developer .</p>
      <hr className="my-2" />
      <p>This project is a simple CRUD (Create, Read, Update, Delete) application built with React for the frontend and Spring Boot for the backend. It allows you to manage a collection of items.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </div>
      
   )
}
export default Home;