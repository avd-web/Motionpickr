package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.Movie;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Set;


@AllArgsConstructor
public  class MovieMatcher {
   private RecordedUserPreferences preferences;

    public int matchGenres(   Set<Genre> genres){

        int count=0;
        Set<Genre> preferredGenres=preferences.getGenres();
        for(Genre genre:genres){
            if(preferredGenres.contains(genre))
                count++;

        }
        return count;
    }

    public int matchCast(List<Cast> cast){
        int count=0;
        List<Cast>prefferedCast=preferences.getCastset();
        for (Cast c:cast){
            if(prefferedCast.contains(c))
                count++;
        }
        return count;

    }


    public  boolean matchAbsolutePopularity(Movie movie){


        return movie.getPopularity()>preferences.getAbsMinPopularity();
    }
    public  boolean matchRelativePopularity(Movie movie){

        return movie.getPopularity()>preferences.getMinPopularity();
    }

}
