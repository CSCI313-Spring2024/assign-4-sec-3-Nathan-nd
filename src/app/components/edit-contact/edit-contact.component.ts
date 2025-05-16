import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
})
export class EditContactComponent implements OnInit {
  contact!: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const existingContact = this.contactService.getContactById(id);

    if (existingContact) {
      // Make a copy to avoid two-way binding directly to service data
      this.contact = { ...existingContact };
    } else {
      this.router.navigate(['/contacts']);
    }
  }

  saveContact() {
    this.contactService.editContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}