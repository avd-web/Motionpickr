package com.ateam.motionpickr.userPreferences;

import com.ateam.motionpickr.security.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserPreferencesRepository extends JpaRepository<UserPreferences,Long> {

    Optional<UserPreferences>findByUser(User user);




}
