import { Component, inject, NgZone, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
})
export class CounterComponent implements OnInit{
  //Everytime a button is clicked, or if something changes in the ui
  //angular will run the change detection AND LOOK AT every part of the Zoned application
  
  private zone = inject(NgZone);
  count = signal(0);


  ngOnInit() {
    setInterval(() => {
      this.count.set(0);
    }, 4000);
    //run the angular change deection every 4 seconds

    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        console.log('runs chnage deection again');
      }, 5000);   
    });
    //this method tells angular zone detection to ignore this setTimeout to avoid having the detection
    //run more times than needed

  }

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
