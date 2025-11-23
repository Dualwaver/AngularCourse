import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ITask } from './task/task.model';
import { INewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  //Same as above but simplified
  // @Input() name?: string;
  isAddingTask = false;

  // #Note: Create a single instance (not shared with other components, instantiates multiple instances)
  //private taskService = new TasksService();
  // #Note: instead we can use dependency injection (only one instead of TaskService is instantiated)
  constructor(private taskService: TasksService) {}
  // Other way to inject a class (without constructor)
  // private taskService = inject(TasksService)

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  OnCloseAddTask() {
    this.isAddingTask = false;
  }

  OnStartAddTask() {
    this.isAddingTask = true;
  }
}
