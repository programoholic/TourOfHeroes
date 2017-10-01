import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
selector: 'app-root',
templateUrl: './heroes.component.html',
styleUrls: ['./heroes.component.css'],
providers: [HeroService]
})
export class HeroesComponent implements OnInit{

title ='Tour of Heroes';
//heroes= HEROES; 
heroes: Hero[];
selectedHero: Hero;

ngOnInit(): void {
  this.getHeroes();
}

constructor(
private heroService: HeroService, 
private router: Router, 
private heroDialog: MdDialog) { }


onSelect(hero){

this.selectedHero=hero;
console.log('********selected hero is *****',this.selectedHero);

this.heroDialog.open(HeroDetailComponent,{
     width: '450px',
	data:this.selectedHero
});
} 

getHeroes(){   
this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}

gotoDetail() {
	
	this.router.navigate(['/detail',this.selectedHero.id]);
}

}
