package com.ateam.motionpickr;

import java.io.*;
import java.util.*;

import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.HeaderColumnNameTranslateMappingStrategy;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class csvtobean implements CommandLineRunner {
    public static void CSVtoBean()
    {

        // Hashmap to map CSV data to
        // Bean attributes.
        Map<String, String> mapping = new
                HashMap<String, String>();
        mapping.put("title", "Title");
        mapping.put("budget", "Budget");

        // HeaderColumnNameTranslateMappingStrategy
        // for Student class
        HeaderColumnNameTranslateMappingStrategy<Database> strategy =
                new HeaderColumnNameTranslateMappingStrategy<Database>();
        strategy.setType(Database.class);
        strategy.setColumnMapping(mapping);

        // Create csvtobean and csvreader object
        CSVReader csvReader = null;
        try {
            csvReader = new CSVReader(new FileReader
                    ("C:\\Users\\arjan\\IdeaProjects\\motionpickr\\datasets\\data.csv"));
        }
        catch (FileNotFoundException e) {

            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        CsvToBean csvToBean = new CsvToBean();

        // call the parse method of CsvToBean
        // pass strategy, csvReader to parse method
        List<Database> list = csvToBean.parse(strategy, csvReader);

        // print details of Bean object
        for (Database e : list) {
            System.out.println(e);
        }
    }

    @Override
    public void run(String... args) throws Exception {
        CSVtoBean();
    }
}