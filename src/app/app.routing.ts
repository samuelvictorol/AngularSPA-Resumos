import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Slide1Component } from "./slide1/slide1.component";
import { Slide2Component } from "./slide2/slide2.component";


const APP_ROUTE: Routes = [
  {path:'', component: HomeComponent},
  {path:'slide1', component: Slide1Component},
  {path:'slide2', component: Slide2Component}
]
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTE);
