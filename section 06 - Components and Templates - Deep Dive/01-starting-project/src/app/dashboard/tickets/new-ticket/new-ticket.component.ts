import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // @ViewChildren(ButtonComponent) buttons; -> finds multiple instances of desired children

  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    //Here it is granted that the template has been initialized and
    // in theory Angular is able to select elements in the view
    // found with @ViewChild/@ViewChildren
    // if using signals viewChild/viewChildren it is possible that the element can be used there
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title, text: ticketText });

    //this.form?.nativeElement.reset(); // Decorator version
    //this.form()?.nativeElement.reset(); // Signal version without required property
    this.form().nativeElement.reset(); // Signal version
  }
}
