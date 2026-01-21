import { Component, Input } from '@angular/core';

@Component({
  //#Angular as different kinds of selectors
  //selector works like a css selector
  //element selector
  //selector: 'app-button',
  //Attribute selector
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {}
