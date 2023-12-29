import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WaterSubmeterComponent } from './components/water-submeter/water-submeter.component';
import { CountUpModule } from 'ngx-countup';
import { AboutComponent } from './components/about/about.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { GasSubmeterComponent } from './components/gas-submeter/gas-submeter.component';
import { ElectricSubmeterComponent } from './components/electric-submeter/electric-submeter.component';
import { BillingReportComponent } from './components/billing-report/billing-report.component';
import { ProcessComponent } from './components/process/process.component';
import { GetStartedComponent } from './components/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WaterSubmeterComponent,
    AboutComponent,
    GasSubmeterComponent,
    ElectricSubmeterComponent,
    BillingReportComponent,
    ProcessComponent,
    GetStartedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CountUpModule, NgbDropdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
