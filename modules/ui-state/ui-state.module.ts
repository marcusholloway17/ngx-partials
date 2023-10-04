import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderOneComponent } from "./loaders/loader-one/loader-one.component";
import { LoaderTwoComponent } from "./loaders/loader-two/loader-two.component";
import { LoaderThreeComponent } from "./loaders/loader-three/loader-three.component";
import { UIStateConfig, UI_STATE_CONFIG_PROVIDER } from "./types";
import { LoaderComponent } from "./loaders/loader/loader.component";
import { AppUIStateProvider } from "./services/ui-state.service";
import { LoaderFourComponent } from "./loaders/loader-four/loader-four.component";
import { LoaderFiveComponent } from "./loaders/loader-five/loader-five.component";
import { LoaderSixComponent } from "./loaders/loader-six/loader-six.component";

@NgModule({
  declarations: [
    LoaderOneComponent,
    LoaderTwoComponent,
    LoaderThreeComponent,
    LoaderComponent,
    LoaderFourComponent,
    LoaderFiveComponent,
    LoaderSixComponent,
  ],
  imports: [CommonModule],
  exports: [
    LoaderOneComponent,
    LoaderTwoComponent,
    LoaderThreeComponent,
    LoaderComponent,
    LoaderFourComponent,
    LoaderFiveComponent,
    LoaderSixComponent,
  ],
})
export class UiStateModule {
  static forRoot(config: UIStateConfig): ModuleWithProviders<UiStateModule> {
    return {
      ngModule: UiStateModule,
      providers: [
        AppUIStateProvider,
        {
          provide: UI_STATE_CONFIG_PROVIDER,
          useValue: {
            loader: config.loader ?? "loader-one",
          },
        },
      ],
    };
  }
}
