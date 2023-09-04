package com.ateam.motionpickr;

public class Database {
    private static final long serialVersionUID = 1L;

    public String
            Budget,
//            genres,
//            homepage,
//            id,
//            keywords,
//            original_language,
//            original_title,
//            overview,
//            popularity,
//            production_companies,
//            production_countries,
//            release_date,
//            revenue,
//            runtime,
//            spoken_languages,
//            status,
//            tagline,
            Title;
//            vote_average,
//            vote_count;

    public String getBudget()
    {
        return Budget;
    }

    public void setBudget(String budget)
    {
        Budget = budget;
    }

//    public String getRollNo()
//    {
//        return RollNo;
//    }
//
//    public void setRollNo(String rollNo)
//    {
//        RollNo = rollNo;
//    }
//
//    public String getDepartment()
//    {
//        return Department;
//    }
//
//    public void setDepartment(String department)
//    {
//        Department = department;
//    }
//
//    public String getResult()
//    {
//        return Result;
//    }
//
//    public void setResult(String result)
//    {
//        Result = result;
//    }

    public String getTitle()
    {
        return Title;
    }

    public void setTitle(String title)
    {
        Title = title;
    }

    @Override
    public String toString()
    {
        return "Student [Title=" + Title + ", Budget=" + Budget;
    }
}