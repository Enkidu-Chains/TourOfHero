import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  public heroes$!: Observable<Hero[]>;

  private _searchTerms = new Subject<string>();

  constructor(private _heroService: HeroService) {
  }

  public search(term: string): void {
    this._searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this._searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this._heroService.searchHeroes(term)),
    );
  }
}
