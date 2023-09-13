package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.genre.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
//    Optional<Movie> findByTitle(String title);
    List<Movie> findByGenres(Genre genre);

}
