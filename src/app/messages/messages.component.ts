import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
  //with this, you can avoid change detection on a component level (and it's children)
  //Specifically it tells angular that the change detection for this comoponent will only
  // ever  run when something inside of this component changes, not when something 
  //anywhere else in the application changes

  //Also could be triggered if there were updates to any @Inputs,
  // then the messages component would be re-evaluated and it children

  //OnPush limits the amount of change detection
})
export class MessagesComponent {
  //messages = signal<string[]>([]);

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }


}
