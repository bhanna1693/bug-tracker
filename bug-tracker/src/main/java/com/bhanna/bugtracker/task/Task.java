package com.bhanna.bugtracker.task;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private Boolean completed;
    private String notes;
    private Integer orderNo;

    public Task() {
    }

    public Task(String title, Boolean completed, String notes, Integer orderNo) {
        this.title = title;
        this.completed = completed;
        this.notes = notes;
        this.orderNo = orderNo;
    }

    @Override
    public String toString() {
        return "Task{" +
                "Id=" + id +
                ", title='" + title + '\'' +
                ", completed=" + completed +
                ", notes='" + notes + '\'' +
                ", orderNo=" + orderNo +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return Objects.equals(id, task.id) &&
                Objects.equals(title, task.title) &&
                Objects.equals(completed, task.completed) &&
                Objects.equals(notes, task.notes) &&
                Objects.equals(orderNo, task.orderNo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, completed, notes, orderNo);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Integer getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(Integer orderNo) {
        this.orderNo = orderNo;
    }
}
