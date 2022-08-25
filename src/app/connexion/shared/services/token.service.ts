import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Storage } from '@capacitor/storage';

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

  async getToken() {
    const { value } = await Storage.get({ key: TOKEN });
    return value
  }

  async clearToken(){
    await Storage.clear()
  }

}
