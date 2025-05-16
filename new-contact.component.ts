import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.service';

@Component({
  standalone: true,
  selector: 'app-new-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {

  fName="";
  lName="";
  phoneNumber="";
  email="";

  constructor(
    private contactsService: ContactService,
    private router: Router,
  ){}

  onSubmit(){
    this.contactsService.addContact({
      fName: this.fName;
      lName: this.lName,
      phoneNumber: this.phoneNumber,
      email: this.email,
    }).subscribe(() => this.router.navigate(['home']))
  }

  onCancel(){
    this.router.navigate(['home'])
  }
}
