import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: [HeroService]
})


export class HeroesComponent implements OnInit{

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private  router: Router
  ) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

