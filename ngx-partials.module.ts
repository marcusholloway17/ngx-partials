import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RequestPipe } from "./pipes/request.pipe";
import { WithLoadingPipe } from "./pipes/with-loading.pipe";
import { ClrTopLevelAlertComponent } from "./components/alerts/clr-top-level-alert/clr-top-level-alert.component";
import { ClarityModule } from "@clr/angular";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CardsComponent } from "./components/cards/cards.component";
import { RouterModule } from "@angular/router";
import { ProfilePictureComponent } from "./components/profile-picture/profile-picture.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { SafePipe } from "./pipes/safe.pipe";
import { GoBackBtnComponent } from "./components/go-back-btn/go-back-btn.component";

@NgModule({
  declarations: [
    RequestPipe,
    WithLoadingPipe,
    ClrTopLevelAlertComponent,
    PageNotFoundComponent,
    CardsComponent,
    ProfilePictureComponent,
    TimelineComponent,
    SafePipe,
    GoBackBtnComponent,
  ],
  imports: [CommonModule, ClarityModule, RouterModule],
  exports: [
    RequestPipe,
    WithLoadingPipe,
    SafePipe,
    ClrTopLevelAlertComponent,
    PageNotFoundComponent,
    CardsComponent,
    ProfilePictureComponent,
    TimelineComponent,
    GoBackBtnComponent,
  ],
})
export class NgxPartialsModule {}
