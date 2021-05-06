package com.example.service.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.service.bean.User;


public interface UserRepository extends JpaRepository<User, Long> {

	List<User> findByAddress(String address);
	User findByUsername(String username);
}
