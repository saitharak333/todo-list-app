package com.example.todoapp;

public class Todos {
	private long id;
	private String username;
	private String description;
	private String deadline;
	
	public Todos (){
		
	}
	
	public Todos(long id, String username, String description, String deadline) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.deadline = deadline;
	}
	
	public long getId() {
		return id;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Todos other = (Todos) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDeadline() {
		return deadline;
	}
	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}

	@Override
	public String toString() {
		return "Todos [id=" + id + ", username=" + username + ", description=" + description + ", deadline=" + deadline
				+ "]";
	}
	
}