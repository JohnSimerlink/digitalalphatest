import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StrategyComponent} from './strategy/strategy.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {DisclaimersComponent} from './disclaimers/disclaimers.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  {path:'strategy', component: StrategyComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'disclaimers', component: DisclaimersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
