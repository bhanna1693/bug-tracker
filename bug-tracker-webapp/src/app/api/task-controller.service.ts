import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TaskControllerService {

  constructor(private http: HttpClient) {
  }

  getListById(id: string) {
    return this.http.get<Task[]>(environment.API_BASE_URL + '/tasks');
  }

  markTaskAsCompleted(id: string) {
    return this.http.post(environment.API_BASE_URL + '/tasks/toggle-completed/' + id, null);
  }

  addTask(task: Task) {
    return this.http.post<Task>(environment.API_BASE_URL + '/tasks', task);
  }

  editTask(task: Task) {
    return this.http.put<Task>(environment.API_BASE_URL + '/tasks/' + task.id, task);
  }

  deleteTask(id: string) {
    return this.http.delete<void>(environment.API_BASE_URL + '/tasks/' + id);
  }
}
