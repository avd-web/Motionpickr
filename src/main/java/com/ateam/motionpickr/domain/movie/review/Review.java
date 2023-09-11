package com.ateam.motionpickr.domain.movie.review;

import com.ateam.motionpickr.domain.movie.Movie;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    //many to one
    @ManyToOne
    @JoinColumn(name = "movie_id")
    Movie movie;
    //many to one
    //User reviewer;
    String comment;
}
