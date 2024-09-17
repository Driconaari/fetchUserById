package com.example.fetchuserbyid.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller

public class CarsController {

    @GetMapping("/cars")
    public String cars() {
        return "cars"; // Serves cars.html
    }

}
