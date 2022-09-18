import { makeAutoObservable } from "mobx";

export class ContactsPageStore {
  constructor() {
    makeAutoObservable(this)
  }
}