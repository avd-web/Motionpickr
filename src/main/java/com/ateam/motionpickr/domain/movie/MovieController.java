package com.ateam.motionpickr.domain.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/movie")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping("all")
    public List<Movie> getMovies() {
        return movieRepository.findAll();
    }


//    @GetMapping("title/{title}")
//    public Optional<Movie> findByTitle(@PathVariable("title") String title) {
//        return movieRepository.findByTitle(title);
//    }

}
