package com.ateam.motionpickr.domain.friendrequest;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class friendRequest {
    @Id
    @GeneratedValue
    private Long id;



}