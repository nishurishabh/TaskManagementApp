import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTask} from "../task/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userID!: string
  @Output() close = new EventEmitter<void>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''
  private taskService = inject(TasksService)

  onCancel() {
    this.close.emit()
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userID)
    this.close.emit()
  }
}
