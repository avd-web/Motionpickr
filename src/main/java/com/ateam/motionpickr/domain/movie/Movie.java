package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.linkingtables.MovieGenre;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.List;


@Entity
@Getter
public class Movie {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @OneToMany(mappedBy = "movie")
    private List<MovieGenre> movieGenres;

    public Movie(String title) {
        this.title = title;
    }

    public Movie(){}

}
