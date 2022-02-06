import { Location } from "@angular/common";
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  public hero?: Hero;

  constructor(private _route: ActivatedRoute,
              private _location: Location,
              private _heroService: HeroService
  ) {
  }

  public goBack(): void {
    this._location.back();
  }

  public save(): void {
    if (!this.hero)
      return;

    this._heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
  }


  public ngOnInit(): void {
    this.initHero();
  }

  private initHero(): void {
    const id = Number(this._route.snapshot.paramMap.get("id"));

    this._heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
}
