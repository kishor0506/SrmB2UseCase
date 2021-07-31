package com.auric.spring.auric.Service;

import java.util.List;
import java.util.Optional;

import com.auric.spring.auric.Repo.UserRepo;
import com.auric.spring.auric.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo repo;

	@Override
	public User save(User o) {

		return repo.save(o);
	}

	@Override
	public List<User> findAll() {

		return repo.findAll();
	}

	@Override
	public Optional<User> findById(Long id) {

		return repo.findById(id);
	}

}
