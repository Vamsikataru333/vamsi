package com.cts.training.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

@Entity
public class Skill {
	
	@Id
	@Column(name="user_id")
	private Long id;
	@NotEmpty(message="The name field cannot be Empty")
	private String name;
	@NotEmpty(message="The description field cannot be Empty")
	private String description;
	@NotEmpty(message="The level field cannot be Empty")
	private String level;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	

}
