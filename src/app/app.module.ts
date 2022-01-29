import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from './messege/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatIconModule,
		FormsModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
