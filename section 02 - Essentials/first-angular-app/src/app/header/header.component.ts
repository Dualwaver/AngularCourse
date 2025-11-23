import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  //Note: In Angular there is two types of components:
  // * Module base components (standalone: false)
  // * Standalone components (standalone: true)
  //standalone: true // In angular >= 19 versions -> This is true by default
  //template: '<h1>Easy Task</h1>' //Inline template
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
