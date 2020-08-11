package com.bhanna.bugtracker.stonks.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SymbolSearchItemDTO {
    private String symbol;
    private String name;
    private String type;
    private String region;
    private String marketOpen;
    private String marketClose;
    private String timezone;
    private String currency;
    private String matchScore;

    public SymbolSearchItemDTO(SymbolSearchItem symbolSearchItem) {
        this.symbol = symbolSearchItem.getSymbol();
        this.name = symbolSearchItem.getName();
        this.type = symbolSearchItem.getType();
        this.region = symbolSearchItem.getRegion();
        this.marketOpen = symbolSearchItem.getMarketOpen();
        this.marketClose = symbolSearchItem.getMarketClose();
        this.timezone = symbolSearchItem.getTimezone();
        this.currency = symbolSearchItem.getCurrency();
        this.matchScore = symbolSearchItem.getMatchScore();
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getMarketOpen() {
        return marketOpen;
    }

    public void setMarketOpen(String marketOpen) {
        this.marketOpen = marketOpen;
    }

    public String getMarketClose() {
        return marketClose;
    }

    public void setMarketClose(String marketClose) {
        this.marketClose = marketClose;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getMatchScore() {
        return matchScore;
    }

    public void setMatchScore(String matchScore) {
        this.matchScore = matchScore;
    }
}
