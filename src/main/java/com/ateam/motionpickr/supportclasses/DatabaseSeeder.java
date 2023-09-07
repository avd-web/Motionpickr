//package com.ateam.motionpickr.supportclasses;
//
//import com.ateam.motionpickr.domain.keyword.Keyword;
//import com.ateam.motionpickr.domain.keyword.KeywordRepository;
//import com.ateam.motionpickr.domain.genre.Genre;
//import com.ateam.motionpickr.domain.genre.GenreRepository;
//import com.ateam.motionpickr.domain.linkingtables.MovieGenreRepository;
//import com.ateam.motionpickr.domain.linkingtables.MovieKeyword;
//import com.ateam.motionpickr.domain.linkingtables.MovieKeywordRepository;
//import com.ateam.motionpickr.domain.movie.Movie;
//import com.ateam.motionpickr.domain.movie.MovieRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class DatabaseSeeder implements CommandLineRunner {
//
//    @Autowired
//    MovieRepository movieRepository;
//    @Autowired
//    GenreRepository genreRepository;
//    @Autowired
//    KeywordRepository keywordRepository;
//    @Autowired
//    MovieKeywordRepository movieKeywordRepository;
//    @Autowired
//    MovieGenreRepository movieGenreRepository;
//
//    private final OpenCSVParser openCsvParser = new OpenCSVParser();
//
//    private void seedMovies(){
//        long count = movieRepository.count();
//        if (count == 0) {
//            System.out.println("Seeding Movies:");
//            openCsvParser.getTitles().forEach(title -> {
//                movieRepository.save(new Movie(title));
//            });
//        }
//    }
//
//    private void seedGenres(){
//        long count = genreRepository.count();
//        if (count == 0) {
//            System.out.println("Seeding Genres:");
//            openCsvParser.getSetOfGenres().forEach(genre -> {
//                genreRepository.save(new Genre(genre));
//            });
//        }
//    }
//
//    private void seedKeywords(){
//        long count = keywordRepository.count();
//        if (count == 0) {
//            System.out.println("Seeding Keywords:");
//            openCsvParser.getSetOfKeywords().forEach(keyword -> {
//                keywordRepository.save(new Keyword(keyword));
//            });
//        }
//    }
//
//    private void seedMovieKeywords(){
//        long count = keywordRepository.count();
//        if (count == 0) {
//            System.out.println("Seeding MovieKeywords:");
//            openCsvParser.getMovieKeywords().forEach((Movie movie, Keyword keyword) -> {
//                movieKeywordRepository.save(new MovieKeyword(movie, keyword));
//            });
//        }
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//        seedMovies();
//        seedGenres();
//        seedKeywords();
//        seedMovieKeywords();
//    }
//}
