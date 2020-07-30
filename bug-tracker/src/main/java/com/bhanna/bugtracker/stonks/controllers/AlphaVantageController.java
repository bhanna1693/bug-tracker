package com.bhanna.bugtracker.stonks.controllers;

import com.bhanna.bugtracker.stonks.services.AlphaVantageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlphaVantageController {

    private final AlphaVantageService alphaVantageService;

    public AlphaVantageController(AlphaVantageService alphaVantageService) {
        this.alphaVantageService = alphaVantageService;
    }

    @GetMapping("/stonks/demo")
    public Object getTimeSeriesData(@RequestParam String symbol) {
        return alphaVantageService.getTimeSeriesData(symbol);
    }
}
