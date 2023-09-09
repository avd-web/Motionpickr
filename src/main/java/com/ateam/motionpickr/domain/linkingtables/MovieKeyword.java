//package com.ateam.motionpickr.domain.linkingtables;
//
//import com.ateam.motionpickr.domain.genre.Genre;
//import com.ateam.motionpickr.domain.keyword.Keyword;
//import com.ateam.motionpickr.domain.movie.Movie;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.io.Serializable;
//
//@Entity
//@Embeddable
//@Getter
//@Setter
//public class MovieKeyword implements Serializable {
//    @Id
//    @GeneratedValue
//    private Long id;
//
////    private MovieKeyword movieKeyword;
//
//    @ManyToOne
//    @JoinColumn(name = "movie_id")
//    private Movie movie;
//
//    @ManyToOne
//    @JoinColumn(name = "keyword_id")
//    private Keyword keyword;
//
//    public MovieKeyword(Movie movie, Keyword keyword) {
//        this.movie = movie;
//        this.keyword = keyword;
//    }
//}
