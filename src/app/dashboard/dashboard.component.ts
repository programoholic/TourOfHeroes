import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css'],
providers: [HeroService]
})

export class DashboardComponent implements OnInit {

heroes: Hero[] = [];

constructor(
private heroService: HeroService,
private router: Router,
private heroDialog: MdDialog) { }

ngOnInit() {
this.heroService.getHeroes().then(heroes => this.heroes =heroes.slice(1,5));
}

navigator(hero){

//this.router.navigate(['/detail/'+hero.id]);
this.heroDialog.open(HeroDetailComponent,{
     width: '450px',
	data:hero
});

}

}
