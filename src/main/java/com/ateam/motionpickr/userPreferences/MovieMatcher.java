package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.Movie;

import java.util.List;
import java.util.Set;

public class MovieMatcher {
    public static boolean matchThis(Movie movie, Set<Genre> genres, Set<Cast>castList,List<Cast>checkCast){

        Set<Genre>genreSet=movie.getGenres();
        for (Genre g:genres){
            if(!genreSet.contains(g))
                return false;
        }

        for(Cast c:castList){
            if(!checkCast.contains(c)){
                return false;
            }
        }
        return  true;
    }
}
