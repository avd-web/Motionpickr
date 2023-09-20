package com.ateam.motionpickr.domain.movie.recommended;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RecommendedPto {
     private String email;
     private long movieId;
}
