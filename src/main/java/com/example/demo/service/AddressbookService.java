package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.Repo;
import com.example.demo.dto.ContactDTO;
import com.example.demo.entities.Contact;

@Service
public class AddressbookService {
	
	@Autowired
	Repo repo;
	

	public Contact getById(int id) {
		return repo.getById(id);
	}
	
	public List<Contact> getAll(){
		return repo.findAll();
	}

	public Contact add(ContactDTO contactDTO){
		Contact contact = new Contact(contactDTO);
		repo.save(contact);
		return contact;
	}
	
	public Contact update(int id, Contact contact){
	repo.deleteById(id);
	repo.save(contact);
		return contact;
	}
	
	public Contact delete(int id){
		Contact contact = repo.findById(id).orElse(null);
		repo.deleteById(id);
		return contact;
	}
}
