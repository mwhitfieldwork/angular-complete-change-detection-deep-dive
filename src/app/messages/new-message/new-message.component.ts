import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  //If onPush were elected here, because of te keystoke update
  // of the ngModel, the  change detection would bubble up all the way to the app compoennt
  //so, the entire app would be evaluation every keystroke
  //the onyl way to improve this is to avoid putting change detection in the area where the event occurs
  //but maybe in the area where the event should be avoided
})
export class NewMessageComponent {
  private messagesService = inject(MessagesService);
  enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.messagesService.addMessage(this.enteredText());
    this.enteredText.set('');
  }
}
