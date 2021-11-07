package com.example.demo.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ContactDTO;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.entities.Contact;
import com.example.demo.service.AddressbookService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/addressbook")
@RestController
public class AddressbookController {
	
	@Autowired
	AddressbookService addressbookService;
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/{id}")
	public ResponseEntity<ResponseDTO> getById( @PathVariable("id") int id ){
		ResponseDTO responseDTO = new ResponseDTO("By ID: ", addressbookService.getById(id));
		log.info("In GetBYId");
		return new ResponseEntity<ResponseDTO>( responseDTO , HttpStatus.OK);
	}
	@CrossOrigin("http://localhost:4200/")
	@GetMapping("/")
	public ResponseEntity<ResponseDTO> getAll(){
		ResponseDTO responseDTO = new ResponseDTO("By ID: ", addressbookService.getAll());
		log.info("In GetAll");
		return new ResponseEntity<ResponseDTO>( responseDTO , HttpStatus.OK);
	}
	@CrossOrigin("http://localhost:4200/")
	@PostMapping("/")
	public ResponseEntity<ResponseDTO> add(@RequestBody ContactDTO contactDTO){
		ResponseDTO responseDTO = new ResponseDTO("By ID: ", addressbookService.add(contactDTO));
		log.info("In Add");
		return new ResponseEntity<ResponseDTO>( responseDTO , HttpStatus.OK);
	}
	@CrossOrigin("http://localhost:4200/")
	@PutMapping("/update/{id}")
	public ResponseEntity<ResponseDTO> update(@RequestBody Contact contact, @PathVariable("id") int id){
		ResponseDTO responseDTO = new ResponseDTO("By ID: ", addressbookService.update(id, contact));
		log.info("In Update");
		return new ResponseEntity<ResponseDTO>( responseDTO , HttpStatus.OK);
	}
	@CrossOrigin("http://localhost:4200/")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ResponseDTO> delete (@PathVariable("id") int id){
		ResponseDTO responseDTO = new ResponseDTO("By ID: ", addressbookService.delete(id));
		log.info("In Delete");
		return new ResponseEntity<ResponseDTO>( responseDTO , HttpStatus.OK);
	}
}
