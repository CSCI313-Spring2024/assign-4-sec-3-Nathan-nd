import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
})
export class ContactCardComponent {
  @Input() contact!: Contact;

  constructor(private contactService: ContactService, private router: Router) {}

  deleteContact() {
    this.contactService.deleteContact(this.contact.id);
  }

  editContact() {
    this.router.navigate(['/contacts/edit', this.contact.id]);
  }
}