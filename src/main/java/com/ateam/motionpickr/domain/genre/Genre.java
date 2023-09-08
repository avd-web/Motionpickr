package com.ateam.motionpickr.domain.genre;

import com.ateam.motionpickr.domain.movie.Movie;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Genre {
    @Id
    @GeneratedValue
    Long id;

    @ManyToMany
    private Set<Movie> moviesPerGenre = new HashSet<>();

    private String name;

    //@OneToMany(mappedBy = "genre")
    // private List<MovieGenre> movieGenres;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Movie> getMoviesPerGenre() {
        return moviesPerGenre;
    }

    public static Genre getWarGenre() {
        return new Genre("War");
    }

    //Constructor
    public Genre(String name) {
        this.name = name;
    }
}
