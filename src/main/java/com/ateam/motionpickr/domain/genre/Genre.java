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
    @JoinTable(
            name = "movie_genres",
            joinColumns = @JoinColumn(name = "genre_id"),
            inverseJoinColumns = @JoinColumn(name = "movie_id")
    )
    private Set<Movie> moviesPerGenre = new HashSet<>();

    private String name;

    public Genre(String name) {
        this.name = name;
    }

    public Genre() {

    }

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
}
