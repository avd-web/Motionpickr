package com.ateam.motionpickr.domain.movie.review;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/v1/review")
public class ReviewController {
    @Autowired
    ReviewRepository reviewRepository;
}
