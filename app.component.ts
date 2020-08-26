import { Component } from '@angular/core';
import { OrganisationsService } from './template-driven-form/organisations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'signup';
  constructor(private organisation: OrganisationsService) {
    this.organisation.getData().subscribe((data) => {
      console.warn(data)
    });
  }
}
