package com.bhanna.bugtracker;

import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

public class User {
    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}
