import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import { INewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
  standalone: false,
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  // # It's possible to work with signal in two way binding
  // enteredTitle = signal('');
  enteredSummary = '';
  enteredDate = '';
  // #Note: This is an alternative to implement dependency injection
  private tasksService = inject(TasksService);

  OnClose() {
    this.close.emit();
  }

  OnSubmit() {
    let task: INewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };

    this.tasksService.addTasks({
      id: new Date().getTime().toString(),
      userId: this.userId,
      ...task,
    });

    this.close.emit();
  }
}
