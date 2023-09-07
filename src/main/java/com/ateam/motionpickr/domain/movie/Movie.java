package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.moviegenre.MovieGenre;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;

import java.sql.Date;
import java.util.List;


@Entity
@Getter
public class Movie {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @OneToMany(mappedBy = "movie")
    @JsonIgnore
    private List<MovieGenre> movieGenres;

    public Movie(String title) {
        this.title = title;
    }

    public Movie(){}

}
