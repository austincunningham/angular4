import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// needed for ngModel

import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent }from './dashboard.component';

import { HeroService } from './hero.service';
import { AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   // import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
