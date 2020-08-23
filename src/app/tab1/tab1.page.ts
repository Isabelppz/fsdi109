import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private data: DataService) {}

  getMessages() {
    console.log(this.data.getAllMessages());
    return this.data.getAllMessages();

  }
  
}
