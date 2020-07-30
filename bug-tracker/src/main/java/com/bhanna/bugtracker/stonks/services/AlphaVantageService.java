package com.bhanna.bugtracker.stonks.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AlphaVantageService {
    String apiKey = "1Z64TEQ1S6T1026T";

    public Object getTimeSeriesData(String symbol) {
        String baseUrl = "https://www.alphavantage.co";
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(baseUrl + "/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=" + apiKey, Object.class);
    }
}
