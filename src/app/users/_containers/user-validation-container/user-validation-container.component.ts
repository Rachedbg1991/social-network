import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-validation-container',
  templateUrl: './user-validation-container.component.html',
  styleUrls: ['./user-validation-container.component.scss']
})
export class UserValidationContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit(): void {
  }

}
