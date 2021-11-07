package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ContactDTO {
	
	public String fname;
	public long zip;
	public String city;
	public String state;
	public String address;
	public long phone;
	
}
