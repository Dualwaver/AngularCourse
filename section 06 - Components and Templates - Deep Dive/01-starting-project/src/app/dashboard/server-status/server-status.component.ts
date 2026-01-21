import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
})
//The implementation of the OnInit interface is ot mandatory to be allowed to use the ngOnInit method
// however it helps to debug if there is a type in method definition, Angular team recommends the
// implementation of this kind of interfaces
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  //Todo: Understand Angular Life Cycle
  ngOnInit() {
    setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 2000);
  }
}
