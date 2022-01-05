import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") parametro:string = '';

  constructor(
    private el: ElementRef,    
  ) { 
    console.log("directuiva llamada");
    // el.nativeElement.style.backgroundColor = "red"; 
  }

  @HostListener('mouseenter') mouseEnter(){
    // this.el.nativeElement.style.backgroundColor = "red";
    this.resaltar(this.parametro);
    // console.log(this.parametro);    
  }

  @HostListener('mouseleave') mouseLeave(){
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar('')
  }

  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
