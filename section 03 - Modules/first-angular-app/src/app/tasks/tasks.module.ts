import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; //Brings the DatePipe

import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  //#Note:
  // *FormsModule - Shows the module advantage, allows module/components to only be declared once (here!)
  imports: [SharedModule, CommonModule, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
