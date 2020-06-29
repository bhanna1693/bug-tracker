//package com.bhanna.bugtracker.auth;
//
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//public class MyUserDetailsService implements UserDetailsService {
//
//    PasswordEncoder encoder = new BCryptPasswordEncoder();
//
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserDetails user = User.builder().username("myUserName")
//                .password(encoder.encode("myPassword"))
//                .authorities("ROOT").build();
//
//        if (user.getUsername().equals(username)) {
//            return user;
//        }
//
//        throw new UsernameNotFoundException("user not found!");
//    }
//}
