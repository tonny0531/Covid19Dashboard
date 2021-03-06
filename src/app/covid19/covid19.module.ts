import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Covid19RoutingModule } from './covid19-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UtilityModule } from '../utility/utility.module';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { StatTableComponent } from './components/stat-table/stat-table.component';
import { TableModule } from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TotalStatLineChartComponent } from './components/total-stat-line-chart/total-stat-line-chart.component';

import { CountryStatBarChartComponent } from './components/country-stat-bar-chart/country-stat-bar-chart.component';
import { CountryStatLineChartComponent } from './components/country-stat-line-chart/country-stat-line-chart.component';
import { GlobalStatContainerComponent } from './containers/global-stat-container/global-stat-container.component';
import { CountryStatContainerComponent } from './containers/country-stat-container/country-stat-container.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    StatCardComponent,
    StatTableComponent,
    TotalStatLineChartComponent,
    CountryStatBarChartComponent,
    CountryStatLineChartComponent,
    GlobalStatContainerComponent,
    CountryStatContainerComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FontAwesomeModule,
    NgApexchartsModule,
    FormsModule,
    ReactiveFormsModule,
    UtilityModule,
    Covid19RoutingModule
  ]
})
export class Covid19Module { }
