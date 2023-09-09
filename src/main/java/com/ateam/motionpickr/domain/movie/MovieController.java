package com.ateam.motionpickr.domain.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/movie")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping
    List<Movie> getMovies () {
        return movieRepository.findAll();
    }

    @GetMapping("list")
    public List<Movie> movieList(){
        System.out.println("Fetch movie");
        return movieRepository.findAll();
    }

    @PostMapping
    Movie createMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

}
