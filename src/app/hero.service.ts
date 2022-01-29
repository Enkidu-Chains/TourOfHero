import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { MessageService } from "./message.service";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public getHeroes(): Observable<Hero[]> {
    const heroes: Observable<Hero[]> = of(HEROES);

    this._messageService.add(`${HeroService.name}: fetched Heroes`);

    return heroes;
  }

  constructor(private _messageService: MessageService) {
  }
}
