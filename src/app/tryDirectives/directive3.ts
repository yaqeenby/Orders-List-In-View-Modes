import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[yaqeenSelector3]',
})

export class Directive3 implements OnInit{
  @Input() background = 'black';
  @HostBinding('style.background') backColor = this.background;

  @HostListener('click') click(event: Event){
      this.backColor = 'green';
   }

  @HostListener('mouseover') mouseover(event: Event){
    this.backColor = 'blue';
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backColor = this.background;
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }
}
