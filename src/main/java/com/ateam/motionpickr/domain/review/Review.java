package com.ateam.motionpickr.domain.review;

import com.ateam.motionpickr.domain.auth.User;
import com.ateam.motionpickr.domain.movie.Movie;

public class Review {

    //many to one
    Movie movie;
    //many to one
    User reviewer;
    String comment;
}
