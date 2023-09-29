import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPipe } from './pipes/request.pipe';
import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { ClrTopLevelAlertComponent } from './components/alerts/clr-top-level-alert/clr-top-level-alert.component';
import { ClarityModule } from '@clr/angular';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RequestPipe,
    WithLoadingPipe,
    ClrTopLevelAlertComponent,
    PageNotFoundComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule
  ]
})
export class NgxPartialsModule { }
