package com.ateam.motionpickr.domain.genre;

import com.ateam.motionpickr.domain.movie.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
@RequestMapping("api/v1/genre")
public class GenreController {

    @Autowired
    GenreRepository genreRepository;

    @GetMapping("all")
    public List<Genre> genresList(){
        return genreRepository.findAll();
    }

}
