import { Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})

export class SuccessAlertComponent {
  timeOccured: string = new Date().toString();
  inputValue: any = Math.random().toString(36).substring(5);
  items = ['One', 'Two'];
}
