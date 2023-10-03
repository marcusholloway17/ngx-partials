import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RequestPipe } from "./pipes/request.pipe";
import { WithLoadingPipe } from "./pipes/with-loading.pipe";
import { ClrTopLevelAlertComponent } from "./components/alerts/clr-top-level-alert/clr-top-level-alert.component";
import { ClarityModule } from "@clr/angular";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CardsComponent } from "./components/cards/cards.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UiStateModule } from "./modules/ui-state";

@NgModule({
  declarations: [
    RequestPipe,
    WithLoadingPipe,
    ClrTopLevelAlertComponent,
    PageNotFoundComponent,
    CardsComponent,
  ],
  imports: [CommonModule, ClarityModule, RouterModule],
  exports: [
    RequestPipe,
    WithLoadingPipe,
    ClrTopLevelAlertComponent,
    PageNotFoundComponent,
    CardsComponent,
    UiStateModule,
  ],
})
export class NgxPartialsModule {}
