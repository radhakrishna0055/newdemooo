import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from "@angular/forms";
import{Routes,RouterModule}from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UniversitiesComponent } from './universities/universities.component';
import { CoursesComponent } from './courses/courses.component';
import { ServicesComponent } from './services/services.component';
import { ArticlesComponent } from './articles/articles.component';
import { EuropeanCompaniesComponent } from './european-companies/european-companies.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import {EuropeanEducationComponent} from './european-education/european-education.component';
import { MasterprogramsComponent } from './masterprograms/masterprograms.component';
import { BachelorprogramComponent } from './bachelorprogram/bachelorprogram.component';
import { SwedenComponent } from './sweden/sweden.component';
import { GermanyComponent } from './germany/germany.component';
import { FranceComponent } from './france/france.component';
import { ItalyComponent } from './italy/italy.component';
import { LatviaComponent } from './latvia/latvia.component';
import { IrelandComponent } from './ireland/ireland.component';
import { NetherlandsComponent } from './netherlands/netherlands.component';
import { FinlandComponent } from './finland/finland.component';
import { BelgiumComponent } from './belgium/belgium.component';
import { NorwayComponent } from './norway/norway.component';
import { DenmarkComponent } from './denmark/denmark.component';
import { OthercountriesComponent } from './othercountries/othercountries.component';
import { RegistrationComponent } from './registration/registration.component';

var myroutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"europeaneducation",component:EuropeanEducationComponent},
  {path:"countries",component:CountriesComponent,children:[
{path:"sweden",component:SwedenComponent},
{path:"germany",component:GermanyComponent},
{path:"france",component:FranceComponent},
{path:"italy",component:ItalyComponent},
{path:"latvia",component:LatviaComponent},
{path:"ireland",component:IrelandComponent},
{path:"netherlands",component:NetherlandsComponent},
{path:"finland",component:FinlandComponent},
{path:"belgium",component:BelgiumComponent},
{path:"norway",component:NorwayComponent},
{path:"denmark",component:DenmarkComponent},
{path:"othercountries",component:OthercountriesComponent}
  ]},
  {path:"universities",component:UniversitiesComponent},
  {path:"courses",component:CoursesComponent,children:[
    {path:"masterprograms",component:MasterprogramsComponent},
    {path:"bachelorprogram",component:BachelorprogramComponent}
  ]},
  {path:"services",component:ServicesComponent},
  {path:"articles",component:ArticlesComponent},
  {path:"europeancompanies",component:EuropeanCompaniesComponent},
  
  

];
var myroutes2=RouterModule.forRoot(myroutes);





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EuropeanEducationComponent,
    UniversitiesComponent,
    CoursesComponent,
    CountriesComponent,
    ServicesComponent,
    ArticlesComponent,
    EuropeanCompaniesComponent,
    MasterprogramsComponent,
    BachelorprogramComponent,
    SwedenComponent,
    GermanyComponent,
    FranceComponent,
    ItalyComponent,
    LatviaComponent,
    IrelandComponent,
    NetherlandsComponent,
    FinlandComponent,
    BelgiumComponent,
    NorwayComponent,
    DenmarkComponent,
    OthercountriesComponent,
    RegistrationComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    myroutes2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
