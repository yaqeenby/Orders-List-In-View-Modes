import {EventEmitter, Injectable, Output} from "@angular/core";

@Injectable()
export class CounterService{

  counter = {
    active: 0,
    inactive: 0,
    total: 0
  };

  @Output() onCounterChanged = new EventEmitter<{active: number; inactive: number; total: number}>();

  constructor() {}

  onInactive() {
    this.counter.inactive++;
    this.counter.total++;
    this.onCounterChanged.emit(this.counter);
  }

  onActive() {
    this.counter.active++;
    this.counter.total++;
    this.onCounterChanged.emit(this.counter);
  }
}
