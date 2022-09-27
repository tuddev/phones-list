import { makeAutoObservable } from 'mobx';

class LoginFormStore {
  formStepNumber = 0;

  constructor() {
    makeAutoObservable(this);
  }

  private setFormStep(step: number): void {
    if (step < 0) this.formStepNumber = 0;

    this.formStepNumber = step;
  }

  prevStep(): void {
    this.setFormStep(this.formStepNumber - 1);
  }

  nextStep(): void {
    this.setFormStep(this.formStepNumber + 1);
  }

  resetSteps(): void {
    this.setFormStep(0);
  }

  submitForm(values: Record<string, string>) {
    console.log(values, 'sadsds');
  }
}

export const loginFormStore = new LoginFormStore();
