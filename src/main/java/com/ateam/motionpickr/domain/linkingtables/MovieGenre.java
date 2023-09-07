package com.ateam.motionpickr.domain.linkingtables;

import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.Movie;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.naming.Name;

@Entity
@Embeddable
@Getter
@Setter
public class MovieGenre {

    @Id
    @GeneratedValue
    private Long id;

//    private String title;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "genre_id")
    private Genre genre;

//    @Enumerated(EnumType.STRING)
//    private Unit unit;
//    private enum Unit {
//        GRAM,
//        LITERS,
//        MILLILITERS,
//        TEASPOONS,
//        PIECES;
//    }

}
