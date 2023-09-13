package com.ateam.motionpickr.domain.genre;

import com.ateam.motionpickr.domain.movie.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("api/v1/genre")
public class GenreController {

    @Autowired
    GenreRepository genreRepository;

    @GetMapping("all")
    public List<Genre> genresList() {
        return genreRepository.findAll();
    }

}
