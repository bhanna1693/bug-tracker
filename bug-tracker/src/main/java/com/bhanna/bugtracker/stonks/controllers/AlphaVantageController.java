package com.bhanna.bugtracker.stonks.controllers;

import com.bhanna.bugtracker.stonks.models.GlobalQuote;
import com.bhanna.bugtracker.stonks.models.GlobalQuoteDTO;
import com.bhanna.bugtracker.stonks.models.SymbolSearchItemDTO;
import com.bhanna.bugtracker.stonks.services.AlphaVantageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    public List<SymbolSearchItemDTO> getTypeaheadSearch(@RequestParam String keywords) {
        return alphaVantageService.getTypeaheadSearch(keywords);
    }

    @GetMapping("/stonks/company-overview")
    public Object getCompanyOverview(@RequestParam String symbol) {
        return alphaVantageService.getCompanyOverview(symbol);
    }

    @GetMapping("/stonks/global-quote")
    public GlobalQuoteDTO getGlobalQuote(@RequestParam String symbol) {
        return alphaVantageService.getGlobalQuote(symbol);
    }

}
