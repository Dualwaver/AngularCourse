import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  //Two way component binding using input and output signals
  // size = input.required<{ width: string; height: string }>();
  // sizeChange = output<{ width: string; height: string }>();

  //Two way component binding using model signal
  size = model.required<{ width: string; height: string }>();

  onReset() {
    //Using output signal
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100',
    // });

    //Using model signal
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
