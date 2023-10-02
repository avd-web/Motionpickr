package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.security.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPreferencesRepository extends JpaRepository<RecordedUserPreferences,Long> {
    RecordedUserPreferences findFirstByUserOrderByInputDateDesc(User user);
    List<RecordedUserPreferences> findByUser(User user);


}
