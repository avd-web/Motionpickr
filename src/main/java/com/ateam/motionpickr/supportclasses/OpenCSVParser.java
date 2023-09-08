package com.ateam.motionpickr.supportclasses;

import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.opencsv.CSVReader;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.util.*;

@Component
@Getter
@Setter
public class OpenCSVParser implements CommandLineRunner {

    @Autowired
    private MovieRepository movieRepository;

    private static Movie createMovieFromArray(String[] line) {

        String genres = line[3];
        String[] genresArray = genres.split("'");

        Set<Genre> setOfGenres = new HashSet<>();


        for (String t : genresArray) {
            // Add each element into the set
            setOfGenres.add(new Genre(t));
        }

        return new Movie(line[20], setOfGenres);
    }

    @Override
    public void run(String... args) throws Exception {
        seeder();

    }

    private void seeder() throws IOException {
        String fileName = "C:\\Users\\arjan\\IdeaProjects\\motionpickr\\datasets\\movies_metadata.csv";
        try (CSVReader reader = new CSVReader(new FileReader(fileName))) {
            List<String[]> movieList = reader.readAll();

            int amount = movieList.size();
//            ArrayList<Movie> allMovies = new ArrayList<>();

            for (String[] strings : movieList.stream().skip(1).toList()) {

                var movie = createMovieFromArray(strings);
                movieRepository.save(movie);
                //print
                System.out.println(movie.getTitle());

//                new Movie(title, List<genre>, budget, )
            }
        }
    }
}
