package com.ateam.motionpickr.domain.movie.review;


import com.ateam.motionpickr.domain.movie.MovieRepository;
import com.ateam.motionpickr.domain.movie.ReviewDto;
import com.ateam.motionpickr.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/review")
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("findByMovieId/{id}")
    public List<Review> getByMovie(@PathVariable("id") long id){
        return reviewRepository.findByMovie(movieRepository.findById(id).orElseThrow());
    }
    @PostMapping
    public void addMovie(@RequestBody ReviewDto reviewDto){
        Review dataReview=new Review();
        dataReview.setComment(reviewDto.getReview());
        dataReview.setMovie(movieRepository.findById(reviewDto.getMovieId()).orElseThrow());
        dataReview.setUser(userRepository.findByEmail(reviewDto.getEmail()).orElseThrow());


        reviewRepository.save(dataReview);
    }
}
