import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Storage } from '@capacitor/storage';
import { Livraison } from 'src/app/shared/models/livraison';

const TOKEN = "token"
const USER = "current-user"
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token : string
  constructor() { 
  }


  async setToken(token : string){    
    await Storage.set({ key: TOKEN, value: token })
  }

  async setUser(user : User){    
    await Storage.set({ key: USER, value: JSON.stringify(user) })
  }

  async getToken() {
    const { value } = await Storage.get({ key: TOKEN });
    return value
  }

  async getUser() {
    const { value } = await Storage.get({ key: USER });
    return JSON.parse(value) as User
  }

  async clearToken(){
    await Storage.clear()
  }

  async setLivraison(livraison : Livraison) {
    await Storage.set({ key: 'livraison', value: JSON.stringify(livraison) })
  }

  async getLivraison() {
    const { value } = await Storage.get({ key: 'livraison' });
    return JSON.parse(value) as Livraison
  }

}
