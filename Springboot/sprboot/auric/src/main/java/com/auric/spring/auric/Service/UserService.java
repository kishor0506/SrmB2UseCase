package com.auric.spring.auric.Service;

import com.auric.spring.auric.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User save(User o);

    public List<User> findAll();

    public Optional<User> findById(Long id);
}
