package com.bhanna.bugtracker.task;

import com.bhanna.bugtracker.employee.DataInitializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TaskDataInitializer {
    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    @Bean
    CommandLineRunner initTaskDatabase(TaskRepository repository) {

        return args -> {
            log.info("Preloading " + repository.save(new Task("Do the dishes", false, "don't forget to use soap!", 1)));
            log.info("Preloading " + repository.save(new Task("Work out", false, "Curls for the gurlzzz", 2)));
        };
    }
}
