import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[yaqeenSelector2]',
})

export class Directive2 implements OnInit{

  @HostListener('click') click(event: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseover') mouseover(event: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
}
