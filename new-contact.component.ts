import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.service';

@Component({
  selector: 'app-new-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {

  name="";
  phoneNumber="";
  emailAddress="";

  constructor(
    private contactsService: ContactService,
    private router: Router,
  ){}

  onSubmit(){
    this.contactsService.addContact({
      name: this.name,
      phoneNumber: this.phoneNumber,
      emailAddress: this.emailAddress,
    }).subscribe(() => this.router.navigate(['home']))
  }

  onCancel(){
    this.router.navigate(['home'])
  }
}
