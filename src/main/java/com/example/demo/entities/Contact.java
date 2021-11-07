package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.demo.dto.ContactDTO;

import lombok.Data;

@Data
@Entity
@Table(name="ContactApp")
public class Contact {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String fName;
	private long zip;
	private String city;
	private String state;
	private String address;
	private long phone;
	
	public Contact(int id, ContactDTO contactDTO  ){
		this.id=id;
		this.fName=contactDTO.getFname();
		this.zip=contactDTO.getZip();
		this.city=contactDTO.getCity();
		this.state=contactDTO.getState();
		this.phone=contactDTO.getPhone();
		this.address=contactDTO.getAddress();
	}
	
	public Contact(ContactDTO contactDTO  ){
		
		this.fName=contactDTO.getFname();
		this.zip=contactDTO.getZip();
		this.city=contactDTO.getCity();
		this.state=contactDTO.getState();
		this.phone=contactDTO.getPhone();
		this.address=contactDTO.getAddress();
	}
	
	public Contact(){
		
	}
	
	
}
