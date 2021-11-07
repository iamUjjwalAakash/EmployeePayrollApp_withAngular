package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class ResponseDTO {
	public String message;
	public Object data;
	
	public ResponseDTO(String message, Object data ){
		this.message=message;
		this.data=data;
	}
}
