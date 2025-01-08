package in.codingvk.main.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Course 
{
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  @Column
      private int id;
	  @Column
      private String title;
	  @Column
      private String description;
      
	public Course(int id, String title, String description) 
	{
		super();
		this.id = id;
		this.title = title;
		this.description = description;
	}

	public Course() 
	{
		super();		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() 
	{
		return "Course [id=" + id + ", title=" + title + ", description=" + description + "]";
	}
	
	
      
}
