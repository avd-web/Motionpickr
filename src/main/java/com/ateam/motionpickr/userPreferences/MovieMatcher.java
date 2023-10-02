package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.domain.movie.Movie;

import java.util.Set;

public  class MovieMatcher {
    RecordedUserPreferences preferences;

    public boolean matchNrMoreGenres(Movie movie,int n){
        return false;
    }


    public  boolean matchAbsolutePopularity(Movie movie){
        return false;
    }

    public  boolean matchRelativePopularity(Movie movie){
        return false;
    }

}
