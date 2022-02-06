import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private _heroService: HeroService) {
  }

  public add(name: string): void {
    name = name.trim();

    if (!name)
      return;

    this._heroService.addHero({ name } as Hero)
        .subscribe(hero => this.heroes.push(hero));
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this._heroService.deleteHero(hero.id).subscribe();
  }

  public ngOnInit(): void {
    this.initHeroes();
  }

  private initHeroes(): void {
    this._heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
