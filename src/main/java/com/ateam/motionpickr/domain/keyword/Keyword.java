//package com.ateam.motionpickr.domain.keyword;
//
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
//import lombok.Getter;
//
//import java.util.List;
//
//@Entity
//@Getter
//public class Keyword {
//    @Id
//    @GeneratedValue
//    private Long id;
//
//    private String keyword;
//
//    @OneToMany(mappedBy = "keyword")
//    private List<MovieKeyword> movieKeywords;
//
//    public Keyword(String keyword) {
//        this.keyword = keyword;
//    }
//
//    public Keyword(){}
//}
