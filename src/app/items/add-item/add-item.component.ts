import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ITEM_CATEGORY} from "../item.interface";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  form: FormGroup = new FormGroup<any>({});
  CATEGORIES = ITEM_CATEGORY;
  categories: string[] = [this.CATEGORIES.clothes, this.CATEGORIES.food, this.CATEGORIES.tools, this.CATEGORIES.machines, this.CATEGORIES.accessories];
  index = 1;

  @Output() onCloseClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      mainImg   : [''],
      imgs      : [''],
      name      : ['', Validators.required],
      category      : ['', Validators.required],
      type      : ['', Validators.required],
      email     : ['', [Validators.required, Validators.email]],
      description  : ['', Validators.required],
      quantity   : [''],
      colors: ['', Validators.requiredTrue],
    })

    this.form.get('type')?.valueChanges.subscribe(res => {
      console.log(res)
    })
  }

  change(fields: any){
    this.form.patchValue(Object.assign(this.form.getRawValue(), fields));
  }

  addCategory(tag: string){
    this.categories.push(tag);
  }

  removeCategory(index: number){
    this.categories.splice(index, 1);
  }
}
