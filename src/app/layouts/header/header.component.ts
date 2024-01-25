import { Component, Renderer2, ElementRef } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public routes = routes;
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(): void {
    const isMobile = window.innerWidth <= 991;
    const storeLink = this.el.nativeElement.querySelector('#storeLinkElement');
    const aboutLink = this.el.nativeElement.querySelector('#aboutLinkElement');
    const processLink = this.el.nativeElement.querySelector(
      '#processLinkElement'
    );
    const waterLink = this.el.nativeElement.querySelector('#waterLinkElement');
    const billingLink = this.el.nativeElement.querySelector(
      '#billingLinkElement'
    );
    const getStartedLink =
      this.el.nativeElement.querySelector('#getLinkElement');
    if (isMobile) {
      this.renderer.setAttribute(storeLink, 'href', 'https://saya.life/shop');
      this.renderer.setAttribute(
        aboutLink,
        'data-bs-target',
        '#navbarSupportedContent'
      );
      this.renderer.setAttribute(aboutLink, 'data-bs-toggle', 'collapse');
      this.renderer.setAttribute(
        waterLink,
        'data-bs-target',
        '#navbarSupportedContent'
      );
      this.renderer.setAttribute(waterLink, 'data-bs-toggle', 'collapse');
      this.renderer.setAttribute(
        processLink,
        'data-bs-target',
        '#navbarSupportedContent'
      );
      this.renderer.setAttribute(processLink, 'data-bs-toggle', 'collapse');
      this.renderer.setAttribute(
        billingLink,
        'data-bs-target',
        '#navbarSupportedContent'
      );
      this.renderer.setAttribute(billingLink, 'data-bs-toggle', 'collapse');
      this.renderer.setAttribute(
        getStartedLink,
        'data-bs-target',
        '#navbarSupportedContent'
      );
      this.renderer.setAttribute(getStartedLink, 'data-bs-toggle', 'collapse');
    }
  }
}
