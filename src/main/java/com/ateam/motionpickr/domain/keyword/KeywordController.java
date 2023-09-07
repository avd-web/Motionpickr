package com.ateam.motionpickr.domain.keyword;

import com.ateam.motionpickr.domain.genre.Genre;
import com.ateam.motionpickr.domain.genre.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/keyword")
public class KeywordController {

    @Autowired
    KeywordRepository keywordRepository;

    @GetMapping
    public String getKeywords() {
        return "Hello keywords!";
    }
    @GetMapping("/all")
    public List<Keyword> keywordsList(){
        return keywordRepository.findAll();
    }

}
