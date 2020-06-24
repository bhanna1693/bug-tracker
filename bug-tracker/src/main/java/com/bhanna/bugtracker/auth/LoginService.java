package com.bhanna.bugtracker.auth;

import org.springframework.stereotype.Service;

@Service
public class LoginService {

    public Boolean authenticate(String username, String password) {
        if (username.isBlank() || password.isBlank()) {
            return false;
        }

        return username.equals("Brian") && password.equals("Password");
    }
}
