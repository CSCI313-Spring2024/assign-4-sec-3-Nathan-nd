import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
})
export class AddContactComponent {
  fName = '';
  lName = '';
  phoneNumber = '';
  email = '';

  constructor(private contactService: ContactService, private router: Router) {}

  addContact() {
    this.contactService.addContact({
      id: Date.now(),
      fName: this.fName,
      lName: this.lName,
      phoneNumber: this.phoneNumber,
      email: this.email,
    });
    this.router.navigate(['/contacts']);
  }
}