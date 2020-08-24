import { Message } from './../models/message';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allMessage: Message[] = [];

  constructor() { }

    public saveMessage(message) {
      this.allMessage.push(message);
  }

  public getAllMessages() {
    return this.allMessage;
  }
}
