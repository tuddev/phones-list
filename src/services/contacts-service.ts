import { httpClient } from '../utils';
import { v4 as uuid } from 'uuid';
import { loginStore } from './login-store';

export type ContactModel = {
  id: string;
  name?: string;
  tel?: string;
  email?: string;
};

export type Contact = Omit<ContactModel, 'id'>;

const CONTACTS_ENDPOINT = '/contacts';

class ContactsService {
  userId: string | undefined;

  init(userId: string) {
    this.userId = userId;
  }

  async get() {
    try {
      // Так как json-server-auth не умеет отдавать ресурсы только создателя,
      // то запрашиваю их с фильтром по userId
      return await httpClient.get(`${CONTACTS_ENDPOINT}/?userId=${loginStore.getUser()?.id}`);
    } catch {
      throw new Error('Не удалось получить контакты');
    }
  }

  async add(contact: Contact) {
    try {
      return await httpClient.post(CONTACTS_ENDPOINT, {
        ...contact, 
        id: uuid(),
        userId: this.userId,
      });
    } catch {
      throw new Error('Не удалось добавить контакт');
    }
  }

  async delete(id: string) {
    try {
      return await httpClient.delete(`${CONTACTS_ENDPOINT}/${id}`, {
        userId: this.userId,
      });
    } catch {
      throw new Error('Не удалось добавить контакт');
    }
  }

  async update(contact: ContactModel) {
    try {
      return await httpClient.put(`${CONTACTS_ENDPOINT}/${contact.id}`, {
        ...contact,
        userId: this.userId,
      });
    } catch {
      throw new Error('Не удалось добавить контакт');
    }
  }
}

export const contactsService = new ContactsService();