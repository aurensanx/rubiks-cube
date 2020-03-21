import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor() { }

  getRandomMove = () => Math.floor(Math.random() * 10) + 1;

}
