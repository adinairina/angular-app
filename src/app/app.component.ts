import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular';

  firstList = ['lorem','lorem','lorem'];
  secondList = ['ipsum','ipsum','ipsum'];
  thirdList = ['dolor','dolor','dolor'];
  fourthList = ['sit','sit','sit'];

  userInput='';
  secondUserInput='New Value';
}
