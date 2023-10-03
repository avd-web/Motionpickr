package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.security.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;
import java.util.Set;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "preferences")
public class UserPreferences {
   @Id
   @GeneratedValue(strategy = GenerationType.SEQUENCE)
   @Column(name = "id", nullable = false)
   private Long id;


   @OneToOne
   @JoinColumn(name = "user_id")
   User user;


    @ManyToMany
    Set<Genre> genres;

    @ManyToMany
    Set<Cast> castset;


}
