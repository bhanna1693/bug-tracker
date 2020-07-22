package com.bhanna.bugtracker.task;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> fetchAllTasks() {
        return taskService.fetchAllTasks();
    }

    @PostMapping("/tasks")
    public Task addTask(@RequestBody Task task) {
        return taskService.addTask(task);
    }

    @PutMapping("/tasks/{id}")
    public Optional<Task> editTask(@RequestBody Task task, @PathVariable Long id) {
        return taskService.editTask(task, id);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    @PostMapping("/tasks/toggle-completed/{id}")
    public void markTaskAsCompleted(@PathVariable Long id) {
        taskService.markTaskAsCompleted(id);
    }

}
