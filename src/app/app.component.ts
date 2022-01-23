import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  private _title: string = 'TourOfHeroes';

  public get Title(): string
  {
    return this._title;
  }
}
