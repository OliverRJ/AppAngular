import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(){
    const element =  this.elHost.nativeElement;
    element.src = 'https://media.istockphoto.com/vectors/no-image-available-sign-vector-id1138179183?k=20&m=1138179183&s=170667a&w=0&h=gnrlcFM0bDLu15r2pO-L-mB6hAQTs4z-M1yAWJF6R34=';
    console.log('algo sucedio', this.elHost.nativeElement)
  }
  constructor(private elHost:ElementRef) { }

}
