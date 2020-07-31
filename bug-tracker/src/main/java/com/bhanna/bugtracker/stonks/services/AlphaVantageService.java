package com.bhanna.bugtracker.stonks.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AlphaVantageService {
    String apiKey = "1Z64TEQ1S6T1026T";
    String baseUrl = "https://www.alphavantage.co";

    public Object getTimeSeriesData(String symbol) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(baseUrl + "/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=" + apiKey, Object.class);
    }

    public Object getTypeaheadSearch(String keywords) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(baseUrl + "/query?function=SYMBOL_SEARCH&keywords=" + keywords + "&apikey=" + apiKey, Object.class);
    }

    public Object getCompanyOverview(String symbol) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(baseUrl + "/query?function=OVERVIEW&symbol=" + symbol + "&apikey=" + apiKey, Object.class);
    }
}
