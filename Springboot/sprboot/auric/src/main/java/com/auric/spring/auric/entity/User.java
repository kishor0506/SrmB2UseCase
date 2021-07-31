package com.auric.spring.auric.entity;
import javax.persistence.*;

@Entity
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    public String rUsername;

    public String rPassword;

    public String rEmail;
}