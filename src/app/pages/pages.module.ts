import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { StrategyComponent } from './strategy/strategy.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DisclaimersComponent } from './disclaimers/disclaimers.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import {PortfolioCardComponent} from './portfolio/portfolioCard.component';

@NgModule({
  declarations: [StrategyComponent, PortfolioComponent, DisclaimersComponent, OurteamComponent, PortfolioCardComponent],
  imports: [
    CommonModule,
    HomeModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
