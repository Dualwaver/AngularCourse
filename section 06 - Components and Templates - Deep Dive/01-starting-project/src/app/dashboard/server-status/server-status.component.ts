import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
})
//The implementation of the OnInit interface is ot mandatory to be allowed to use the ngOnInit method
// however it helps to debug if there is a type in method definition, Angular team recommends the
// implementation of this kind of interfaces
export class ServerStatusComponent implements OnInit, AfterViewInit {
  //, OnDestroy {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  //Type Returned by setInterval Method
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef); // Alternative to ngOnDestroy

  constructor() {
    //Allows to run code when signal values change
    effect(() => console.log(this.currentStatus()));
  }

  //Todo: Understand Angular Life Cycle
  ngOnInit() {
    console.log('ON INIT');
    // this.interval = setInterval(() => {
    const interval = setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 2000);

    //We can create the many onDestroy listeners that we want
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy(): void {
  //   // Destroying the timeout is important to prevent memory leak
  //   clearTimeout(this.interval);
  // }
}
