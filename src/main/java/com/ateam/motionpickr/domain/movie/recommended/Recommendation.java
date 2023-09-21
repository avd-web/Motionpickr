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
    @JoinColumn(name = "user_to_id")
    User userTo;

    @ManyToOne
    @JoinColumn(name = "user_from_id")
    User userFrom;
    @ManyToOne
    @JoinColumn(name = "movie_id")
    Movie movie;

    public Recommendation(User userTo, User userFrom, Movie movie) {
        this.userTo = userTo;
        this.userFrom = userFrom;
        this.movie = movie;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public User getUserFrom() {
        return userFrom;
    }

    public void setUserFrom(User userFrom) {
        this.userFrom = userFrom;
    }

    public User getUserTo() {
        return userTo;
    }

    public void setUserTo(User userTo) {
        this.userTo = userTo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Recommendation that = (Recommendation) o;
        return   userTo.equals(that.userTo) && userFrom.equals(that.userFrom) && movie.equals(that.movie);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userTo, userFrom, movie);
    }
}
