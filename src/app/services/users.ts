import {EventEmitter, Injectable, Output} from "@angular/core";
import {CounterService} from "./counterService";

@Injectable()
export class Users{

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  @Output() userSetToInactive = new EventEmitter<string[]>();
  @Output() userSetToActive = new EventEmitter<string[]>();

  constructor(private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.userSetToInactive.emit(this.inactiveUsers);
    this.counterService.onInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.userSetToActive.emit(this.activeUsers);
    this.counterService.onActive();
  }
}
