package com.ateam.motionpickr.supportclasses;

import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.genre.GenreRepository;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.opencsv.CSVReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class OpenCSVParser implements CommandLineRunner {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Value("${motionpickr.dir}")
    private String filename;

    @Value("${motionpickrCast.dir}")
    private String filenameCast;

    private final Set<String> knownActors = new HashSet<>();
    private final Set<String> knownGenres = new HashSet<>();


    public void getActor(String[] line) {
        String actor = line[0];

        for (String values : actor.split("\\[")) {
            var fields = values.split("}");
            for (String objects : fields) {
                String[] actorFields = objects.split(",");
                for (String string : actorFields) {
                    if (string.contains("name")) {
                        String name = string.replaceAll("'name': ", "");
                        knownActors.add(name.substring(2, name.length() - 1));
                        System.out.println(name.substring(2, name.length() - 1));
                    }
                }
            }
        }
    }




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
        try (CSVReader reader = new CSVReader(new FileReader(filename))) {
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
