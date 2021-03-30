import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstName:string;
  lastName:string;
  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  saveMessage() {
    alert("First name: " + this.firstName + 
    " Last name: " + this.lastName + 
    " Message: " + this.message)
  }
}
