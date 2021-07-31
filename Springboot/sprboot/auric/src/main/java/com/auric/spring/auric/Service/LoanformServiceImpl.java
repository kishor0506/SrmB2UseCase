package com.auric.spring.auric.Service;

import java.util.List;
import java.util.Optional;

import com.auric.spring.auric.Repo.LoanformRepo;
import com.auric.spring.auric.entity.Loanform;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LoanformServiceImpl implements LoanformService {


    @Autowired
	LoanformRepo repo;
    
	@Override
	public Loanform save(Loanform lf) {
		
		return  repo.save(lf);
	}

	@Override
	public List<Loanform> findAll() {
		
		return repo.findAll();
	}

	@Override
	public Optional<Loanform> findById(Long id) {
		
		return repo.findById(id);
	}
    
}
