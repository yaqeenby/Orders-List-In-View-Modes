import {Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[appUnless]',
})

export class Directive4 implements OnInit{
  @Input() set appUnless(condition: boolean) {
     if(!condition){
       this.vcRef.createEmbeddedView(this.templateRef);
     }else{
       this.vcRef.clear();
     }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  ngOnInit() {
  }
}
