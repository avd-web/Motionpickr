package com.ateam.motionpickr.domain.watchList;


import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.security.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/api/v1/watchList")
public class WatchListController {

    @Autowired
    UserRepository userRepository;


    @PostMapping()
    public void addMovie(){}


    @DeleteMapping
    public void deleteMovie(){}


}
