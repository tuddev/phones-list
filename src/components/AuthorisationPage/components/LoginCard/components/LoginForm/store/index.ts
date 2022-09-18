import { makeAutoObservable } from "mobx";

export class LoginFormStore {
  requiredName: boolean;

  constructor() {
    makeAutoObservable(this)
  }
}

