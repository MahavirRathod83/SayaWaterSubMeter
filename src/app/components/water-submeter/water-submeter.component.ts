import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-water-submeter',
  templateUrl: './water-submeter.component.html',
  styleUrls: ['./water-submeter.component.css'],
})
export class WaterSubmeterComponent {
  constructor(private render: Renderer2, private el: ElementRef) {}
}
