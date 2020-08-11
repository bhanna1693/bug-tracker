package com.bhanna.bugtracker.stonks.services;

import com.bhanna.bugtracker.stonks.models.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class AlphaVantageService {
    String apiKey = "1Z64TEQ1S6T1026T";
    String baseUrl = "https://www.alphavantage.co";

    public Object getTimeSeriesData(String symbol) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(baseUrl + "/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=" + apiKey, Object.class);
    }

    public List<SymbolSearchItemDTO> getTypeaheadSearch(String keywords) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<SymbolSearchWrapper> resp = restTemplate.getForEntity(baseUrl + "/query?function=SYMBOL_SEARCH&keywords=" + keywords + "&apikey=" + apiKey, SymbolSearchWrapper.class);
        List<SymbolSearchItem> items = Objects.requireNonNull(resp.getBody()).getBestMatches();
        return items.stream().map(SymbolSearchItemDTO::new).collect(Collectors.toList());
    }

    public Object getCompanyOverview(String symbol) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(baseUrl + "/query?function=OVERVIEW&symbol=" + symbol + "&apikey=" + apiKey, Object.class);
    }

    public GlobalQuoteDTO getGlobalQuote(String symbol) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<GlobalQuoteWrapper> resp = restTemplate.getForEntity(baseUrl + "/query?function=GLOBAL_QUOTE&symbol=" + symbol + "&apikey=" + apiKey, GlobalQuoteWrapper.class);
        GlobalQuote quote = Objects.requireNonNull(resp.getBody()).getGlobalQuote();
        return new GlobalQuoteDTO(quote);
    }

}
