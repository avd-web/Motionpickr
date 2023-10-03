package com.ateam.motionpickr.domain.movie.review;


import com.ateam.motionpickr.security.user.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReviewDto {
    long movieId;
    long id;
    UserDto userDto;
    String review;

    double score;



    public static ReviewDto toDto(Review review) {
        long movieId = review.getMovie().getId();
        UserDto userDto1 = UserDto.toDto(review.getUser());
        return new ReviewDto(movieId,review.getId(), userDto1, review.getComment(), review.getScore());
    }

    @Override
    public String toString() {
        return "ReviewDto{" +
                "movieId=" + movieId +
                ", userDto=" + userDto +
                ", review='" + review + '\'' +
                '}';
    }
}
