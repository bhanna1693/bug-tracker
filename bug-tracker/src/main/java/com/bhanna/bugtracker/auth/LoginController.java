package com.bhanna.bugtracker.auth;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/login")
    public Boolean handleLogin(@RequestParam String username, @RequestParam String password) {
        return loginService.authenticate(username, password);
    }
}
