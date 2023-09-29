import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPipe } from './pipes/request.pipe';
import { WithLoadingPipe } from './pipes/with-loading.pipe';



@NgModule({
  declarations: [
    RequestPipe,
    WithLoadingPipe
  ],
  imports: [
    CommonModule
  ]
})
export class NgxPartialsModule { }
