package com.ateam.motionpickr.domain.movie.recommended;


import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.ateam.motionpickr.security.user.User;
import com.ateam.motionpickr.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/recommended")
public class RecommendedController {


    @Autowired
    UserRepository userRepository;

    MovieRepository movieRepository;


    @GetMapping
    public List<Recommendation> getRecommended(@AuthenticationPrincipal UserDetails details){
        User user=userRepository.findByEmail(details.getUsername()).orElseThrow();
        return user.getRecommended();
    }

    @PostMapping
    public void recommendTo(@RequestBody RecommendedPto pto, @AuthenticationPrincipal UserDetails details){
        User userFrom=userRepository.findByEmail(details.getUsername()).orElseThrow();
        User userTo=userRepository.findByEmail(pto.getEmail()).orElseThrow();
        Movie movie=movieRepository.findById(pto.getMovieId()).orElseThrow();


    }



}
