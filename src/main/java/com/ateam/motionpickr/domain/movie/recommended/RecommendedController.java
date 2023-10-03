package com.ateam.motionpickr.domain.movie.recommended;


import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.cast.movieCast.CastRepository;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.genre.GenreRepository;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.ateam.motionpickr.security.user.User;
import com.ateam.motionpickr.security.user.UserRepository;
import com.ateam.motionpickr.userPreferences.UserPreferences;
import com.ateam.motionpickr.userPreferences.UserPreferencesPto;
import com.ateam.motionpickr.userPreferences.UserPreferencesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.*;
import java.util.Map.Entry;

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

        if(userPreferencesRepository.findByUser(userFrom).isEmpty())

            return new ArrayList<>();

        UserPreferences userPreferences =
                userPreferencesRepository.findFirstByUserOrderByInputDateDesc(userFrom);

        List<Movie>movies= movieRepository.findAll();

        HashMap<Movie,Integer>prefMap=new HashMap<>();
        for(Movie movie:movies){
            List<Cast>castList=castRepository.findByMovieId(movie.getId());
            prefMap.put(movie, userPreferences.evaluate(movie,castList));
        }
        return prefMap.entrySet().stream()
                .sorted((x, y)-> y.getValue()).map(Entry::getKey).toList();
    }

    @GetMapping
    public UserPreferences getPreferences(@AuthenticationPrincipal UserDetails details){
        User userFrom=userRepository.findByEmail(details.getUsername()).orElseThrow();

        return userPreferencesRepository.findFirstByUserOrderByInputDateDesc(userFrom);
    }
    @PostMapping
    public void setPreferences(@AuthenticationPrincipal UserDetails details
            ,@RequestBody UserPreferencesPto preferences){
        User user=userRepository.findByEmail(details.getUsername()).orElseThrow();

        UserPreferences userPreferences=new UserPreferences();
        userPreferences.setUser(user);
        userPreferences.setInputDate(Date.valueOf(LocalDate.now()));

        userPreferences.setMaxPopularity(preferences.getMaxPopularity());
        userPreferences.setMinPopularity(preferences.getMinPopularity());
        userPreferences.setAbsMinPopularity(preferences.getAbsMinPopularity());

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
