package in.codingvk.main.service;

import java.util.List;
import java.util.Optional;

import in.codingvk.main.entities.Course;

public interface CourseService 
{
    public List<Course> getCourses();
    
    public Course getCoursesById(int id);
    
    public Course addCourse(Course course);
    
    public Course updateCourse(int id, Course course);
    
    public void deleteCourse(int id);
}
