package com.ateam.motionpickr.domain.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/movie")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping
    public String getMovies() {
        return "Hello movies!";
    }

    @GetMapping("/all")
    public List<Movie> movieList(){
        return movieRepository.findAll();
    }

}
