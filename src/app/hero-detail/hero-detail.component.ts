import { Component, OnInit , Input, Inject} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {

  //@Input() hero: Hero;
  hero:any;
  constructor(
  private heroService: HeroService,
  private route:ActivatedRoute ,
  private location: Location,
  @Inject(MD_DIALOG_DATA) public data: any,
  public dialogref: MdDialogRef< HeroDetailComponent> 
  ) {
         this.hero=data;

         console.log('*****in dilog,',this.hero);
   }

  ngOnInit() {
    
  }

  onNoClick(){

      this.dialogref.close();
   } 
}
