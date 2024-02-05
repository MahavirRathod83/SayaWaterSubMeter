import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-water-submeter',
  templateUrl: './water-submeter.component.html',
  styleUrls: ['./water-submeter.component.css'],
})
export class WaterSubmeterComponent {
  constructor(meta: Meta, title: Title) {
    title.setTitle('water submeter');
    meta.addTags([
      {
        name: 'keywords',
        content: 'Casubmetering Solutions',
      },
      {
        name: 'keywords',
        content: 'water submetering',
      },
      {
        name: 'keywords',
        content: 'Submeter Solutions',
      },
      {
        name: 'keywords',
        content: 'Utility Billing',
      },
      {
        name: 'keywords',
        content: 'Large Installations',
      },
      {
        name: 'keywords',
        content: 'Property Management Solutions',
      },
      {
        name: 'keywords',
        content: 'Revolutionary Leak Prevention',
      },
      {
        name: 'keywords',
        content: 'Water Leak Prevention',
      },
      {
        name: 'keywords',
        content: 'Billing Platform',
      },
      {
        name: 'description',
        content: 'Discover the power of saya',
      },
    ]);
  }
}
