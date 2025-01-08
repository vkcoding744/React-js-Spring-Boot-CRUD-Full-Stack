
 import React, { useEffect, useState } from "react";
 import Course from "./Course";
 import base_url from "../../SpringBootAPIs/Api";
 import {toast } from 'react-toastify';
 import axios from "axios";


     const ViewCourses=()=>
     {     
          useEffect(()=>{
               document.title="All Course || Learn Code"; 
               getAllCoursesFromServer();  
          },[])

               //function to call server
           const getAllCoursesFromServer=()=>
          {
               axios.get(`${base_url}/courses`)
               .then( (response)=>{console.log(response.data)
                 // handle success 
                setCourses(response.data)
                toast.success("Course has been loaded")
               })                                                                        
               .catch((error)=>{console.log(error)             
                    // handle error  
                  toast.error("Somthing went wrong")
               })                                         
           };

            const[courses, setCourses]=useState([

            ]);

           //after deleting course list will update
            const updateCourseList=(id)=>
            {
             setCourses(courses.filter((c)=>c.id!==id))
            }
       
      return(

        <div style={{textAlign:"center"}}>
            <h2>All Courses</h2>
            <p>List of courses are as follows</p>
                {
                 courses.length>0 ? courses.map((item)=> <Course key={item.id} course={item} updatedlist={updateCourseList} />) : "No Courses"
                }

        </div>
    )

}
 export default ViewCourses;