package com.ateam.motionpickr.domain.genre;

import com.ateam.motionpickr.domain.movie.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("api/v1/genre")
public class GenreController {

    @Autowired
    GenreRepository genreRepository;

    @GetMapping
    public String getGenres() {
        return "Hello genres!";
    }
    @GetMapping("/all")
    public List<Genre> genresList(){
        return genreRepository.findAll();
    }

}
