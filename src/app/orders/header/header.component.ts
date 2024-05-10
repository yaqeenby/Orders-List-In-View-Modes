import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  view: 'board' | 'calender' | 'completed' | 'all' | 'active' = 'board';
  tabs: Array<{title: string; view: 'board' | 'calender' | 'all' | 'active'}> = [
    {
      title: 'board',
      view: 'board',
    },
    {
      title: 'table',
      view: 'all',
    },
    {
      title: 'calender',
      view: 'calender',
    },
    {
      title: 'active',
      view: 'active',
    },
  ];
  @Output() onChangeView: EventEmitter<any> = new EventEmitter<any>();

  changeView(tab: 'board' | 'calender' | 'all' | 'active'){
    this.view = tab;
    this.onChangeView.emit(this.view);
  }
}
