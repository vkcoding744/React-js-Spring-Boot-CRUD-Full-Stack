package in.codingvk.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.codingvk.main.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Integer>
{
        
}
