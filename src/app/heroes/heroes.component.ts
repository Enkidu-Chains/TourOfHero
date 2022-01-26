import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  private _heroes?: Hero[];

  private _selectedHero?: Hero;

  constructor(private heroService: HeroService) {
  }

  public get Heroes(): Hero[] {
    return [...this._heroes ?? []];
  }

  private set Heroes(heroes: Hero[]) {
    this._heroes = heroes;
  }

  public get SelectedHero(): Hero | undefined {
    return this._selectedHero;
  }

  private set SelectedHero(hero: Hero | undefined) {
    this._selectedHero = hero;
  }

  public OnSelect(hero: Hero): void {
    this.SelectedHero = hero;
  }

  public ngOnInit(): void {
    this.InitHeroes();
  }

  private InitHeroes(): void {
    this.heroService.GetHeroes()
        .subscribe(heroes => this.Heroes = heroes);
  }
}
