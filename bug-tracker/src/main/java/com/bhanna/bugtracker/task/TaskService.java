package com.bhanna.bugtracker.task;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> fetchAllTasks() {
        return taskRepository.findAll();
    }

    public Task addTask(Task task) {
        return taskRepository.save(task);
    }

    public Optional<Task> editTask(Task newTask, Long id) {
        Optional<Task> updatedTask = taskRepository.findById(id);
        updatedTask.map(task -> {
            task.setCompleted(newTask.getCompleted());
            task.setTitle(newTask.getTitle());
            task.setNotes(newTask.getNotes());
            task.setOrderNo(newTask.getOrderNo());
            return taskRepository.save(task);
        })
                .orElseGet(() -> {
                    newTask.setId(id);
                    return taskRepository.save(newTask);
                });

        return updatedTask;
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public void markTaskAsCompleted(Long id) {
        Optional<Task> task = taskRepository.findById(id);
        task.map(task1 -> {
            task1.setCompleted(!task1.getCompleted());
            return taskRepository.save(task1);
        });
    }
}
