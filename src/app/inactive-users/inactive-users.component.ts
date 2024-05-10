import {Component} from '@angular/core';
import {Users} from "../services/users";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = [];

  constructor(private usersService: Users) {
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    // this.usersService.userSetToInactive.subscribe(res =>{
    //   this.users = res;
    // });
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
