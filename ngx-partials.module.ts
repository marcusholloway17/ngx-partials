import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPipe } from './pipes/request.pipe';
import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { ClrTopLevelAlertComponent } from './components/alerts/clr-top-level-alert/clr-top-level-alert.component';



@NgModule({
  declarations: [
    RequestPipe,
    WithLoadingPipe,
    ClrTopLevelAlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgxPartialsModule { }
