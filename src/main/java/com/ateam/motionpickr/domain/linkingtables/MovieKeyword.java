package com.ateam.motionpickr.domain.linkingtables;

import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.keyword.Keyword;
import com.ateam.motionpickr.domain.movie.Movie;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class MovieKeyword {
    @Id
    @GeneratedValue
    private Long id;

//    private String keyword;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @ManyToOne
    @JoinColumn(name = "keyword_id")
    private Keyword keyword;
}
