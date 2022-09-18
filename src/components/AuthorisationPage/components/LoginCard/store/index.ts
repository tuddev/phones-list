import { makeAutoObservable } from "mobx";
import { LoginFormStore } from "../components/LoginForm/store";

export class LoginCardStore {
  loginFormStore = new LoginFormStore;

  constructor(){
    makeAutoObservable(this)
  }
}
