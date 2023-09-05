package com.ateam.motionpickr.supportclasses;

import com.ateam.motionpickr.domain.keyword.Keyword;
import com.ateam.motionpickr.domain.keyword.KeywordRepository;
import com.ateam.motionpickr.domain.genre.Genre;
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
    @Autowired
    KeywordRepository keywordRepository;

    private final CSVParser csvParser = new CSVParser();

    private void seedMovies(){
        long count = movieRepository.count();
        if (count == 0) {
            System.out.println("Seeding Movies:");
            csvParser.getTitles().forEach(title -> {
                movieRepository.save(new Movie(title));
            });
        }
    }

    private void seedGenres(){
        long count = genreRepository.count();
        if (count == 0) {
            System.out.println("Seeding Genres:");
            csvParser.getSetOfGenres().forEach(genre -> {
                genreRepository.save(new Genre(genre));
            });
        }
    }

    private void seedKeywords(){
        long count = keywordRepository.count();
        if (count == 0) {
            System.out.println("Seeding Keywords:");
            csvParser.getSetOfKeywords().forEach(keyword -> {
                keywordRepository.save(new Keyword(keyword));
            });
        }
    }

    @Override
    public void run(String... args) throws Exception {
        seedMovies();
        seedGenres();
    }
}
