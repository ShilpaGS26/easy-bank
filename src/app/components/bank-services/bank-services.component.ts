import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bank-services',
  templateUrl: './bank-services.component.html'
})
export class BankServicesComponent {
 services = [
    { iconUrl: '../../../assets/images/icon-online.svg', title: 'Online Banking', description: 'Our modern web and mobile applications allow you to keep track of your finances whenever you are in the world.'},
    { iconUrl: '../../../assets/images/icon-budgeting.svg', title: 'Simple Budgeting', description: 'See exactly where your money goes each month. Receive notifications when you are close to hitting your limits.'},
    { iconUrl: '../../../assets/images/icon-onboarding.svg', title: 'Fast Onboarding', description: 'We dont do branches.Open your account in minutes online and start taking control of your finances right away.'},
    { iconUrl: '../../../assets/images/icon-api.svg', title: 'Open API', description: 'Manage your savinngs, investements, pension, and much more from one account.Tracking your money has never been easier.'},
  ];
}
