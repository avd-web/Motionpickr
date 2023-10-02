package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.movie.Movie;
import com.ateam.motionpickr.security.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;
import java.util.Set;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "preferences")
public class UserPreferences {
   @Id
   @GeneratedValue(strategy = GenerationType.SEQUENCE)
   @Column(name = "id", nullable = false)
   private Long id;

   private Date inputDate;

   @ManyToOne
   @JoinColumn(name = "user_id")
   User user;

    double maxPopularity;

    double minPopularity;
    double absMinPopularity;

    @OneToMany
    Set<Genre> genres;

    @OneToMany
    List<Cast> castset;

   public int evaluate(Movie movie, List<Cast> castList){
       int count=0;

       MovieMatcher matcher=new MovieMatcher(this);
       count+=matcher.matchCast(castList);
       count+= matcher.matchGenres(movie.getGenres());

       if(!matcher.matchAbsolutePopularity(movie)){
           if(!matcher.matchRelativePopularity(movie))
               return  -1;
           }
       else count+=10;


       return count;

   }

}
