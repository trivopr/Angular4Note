import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  @ViewChild('username') username: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log('USERNAME:', this.username);
  }


  sendContact(val) {
    console.log('VAL:', val);
  }
}
