package in.codingvk.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import in.codingvk.main.entities.Course;
import in.codingvk.main.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService
{
	
	@Autowired
	private CourseRepository courseRepository;

	@Override
	public List<Course> getCourses() 
	{
	 return courseRepository.findAll();		
	}

	@Override
	public Course getCoursesById(int id) 
	{
	  Optional<Course> validCourse = courseRepository.findById(id);
	  if(validCourse.isPresent()) 
	  {
		 return validCourse.get();	
	  }
	  else 
	  {
		  return null;
	  }
	     
	}

	@Override
	public Course addCourse(Course course) 
	{	
		 courseRepository.save(course);
		 return course;
	}

	@Override
	public Course updateCourse(int id, Course course)
	{	
		Course validCourse = getCoursesById(id);
		if(validCourse !=null) 
		{
			validCourse.setTitle(course.getTitle());
			validCourse.setDescription(course.getDescription());
			return courseRepository.save(validCourse);
		}		
	     return null;		         			
	}

	@Override
	public void deleteCourse(int id)
	{
      courseRepository.deleteById(id);
      
	}

}
