import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit
{
  private _hero: Hero = {
    Id: 1,
    Name: "Egor Kreed"
  };

  constructor()
  {
  }

  public get Hero(): Hero
  {
    return this._hero;
  }

  ngOnInit(): void
  {
  }
}
