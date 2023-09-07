package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.actor.Actor;
import com.ateam.motionpickr.domain.cast.Cast;
import com.ateam.motionpickr.domain.genre.Genre;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.util.List;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @ManyToMany
    private List<Genre> movieGenres;

    @ManyToMany
    private List<Actor>actors;

    @ManyToMany
    private List<Cast>cast;


    public Movie(String title) {
        this.title = title;
    }
}
