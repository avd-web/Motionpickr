package com.ateam.motionpickr.domain.auth;

import com.ateam.motionpickr.domain.movie.Movie;

import java.util.List;

public class User extends Account{
    private String name,email;
    private char[] phoneNumber;

    //many to many with self
    List<User> friends;

    //many to many
    List<Movie>watchList;

    //many to many
    List<Movie>likedMovies;
}
