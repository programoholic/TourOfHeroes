import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import {
MdAutocompleteModule,
MdButtonModule,
MdButtonToggleModule,
MdCardModule,
MdCheckboxModule,
MdChipsModule,
MdDatepickerModule,
MdDialogModule,
MdExpansionModule,
MdGridListModule,
MdIconModule,
MdInputModule,
MdListModule,
MdMenuModule,
MdNativeDateModule,
MdPaginatorModule,
MdProgressBarModule,
MdProgressSpinnerModule,
MdRadioModule,
MdRippleModule,
MdSelectModule,
MdSidenavModule,
MdSliderModule,
MdSlideToggleModule,
MdSnackBarModule,
MdSortModule,
MdTableModule,
MdTabsModule,
MdToolbarModule,
MdTooltipModule,
MdStepperModule,
} from '@angular/material';


import 'hammerjs';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './core/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
declarations: [
AppComponent,
HeroDetailComponent,
DashboardComponent,
HeroesComponent
],
imports: [
BrowserModule,
BrowserAnimationsModule,
FormsModule,
AppRoutingModule,
MdAutocompleteModule,
MdButtonModule,
MdButtonToggleModule,
MdCardModule,
MdCheckboxModule,
MdChipsModule,
MdStepperModule,
MdDatepickerModule,
MdDialogModule,
MdExpansionModule,
MdGridListModule,
MdIconModule,
MdInputModule,
MdListModule,
MdMenuModule,
MdNativeDateModule,
MdPaginatorModule,
MdProgressBarModule,
MdProgressSpinnerModule,
MdRadioModule,
MdRippleModule,
MdSelectModule,
MdSidenavModule,
MdSliderModule,
MdSlideToggleModule,
MdSnackBarModule,
MdSortModule,
MdTableModule,
MdTabsModule,
MdToolbarModule,
MdTooltipModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
