package com.ateam.motionpickr.domain.genre;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;

import java.util.List;

@Entity
@Getter
public class Genre {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    //@OneToMany(mappedBy = "genre")
   // private List<MovieGenre> movieGenres;

    public Genre(String title) {
        this.title = title;
    }

    public Genre(){}
}
