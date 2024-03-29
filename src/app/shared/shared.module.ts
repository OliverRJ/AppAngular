import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    ReplaceSpacePipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReplaceSpacePipe,
    ImgBrokenDirective // cuando se quiere usar una directiva o componente desde otros modulos se debe exportar
  ],
  providers:[
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
