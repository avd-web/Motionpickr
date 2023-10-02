package com.ateam.motionpickr.userPreferences;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Set;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserPreferencesPto {
    double maxPopularity;

    double minPopularity;
    double absMinPopularity;

    Set<Long> genres;
    List<Long> castset;
}
