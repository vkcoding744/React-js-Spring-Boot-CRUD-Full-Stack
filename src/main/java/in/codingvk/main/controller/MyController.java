package in.codingvk.main.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import in.codingvk.main.entities.Course;
import in.codingvk.main.service.CourseService;

@RestController
public class MyController 
{ 
	@Autowired
	private CourseService courseService;
	   
   //get all course
   @GetMapping("/courses")
   public List<Course> getAllCourses()
   {
	  return courseService.getCourses();
   }
    
   //get course by id
   @GetMapping("/courses/{id}")
   public Course getCourseById(@PathVariable int id) 
   {	   
     return courseService.getCoursesById(id);
   }
    
   // add course
   @CrossOrigin
   @PostMapping("/courses")
   public Course addCourse(@RequestBody Course course) 
   {
	  return courseService.addCourse(course);
	   
   }
    // update course details
   @CrossOrigin
   @PutMapping("/courses/{id}")
   public Course updateCourse(@PathVariable int id, @RequestBody Course course) 
   {
	  return courseService.updateCourse(id, course);
   }
   
    //delete course
   @CrossOrigin
   @DeleteMapping("/courses/{id}")
   public ResponseEntity<HttpStatus> deleteCourse(@PathVariable int id) 
   {
	   try 
	   {
		 courseService.deleteCourse(id);
		 return new ResponseEntity<>(HttpStatus.OK);
	   } 
	   catch (Exception e) 
	   {
		 return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	   }
   }
   
}
