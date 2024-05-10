import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Section} from "../../item.interface";

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.css']
})
export class ItemSectionComponent {
    @Input() section: Section | undefined;
    @Output() onSectionChanged: EventEmitter<any> = new EventEmitter<any>();

  onFieldChanged(){
    let obj = {};
    // @ts-ignore
    for(let f of this.section.fields){
      let field: any = {};
      field[f.form_key] = f.value;
      Object.assign(obj, field);
    }
    this.onSectionChanged.emit(obj);
  }

}
