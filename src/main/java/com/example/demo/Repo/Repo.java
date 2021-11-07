package com.example.demo.Repo;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Contact;

public interface Repo extends JpaRepository<Contact, Integer> {

}
