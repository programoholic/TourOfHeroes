import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers: []
})
export class AppComponent implements OnInit{


title ='Tour of Heroes';


ngOnInit(): void {
  
  
}

constructor(private router: Router, private route: ActivatedRoute) { }

/*
onSelect(hero){

this.selectedHero=hero;
console.log('********selected hero is *****',this.selectedHero);
} 
*/

/*getHeroes(){   
this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
*/
   navigator(uri){
        
       this.router.navigate([uri]);
   }

}
