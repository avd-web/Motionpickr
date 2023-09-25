package com.ateam.motionpickr.domain.movie.recommended;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendedRepository extends JpaRepository<Recommendation,Long> {
}
