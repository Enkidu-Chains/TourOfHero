import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];

  public selectedHero?: Hero;

  constructor(private _heroService: HeroService,
              private _messageService: MessageService) {
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`${HeroesComponent.name}: selected hero id=${hero.id}`);
  }

  public ngOnInit(): void {
    this.InitHeroes();
  }

  private InitHeroes(): void {
    this._heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
