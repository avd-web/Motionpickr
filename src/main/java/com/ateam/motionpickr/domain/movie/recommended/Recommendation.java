package com.ateam.motionpickr.domain.movie.recommended;

import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.security.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Recommendation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    Movie movie;

    public Recommendation( Movie movie) {
        this.movie = movie;
    }


}
