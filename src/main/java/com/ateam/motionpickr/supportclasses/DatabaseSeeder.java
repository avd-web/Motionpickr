package com.ateam.motionpickr.supportclasses;

import com.ateam.motionpickr.domain.genre.GenreRepository;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    GenreRepository genreRepository;

    private void seedMovies(){
        long count = movieRepository.count();
        if (count == 0) {
            System.out.println("Seeding Movies:");

            // TAKE DATA FROM CSVParser AND CREATE NEW MOVIE ENTITIES HERE
            CSVParser csvParser = new CSVParser();
            csvParser.parse();
            csvParser.getTitles().forEach(title -> {
                movieRepository.save(new Movie(title));
            });

//            movieRepository.save(new Movie("movie1"));
            count = movieRepository.count();
        }
        System.out.println(count + " tags in the database.");
    }

    private void seedGenres(){
        long count = genreRepository.count();
        if (count == 0) {
            System.out.println("Seeding Genres:");
//            genreRepository.save(new Genre("Genre1"));
            count = genreRepository.count();
        }
        System.out.println(count + " tags in the database.");
    }

    @Override
    public void run(String... args) throws Exception {
//        seedMovies();
//        seedGenres();
        movieRepository.save(new Movie("Waterloo"));
        movieRepository.save(new Movie("A bridge too far"));

    }
}
