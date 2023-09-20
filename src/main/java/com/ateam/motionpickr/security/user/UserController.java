package com.ateam.motionpickr.security.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public Object getUser() {
        Object userDTO = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(userDTO);
        return userDTO;

    }
}
