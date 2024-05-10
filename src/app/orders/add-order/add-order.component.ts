import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{
   form: FormGroup | undefined;

   constructor(private formBuilder: FormBuilder,
               private dialogRef: MatDialogRef<AddOrderComponent>,
               ) {
   }

   ngOnInit() {
     this.form = this.formBuilder.group({
       imgs      : [''],
       name      : ['', Validators.required],
       type      : ['', Validators.required],
       email     : ['', [Validators.required, Validators.email]],
       description  : ['', Validators.required],
       quantity   : [''],
       colors: ['', Validators.requiredTrue],
     })
   }
}
