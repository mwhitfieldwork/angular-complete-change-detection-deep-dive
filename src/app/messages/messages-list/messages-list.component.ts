import { Component, inject, input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
})
export class MessagesListComponent {
private messageService = inject(MessagesService)

messages = this.messageService.allMessages;
//this is just pointing to the empty collection


  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
