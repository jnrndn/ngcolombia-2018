import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NG-Colombia 2018';

  constructor (public snackBar: MatSnackBar) {
    if (!navigator.onLine) {
      this.snackBar.open('NgColombia is in Offline mode', '', {duration: 2000});
    }
  }
}
