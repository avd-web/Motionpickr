package com.ateam.motionpickr.supportclasses;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SearchHelper {

    private static String extractNonLatinCharacters(String input) {
        Pattern nonLatinPattern = Pattern.compile("[^\\p{IsLatin}]");
        Matcher matcher = nonLatinPattern.matcher(input);
        StringBuilder nonLatinCharacters = new StringBuilder();
        while (matcher.find()) {
            nonLatinCharacters.append(matcher.group());
        }

        return nonLatinCharacters.toString();
    }
}
