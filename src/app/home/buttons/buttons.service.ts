import { Injectable } from '@angular/core';
import {MOVES} from '../../three-components/models/moves';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor() { }

  getRandomMove = () => MOVES[Math.floor(Math.random() * MOVES.length)].value;

}
