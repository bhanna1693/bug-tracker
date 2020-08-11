package com.bhanna.bugtracker.stonks.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SymbolSearchItem {
    @JsonProperty("1. symbol")
    private String symbol;
    @JsonProperty("2. name")
    private String name;
    @JsonProperty("3. type")
    private String type;
    @JsonProperty("4. region")
    private String region;
    @JsonProperty("5. marketOpen")
    private String marketOpen;
    @JsonProperty("6. marketClose")
    private String marketClose;
    @JsonProperty("7. timezone")
    private String timezone;
    @JsonProperty("8. currency")
    private String currency;
    @JsonProperty("9. matchScore")
    private String matchScore;

    public String getSymbol() {
        return symbol;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getRegion() {
        return region;
    }

    public String getMarketOpen() {
        return marketOpen;
    }

    public String getMarketClose() {
        return marketClose;
    }

    public String getTimezone() {
        return timezone;
    }

    public String getCurrency() {
        return currency;
    }

    public String getMatchScore() {
        return matchScore;
    }
}
