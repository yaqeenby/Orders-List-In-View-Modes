import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[yaqeenSelector]',
})

export class Directive1 implements OnInit{

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.background = 'white';
  }
}
