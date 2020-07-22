package com.bhanna.bugtracker.task;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> fetchAllTasks(Long id) {
        return taskRepository.findAll();
    }
}
