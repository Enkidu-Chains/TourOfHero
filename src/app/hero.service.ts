import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Hero } from "./hero";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _heroesUrl: string = "api/heroes";

  private _httpOption = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private _messageService: MessageService,
              private _http: HttpClient) {
  }

  public getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this._heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  public getHero(id: number): Observable<Hero> {
    const url: string = `${this._heroesUrl}/${id}`;
    return this._http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  public updateHero(hero: Hero): Observable<any> {
    return this._http.put(this._heroesUrl, hero, this._httpOption).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>("updateHero"))
    );
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this._http.post<Hero>(this._heroesUrl, hero, this._httpOption).pipe(
      tap((newHero: Hero) => this.log(`added hero \w id=${newHero.id}`)),
      catchError(this.handleError<Hero>("addHero"))
    );
  }

  public deleteHero(id: number): Observable<Hero> {
    const url: string = `${this._heroesUrl}/${id}`;

    return this._http.delete<Hero>(url, this._httpOption).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>("deletedHero"))
    );
  }

  public searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim())
      return of([]);

    return this._http.get<Hero[]>(`${this._heroesUrl}/?name=${term}`).pipe(
      tap(x => {
        if (x.length)
          this.log(`found heroes matching "${term}"`);
        else
          this.log(`no heroes matching "${term}"`);
      }),
      catchError(this.handleError<Hero[]>("searchHeroes", []))
    );
  }

  private log(message: string): void {
    let log: string = `${HeroService.name}: ${message}`;

    console.log(log);

    this._messageService.add(log);
  }

  private handleError<T>(operation: string = "operation", result?: T) {
    return (error: Error): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
