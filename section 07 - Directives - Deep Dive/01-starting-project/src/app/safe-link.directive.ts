import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
//Note: This is a custom attribute directive - targets element by attributes
export class SafeLinkDirective {
  queryParam = input<string>('myapp', { alias: 'appSafeLink' });
  private hostElemRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (!wantsToLeave) {
      event.preventDefault();
      return;
    }

    //Sem element ref injection
    // const address = (event.target as HTMLAnchorElement).href;
    // (event.target as HTMLAnchorElement).href =
    //   address + '?from=' + this.queryParam();

    const address = this.hostElemRef.nativeElement.href;
    this.hostElemRef.nativeElement.href =
      address + '?from=' + this.queryParam();
  }
}
