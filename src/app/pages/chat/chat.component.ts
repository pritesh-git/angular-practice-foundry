import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'you' | 'assistant';
  time: string;
}

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  draft = '';
  messages: ChatMessage[] = [];
  private nextId = 1;
  readonly prompts = [
    'Give me a simple plan for a focused afternoon.',
    'Explain responsive design in plain language.',
    'Suggest three ideas for a weekend pasta dinner.',
  ];

  send(text = this.draft): void {
    const cleaned = text.trim();
    if (!cleaned) return;
    this.messages = [...this.messages, this.makeMessage(cleaned, 'you')];
    this.draft = '';
    window.setTimeout(() => {
      this.messages = [...this.messages, this.makeMessage(this.replyFor(cleaned), 'assistant')];
    }, 500);
  }

  onEnter(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (!keyboardEvent.shiftKey) {
      keyboardEvent.preventDefault();
      this.send();
    }
  }

  private makeMessage(text: string, sender: ChatMessage['sender']): ChatMessage {
    return { id: this.nextId++, text, sender, time: new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(new Date()) };
  }

  private replyFor(prompt: string): string {
    const subject = prompt.replace(/[.!?]$/, '');
    return `A useful place to start with "${subject}" is to keep the next step small and specific. Pick one outcome, write down what success looks like, and adjust from there. What part would you like to explore first?`;
  }
}