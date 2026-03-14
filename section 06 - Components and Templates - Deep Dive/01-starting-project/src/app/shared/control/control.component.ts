import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  contentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  //Can always be used, to add attributes to the host element, its independent of the encapsulation attribute,
  // it can always be used
  host: {
    class: 'control',
    '(click)': 'onClick()', //allows to bind a method to an event
    // (The Angular team recommends this approach instead off @HostListener decorator)
  },
  encapsulation: ViewEncapsulation.None,
  //Note:
  // ViewEncapsulation.Emulated -> Angular emulates the shadow DOM hiding the css to only be accessed by the
  //  component element only (does not include ng-content);
  // ViewEncapsulation.None -> Disables the shadow DOM feature the component styles will be applied globally,
  //  disabling the :host css feature
})
export class ControlComponent implements AfterContentInit {
  label = input.required<string>();

  private elem = inject(ElementRef); //This will lets us have access to the host element of the component

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input',
    );

  // Get Multiple child controls
  // private controls = contentChildren<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
  //   'input',
  // );

  constructor() {
    afterRender(() => console.log('afterRender'));

    afterNextRender(() => console.log('afterNextRender'));
  }

  //Serves the same purpose as the host property in the component decorator @Component
  //Using this feature is discouraged (it exists for backwards compatibility), its preferred to use host property
  @HostBinding('class') className = 'control';

  //allows to bind a method to an event we want to listen in the host using a decorator
  // @HostListener('click') onClick() {
  //   console.log('click');
  // }

  ngAfterContentInit(): void {
    console.log(this.control().nativeElement);
  }

  onClick() {
    console.log('click');
    console.log(this.elem);
    console.log(this.control());
  }
}
