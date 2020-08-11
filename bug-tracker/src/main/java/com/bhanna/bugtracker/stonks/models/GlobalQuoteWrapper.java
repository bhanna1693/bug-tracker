package com.bhanna.bugtracker.stonks.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GlobalQuoteWrapper {
    @JsonProperty("Global Quote")
    private GlobalQuote globalQuote;

    public GlobalQuote getGlobalQuote() {
        return globalQuote;
    }
}
