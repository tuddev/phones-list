import { makeAutoObservable } from 'mobx';
import { Contact, ContactModel, contactsService } from '../services';

class ContactsStore {
  constructor() {
    makeAutoObservable(this);
  }

  contacts: Array<ContactModel> = [];

  async init() {
    try {
      const contacts = await contactsService.get();
      this.contacts = contacts.data;
    } catch {
      this.contacts = [];
    }
  }

  async delete(id: string) {
    await contactsService.delete(id);
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }

  async edit(newContact: ContactModel) {
    await contactsService.update(newContact);
    this.contacts = this.contacts.map((contact_1) => {
      if (contact_1.id === newContact.id) {
        return {
          ...contact_1,
          ...newContact,
        };
      }
      return contact_1;
    });
  }
  
  async add(contact: Contact) {
    const newContact = await contactsService.add(contact);
    this.contacts.push(newContact.data);
  }

}

export const contactsStore = new ContactsStore();