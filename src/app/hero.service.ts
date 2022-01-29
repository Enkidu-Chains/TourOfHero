import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { MessageService } from "./message.service";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private _messageService: MessageService) {
  }

  public getHeroes(): Observable<Hero[]> {
    const heroes: Observable<Hero[]> = of(HEROES);

    this._messageService.add(`${HeroService.name}: fetched Heroes`);

    return heroes;
  }

  public getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;

    this._messageService.add(`${HeroService.name}: fetched Hero id=${id}`);

    return of(hero);
  }
}
