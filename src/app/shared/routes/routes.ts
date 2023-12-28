export class routes {
  private static UI_Url = '';
  private static API_Url = '';

  // UI urls

  public static get waterSubmeter(): string {
    return this.UI_Url + 'water-submetering';
  }

  public static get aboutMeter(): string {
    return this.UI_Url + 'about';
  }

  public static get gasMeter(): string {
    return this.UI_Url + 'gas-submetering';
  }

  public static get electricMeter(): string {
    return this.UI_Url + 'electric-submetering';
  }

  public static get billingReport(): string {
    return this.UI_Url + 'billing-reporting';
  }

  public static get ourProcess(): string {
    return this.UI_Url + 'our-process';
  }
}
