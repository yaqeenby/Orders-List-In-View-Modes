import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Users} from '../services/users';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[] = [];

  constructor(private usersService: Users) {
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
    // this.usersService.userSetToActive.subscribe(res =>{
    //   this.users = res;
    // });
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
