package com.bhanna.bugtracker.stonks.controllers;

import com.bhanna.bugtracker.stonks.services.AlphaVantageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlphaVantageController {

    private final AlphaVantageService alphaVantageService;

    public AlphaVantageController(AlphaVantageService alphaVantageService) {
        this.alphaVantageService = alphaVantageService;
    }

    @GetMapping("/stonks/time-series-daily/{id}")
    public Object getTimeSeriesData(@PathVariable String symbol) {
        return alphaVantageService.getTimeSeriesData(symbol);
    }

    @GetMapping("/stonks/typeahead")
    public Object getTypeaheadSearch(@RequestParam String keywords) {
        return alphaVantageService.getTypeaheadSearch(keywords);
    }
}
