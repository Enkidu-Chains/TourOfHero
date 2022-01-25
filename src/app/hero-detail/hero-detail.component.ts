import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit
{
  private _hero?: Hero;

  constructor()
  {
  }

  public get Hero(): Hero | undefined
  {
    return this._hero;
  }

  @Input()
  public set Hero(hero: Hero | undefined)
  {
    this._hero = hero;
  }

  ngOnInit(): void {
  }

}
