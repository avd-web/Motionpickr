package com.ateam.motionpickr.supportclasses;

import com.ateam.motionpickr.domain.genre.GenreRepository;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.opencsv.CSVReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.util.*;

@Component
public class OpenCSVParser implements CommandLineRunner {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    private final Set<String> knownGenres = new HashSet<>();

    private Movie createMovieFromArray(String[] line) {
        String genres = line[3];
        String[] genresArray = genres.split("'");
        List<String> genreNames = Arrays.stream(genresArray).filter(term -> Character.isUpperCase(term.charAt(0))).toList();
        System.out.println(genreNames);
        Set<Genre> setOfGenres = new HashSet<>();
        for (String t : genreNames) {
            if (!knownGenres.contains(t)) {
                knownGenres.add(t);
                if (genreRepository.findByName(t).isEmpty()) {
                    genreRepository.save(new Genre(t));
                }
            }
            var genre = genreRepository.findByName(t).get();
            // Add each element into the set
            setOfGenres.add(genre);
        }
        if (line.length < 21) {
            System.out.println(Arrays.toString(line));
            System.exit(-1);
        }
        return new Movie(line[20], setOfGenres);
    }

    @Override
    public void run(String... args) throws Exception {
        if (movieRepository.count() == 0) {
            seeder();
        }
    }

    private void seeder() throws IOException {
        String fileName = "C:\\Users\\Alexa\\Desktop\\TMDB\\movies_metadata.csv";
        try (CSVReader reader = new CSVReader(new FileReader(fileName))) {
            List<String[]> movieList = reader.readAll();
            for (String[] strings : movieList.stream().skip(1).toList()) {
                var movie = createMovieFromArray(strings);
                movieRepository.save(movie);
                //print
                System.out.println(movie.getTitle());
            }
        }
    }
}
