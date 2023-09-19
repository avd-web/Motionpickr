package com.ateam.motionpickr.security.user;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private String firstname;
    private String lastname;
    private String email;

    public static UserDto toDto(User user){
        return  new UserDto(user.getFirstname(), user.getLastname(), user.getEmail());
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

