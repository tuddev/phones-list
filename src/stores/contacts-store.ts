import { makeAutoObservable, runInAction } from 'mobx';
import { Contact, ContactModel, contactsService } from '../services';

class ContactsStore {
  constructor() {
    makeAutoObservable(this);
  }

  private contacts: Array<ContactModel> = [];

  searchQuery = '';
  
  async init() {
    try {
      const contacts = await contactsService.get();
      runInAction(() => {
        this.contacts = contacts.data;
      });
    } catch {
      runInAction(() => {
        this.contacts = [];
      });
    }
  }

  async delete(id: string) {
    await contactsService.delete(id);
    runInAction(() => {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    });
  }

  async edit(newContact: ContactModel) {
    await contactsService.update(newContact);
    runInAction(() => {
      this.contacts = this.contacts.map((contact_1) => {
        if (contact_1.id === newContact.id) {
          return {
            ...contact_1,
            ...newContact,
          };
        }
        return contact_1;
      });
    });
  }
  
  async add(contact: Contact) {
    const newContact = await contactsService.add(contact);
    runInAction(() => {
      this.contacts.push(newContact.data);
    });
  }

  get filteredContacts() {
    if (!this.searchQuery) return this.contacts;

    return this.contacts.filter((contact) => {
      if (contact.name.includes(this.searchQuery)) return true;
      if (contact.tel?.includes(this.searchQuery)) return true;
      if (contact.email?.includes(this.searchQuery)) return true;

      return false;
    }); 
  }
}

export const contactsStore = new ContactsStore();