import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactList = signal<Contact[]>([
    { id: 1, fName: 'John', lName: 'Adams', phoneNumber: '701-000-1000', email: 'john@abc.com' },
    { id: 2, fName: 'Mary', lName: 'Jane', phoneNumber: '701-000-1000', email: 'mary@abc.com' },
  ]);

  contacts = this.contactList.asReadonly();

  addContact(contact: Contact) {
    this.contactList.update(contacts => [...contacts, contact]);
  }

  deleteContact(id: number) {
    this.contactList.update(contacts => contacts.filter(c => c.id !== id));
  }

  editContact(updated: Contact) {
    this.contactList.update(contacts =>
      contacts.map(c => (c.id === updated.id ? updated : c))
    );
  }

  getContactById(id: number): Contact | undefined {
    return this.contactList().find(c => c.id === id);
  }
}