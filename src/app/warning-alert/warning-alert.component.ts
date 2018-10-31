import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  timeOccured: string = new Date().toString();
  error: string = Math.random().toString(36).substring(7);
  disableButton = true;
  buttonClickStatus = 'Button is not clicked before!';

  constructor() {
    setTimeout(() => {
      this.disableButton = false;
    }, 2000);
  }
  ngOnInit() {

  }
  getErrorMessage() {
    return this.error;
  }
  onClickButton(event: Event) {
    console.log(( <HTMLInputElement>event.target).value);
    this.buttonClickStatus = 'Wow! we see a click';
  }
}
