package com.ateam.motionpickr.domain.movie;

import com.ateam.motionpickr.domain.auth.User;

public class Review {

    //many to one
    Movie movie;
    //many to one
    User reviewer;
    String comment;
}
