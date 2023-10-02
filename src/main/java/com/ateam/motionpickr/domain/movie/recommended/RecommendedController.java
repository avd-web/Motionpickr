package com.ateam.motionpickr.domain.movie.recommended;


import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.cast.movieCast.CastRepository;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.ateam.motionpickr.security.user.User;
import com.ateam.motionpickr.security.user.UserRepository;
import com.ateam.motionpickr.userPreferences.RecordedUserPreferences;
import com.ateam.motionpickr.userPreferences.UserPreferencesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map.Entry;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    MovieRepository movieRepository;




    @GetMapping(name = "movies")
    public List<Movie>getRecommendedMovies(@AuthenticationPrincipal UserDetails details){
        User userFrom=userRepository.findByEmail(details.getUsername()).orElseThrow();

        RecordedUserPreferences recordedUserPreferences =
                userPreferencesRepository.findFirstByUserOrderByInputDateDesc(userFrom);

        List<Movie>movies= movieRepository.findAll();

        HashMap<Movie,Integer>prefMap=new HashMap<>();
        for(Movie movie:movies){
            List<Cast>castList=castRepository.findByMovieId(movie.getId());
            prefMap.put(movie,recordedUserPreferences.evaluate(movie,castList));
        }


        return prefMap.entrySet().stream()
                .sorted((x, y)-> y.getValue()).map(Entry::getKey).toList();
    }

    @GetMapping
    public RecordedUserPreferences getPreferences(@AuthenticationPrincipal UserDetails details){
        User userFrom=userRepository.findByEmail(details.getUsername()).orElseThrow();

        return userPreferencesRepository.findFirstByUserOrderByInputDateDesc(userFrom);
    }








}
