import { httpClient } from '../utils';
import { v4 as uuid } from 'uuid';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

class LoginStore {
  token: string | null = null;
  
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
    this.token = accessToken;
    this.setUserDataToStorage(user, accessToken);
    this.setTokenToHeader(accessToken);
  }

  private getUserDataFromStorage() {
    return {
      user: JSON.parse(localStorage.getItem('user-contact')),
      token: localStorage.getItem('token-contact'),
    };
  }

  init() {
    const { token, user } = this.getUserDataFromStorage();
    this.setUserData(user, token);
  }

  getUser(): User | null | undefined {
    return JSON.parse(localStorage.getItem('user-contact'));
  }

  checkUserIsLogged() {
    const token = localStorage.getItem('token-contact');
    this.setTokenToHeader(token);
    
    const user = localStorage.getItem('user-contact');

    if (!!token && !!user && token !== 'null' && user !== 'null') return true;
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
