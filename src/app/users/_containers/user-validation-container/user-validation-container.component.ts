import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-validation-container',
  templateUrl: './user-validation-container.component.html',
  styleUrls: ['./user-validation-container.component.scss']
})
export class UserValidationContainerComponent implements OnInit {


  constructor(private route: ActivatedRoute, private readonly userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => 
      this.userService.getOne('users/activate/'+ params.id).subscribe(
        res => console.log(res),
        err => console.log(err)
      ) 
    );
    
  }

}
