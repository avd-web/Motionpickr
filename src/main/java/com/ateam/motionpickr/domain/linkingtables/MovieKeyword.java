package com.ateam.motionpickr.domain.linkingtables;

import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.Movie;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class MovieKeyword {
    @Id
    @GeneratedValue
    private Long id;

//    private String title;

    @ManyToOne
    private Movie movie;

    @ManyToOne
    private Genre genre;
}
