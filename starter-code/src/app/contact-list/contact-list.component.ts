import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  // addContact(name, email, phone, image){
  //   console.log("Add contact has been called");
  //   this.contacts.unshift({name: name.value, email: email.value, phoneNumber: phone.value, image: image.value});
  //   // console.log(email.value)
  //   // this.contacts.unshift(name.value, email.value, phone.value, image.value)
  //
  //   }
    addContact(){
      this.contacts.unshift(this.newContact);
    }

}
