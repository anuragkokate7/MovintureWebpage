import { Component, OnInit } from '@angular/core';
import { Role } from './role.model';
import { Status } from './status.model';
import { OrganisationsService } from './organisations.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styles: [
  ]
})
export class TemplateDrivenFormComponent implements OnInit {
  roles: Role[] = [
    {id: 1, name: 'Supervisor'},
    {id:2, name: 'Therapist'},
    {id:3, name: 'Patient'}
    ];

    statusE: Status[] = [
      {id: 1, name: 'Active'},
      {id:2, name: 'Inactive'}
      ];

      org: OrganisationsService[] = [
        {Organisation_ID: '', Organisation_Name: '' }
      ];
  constructor() { }

public role: string;
public idCode: number;
public fName: string;
public lName: string;
public mail: any;
public status: string;




  ngOnInit(): void {
  }
onSubmit(form){
  if(form.valid){
console.log(form.value);
console.log(form.valid);
  }
}

}
