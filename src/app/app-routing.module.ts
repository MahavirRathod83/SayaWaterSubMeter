import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterSubmeterComponent } from './components/water-submeter/water-submeter.component';
import { AboutComponent } from './components/about/about.component';
import { routes } from './shared/routes/routes';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
