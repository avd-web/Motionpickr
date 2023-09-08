package com.ateam.motionpickr.domain.movie;


import com.ateam.motionpickr.domain.genre.Genre;
import jakarta.persistence.*;


import java.util.HashSet;
import java.util.Set;


@Entity
public class Movie {
    @Id
    @GeneratedValue
    Long id;

    private String title;

    @ManyToMany
    private Set<Genre> genres = new HashSet<>();

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Genre> getGenres() {
        return genres;
    }

    //Constructor
    public Movie(String title, Set<Genre> genres) {
        this.genres = genres;
        this.title = title;
    }
}
