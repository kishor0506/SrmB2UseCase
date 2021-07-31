package com.auric.spring.auric.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class kyc {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;
private Long Aadhaar;
private String Pancard;
private String Voterid;
public Long getId() {
    return id;
}
public void setId(Long id) {
    this.id = id;
}
public Long getAadhaar() {
    return Aadhaar;
}
public void setAadhaar(Long aadhaar) {
    Aadhaar = aadhaar;
}
public String getPancard() {
    return Pancard;
}
public void setPancard(String pancard) {
    Pancard = pancard;
}
public String getVoterid() {
    return Voterid;
}
public void setVoterid(String voterid) {
    Voterid = voterid;
}
@Override
public String toString() {
    return "kyc [Aadhaar=" + Aadhaar + ", Pancard=" + Pancard + ", Voterid=" + Voterid + ", id=" + id + "]";
}

}
