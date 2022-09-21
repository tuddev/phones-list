import { makeAutoObservable } from 'mobx';
import { httpClient } from '../utils';
import { v4 as uuid } from 'uuid';

class LoginStore {
  constructor() {
    makeAutoObservable(this);
  }
  
  async auth(email: string, password: string) {
    const response = await httpClient.post('/login', {
      email,
      password,
    });
  }

  async signup(name: string, email: string, password: string) {
    try {
      const response = await httpClient.post('/signup', {
        id: uuid(),
        name,
        email,
        password,
      });

      
      this.setTokenToHeader(response.data.accessToken);
      localStorage.setItem('token-ts', response.data.accessToken);

    } catch (error) {
      throw new Error('Ошибка при регистрации' + error);
    }
    
  }

  private setTokenToHeader = (token: string) => {
    httpClient.updateCommonHeaders({
      Authorization: `Bearer ${token}`,
    });
  };
}

export const loginStore = new LoginStore();