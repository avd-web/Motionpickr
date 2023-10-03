package com.ateam.motionpickr.domain.movie.recommended;


import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.cast.movieCast.CastRepository;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.genre.GenreRepository;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.ateam.motionpickr.userPreferences.MovieMatcher;
import com.ateam.motionpickr.security.user.User;
import com.ateam.motionpickr.security.user.UserRepository;
import com.ateam.motionpickr.userPreferences.UserPreferences;
import com.ateam.motionpickr.userPreferences.UserPreferencesPto;
import com.ateam.motionpickr.userPreferences.UserPreferencesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("api/v1/recommended")
public class RecommendedController {


    @Autowired
    UserRepository userRepository;

    @Autowired
    UserPreferencesRepository userPreferencesRepository;

    @Autowired
    CastRepository castRepository;

    @Autowired
    GenreRepository genreRepository;

    @Autowired
    MovieRepository movieRepository;




    @GetMapping(name = "movies")
    public List<Movie>getRecommendedMovies(@AuthenticationPrincipal UserDetails details){
        User userFrom=userRepository.findByEmail(details.getUsername()).orElseThrow();


       Optional <UserPreferences> preferencesOptional=userPreferencesRepository.findByUser(userFrom);

       if(preferencesOptional.isEmpty()){return  new ArrayList<>();}
       UserPreferences preferences=preferencesOptional.get();

        List<Movie>movies= movieRepository.findAll();

        List<Movie>recommendedMovies= new ArrayList<>(100);
        for(Movie movie: movies){
            List<Cast>castList=castRepository.findByMovieId(movie.getId());
            if(MovieMatcher.matchThis(movie,preferences.getGenres(),preferences.getCastset(),  castList)) recommendedMovies.add(movie);
        }

        return  recommendedMovies;
    }


    @GetMapping("preferences")
    public UserPreferences getPreferences(@AuthenticationPrincipal UserDetails details){
        User userFrom=userRepository.findByEmail(details.getUsername()).orElseThrow();


        Optional <UserPreferences> preferencesOptional=userPreferencesRepository.findByUser(userFrom);
        return preferencesOptional.orElseThrow();

    }

    @PostMapping
    public void setPreferences(@AuthenticationPrincipal UserDetails details
            ,@RequestBody UserPreferencesPto preferences){
        User user=userRepository.findByEmail(details.getUsername()).orElseThrow();

        UserPreferences userPreferences=userPreferencesRepository.findByUser(user).orElseThrow();


        Set<Genre> genres=new HashSet<>();
        for(Long l:preferences.getGenres()){
            Optional<Genre> genre=genreRepository.findById(l);
            genre.ifPresent(genres::add);
        }
        userPreferences.setGenres(genres);

        Set<Cast>casts=new HashSet<>();
        for(Long l: preferences.getCastSet()){
            castRepository.findById(l).ifPresent(casts::add);
        }
        userPreferences.setCastset(casts);

    }








}
