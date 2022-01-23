import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit
{
  private readonly _heroes: Hero[];

  private _selectedHero?: Hero;

  constructor()
  {
    this._heroes = HEROES;
  }

  public get Heroes(): Hero[]
  {
    return [...this._heroes];
  }

  public get SelectedHero(): Hero | undefined
  {
    return this._selectedHero;
  }

  private set SelectedHero(hero: Hero | undefined)
  {
    this._selectedHero = hero;
  }

  public OnSelect(hero: Hero): void
  {
    this.SelectedHero = hero;
  }

  public ngOnInit(): void
  {
  }
}
