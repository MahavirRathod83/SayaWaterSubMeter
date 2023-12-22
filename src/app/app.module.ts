import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { WaterSubmeterComponent } from './components/water-submeter/water-submeter.component';
import { CountUpModule } from 'ngx-countup';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WaterSubmeterComponent,
   
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
