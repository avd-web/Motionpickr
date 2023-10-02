package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.domain.cast.movieCast.Cast;
import com.ateam.motionpickr.domain.genre.Genre;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.Set;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RecordedUserPreferences {

    Date inputDate;

    PopularityRecord popularityRecord;
    Set<Genre> genres;

    Set<Cast> castset;

}
