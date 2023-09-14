package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.genre.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    Movie getMovieById(@PathVariable("id") long id) {
        return movieRepository.findById(id).orElse(null);
    }

    @GetMapping("list")
    public List<Movie> movieList() {
        System.out.println("Fetch movie");
        return movieRepository.findAll();
    }


    @GetMapping
    public Page<Movie> findAll(@RequestParam int page, @RequestParam int size) {
        PageRequest moviePage = PageRequest.of(page, size);
        return movieRepository.findAll(moviePage);
    }

    @GetMapping("letter/{letter}")
    public List<Movie> findByLetter(@PathVariable("letter") String letter) {
        System.out.println("Start loading the letter");
        List<Movie> alphabet = movieRepository.findMoviesByTitleStartingWithIgnoringCase(letter);
        System.out.println("End loading the letter");
        return alphabet;
    }

    @GetMapping("/genre/{id}")
    public List<Movie> findByGenres(@PathVariable("id") Long id) {
        var genre = genreRepository.findById(id).get();
        return movieRepository.findByGenres(genre);
    }


    @GetMapping("search/{search}")
    public List<Movie> containsSearch(@PathVariable("search") String search) {
        return movieRepository.findMoviesByTitleContainsIgnoringCase(search);
    }


//    @PostMapping
//    Movie createMovie(@RequestBody Movie movie) {
//        return movieRepository.save(movie);
//    }

}
