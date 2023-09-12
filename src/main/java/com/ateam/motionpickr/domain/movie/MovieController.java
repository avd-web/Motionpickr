package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.genre.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/movie")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    GenreRepository genreRepository;

//    @GetMapping
//    List<Movie> getMovies() {
//        return movieRepository.findAll();
//    }

    @GetMapping("{id}")
    @ResponseBody
    Movie getMovieById(@PathVariable("id") long id){
        return movieRepository.findById(id).orElse(null);
    }

    @GetMapping("list")
    public List<Movie> movieList() {
        System.out.println("Fetch movie");
        return movieRepository.findAll();
    }

    @GetMapping("/genre/{id}")
    public List<Movie> findByGenres(@PathVariable("id") Long id) {
        var genre = genreRepository.findById(id).get();
        return movieRepository.findByGenres(genre);
    }

//    @PostMapping
//    Movie createMovie(@RequestBody Movie movie) {
//        return movieRepository.save(movie);
//    }

}
