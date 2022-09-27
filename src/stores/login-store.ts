import { makeAutoObservable } from 'mobx';
import { httpClient } from '../utils';
import { v4 as uuid } from 'uuid';

class LoginStore {
  constructor() {
    makeAutoObservable(this);
  }

  private setUserDataToStorage(user: Record<string, string> | null, accessToken: string) {
    localStorage.setItem('token-contact', accessToken);
    localStorage.setItem('user-contact', JSON.stringify(user));
  }

  private setTokenToHeader = (accessToken: string) => {
    httpClient.updateCommonHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
  };

  private setUserData(user: Record<string, string>, accessToken: string)  {
    this.setUserDataToStorage(user, accessToken);
    this.setTokenToHeader(accessToken);
  }

  checkUserIsLogged() {
    const token = localStorage.getItem('token-contact');
    this.setTokenToHeader(token);
    
    const user = localStorage.getItem('user-contact');

    if (!!token && !!user) return true;
    return false;
  }

  async login(email: string, password: string) {
    try {
      const response = await httpClient.post('/login', {
        email,
        password,
      });

      this.setUserData(response.data.user, response.data.accessToken);
    } catch {
      throw new Error('Не получилось авторизоваться');
    }
    
  }

  async signup(name: string, email: string, password: string) {
    try {
      const response = await httpClient.post('/signup', {
        id: uuid(),
        name,
        email,
        password,
      });

      this.setUserData(response.data.user, response.data.accessToken);
    } catch (error) {
      throw new Error('Ошибка при регистрации' + error);
    }
  }
  
  logout(): void {
    this.setUserDataToStorage(null, '');
    this.setTokenToHeader('');
  }
}

export const loginStore = new LoginStore();
