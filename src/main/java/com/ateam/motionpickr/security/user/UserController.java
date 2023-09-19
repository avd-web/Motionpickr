package com.ateam.motionpickr.security.user;

import com.ateam.motionpickr.domain.movie.ReviewDto;
import com.ateam.motionpickr.domain.movie.review.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("{email}")
    public UserDto getUser(@PathVariable String email) {
        Optional<User> userEmail = userRepository.findByEmail(email);
        return UserDto.toDto(userEmail.orElseThrow());

    }
}
