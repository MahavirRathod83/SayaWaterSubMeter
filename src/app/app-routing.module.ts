import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterSubmeterComponent } from './components/water-submeter/water-submeter.component';
import { AboutComponent } from './components/about/about.component';
import { routes } from './shared/routes/routes';
import { GasSubmeterComponent } from './components/gas-submeter/gas-submeter.component';
import { ElectricSubmeterComponent } from './components/electric-submeter/electric-submeter.component';
import { BillingReportComponent } from './components/billing-report/billing-report.component';
import { ProcessComponent } from './components/process/process.component';

const routing: Routes = [
  {
    path: '',
    children: [
      {
        path: routes.waterSubmeter,
        title: 'water-submetering',
        component: WaterSubmeterComponent,
      },
      {
        path: routes.aboutMeter,
        title: 'about',
        component: AboutComponent,
      },
      {
        path: routes.gasMeter,
        title: 'gas-submetering',
        component: GasSubmeterComponent,
      },
      {
        path: routes.electricMeter,
        title: 'electric-submetering',
        component: ElectricSubmeterComponent,
      },
      {
        path: routes.billingReport,
        title: 'billing-reporting',
        component: BillingReportComponent,
      },
      {
        path: routes.ourProcess,
        title: 'our-process',
        component: ProcessComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
