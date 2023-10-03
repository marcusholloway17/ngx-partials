import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderOneComponent } from "./loaders/loader-one/loader-one.component";
import { LoaderTwoComponent } from "./loaders/loader-two/loader-two.component";
import { LoaderThreeComponent } from "./loaders/loader-three/loader-three.component";
import {
  UIStateConfig,
  UI_STATE_CONFIG_PROVIDER,
  UI_STATE_PROVIDER,
} from "./types";
import { AppUIStateProvider } from "./services/ui-state.service";
import { LoaderComponent } from "./loaders/loader/loader.component";

@NgModule({
  declarations: [
    LoaderOneComponent,
    LoaderTwoComponent,
    LoaderThreeComponent,
    LoaderComponent,
  ],
  imports: [CommonModule],
  exports: [LoaderComponent],
})
export class UiStateModule {
  static forRoot(config: UIStateConfig): ModuleWithProviders<UiStateModule> {
    return {
      ngModule: UiStateModule,
      providers: [
        AppUIStateProvider,
        {
          provide: UI_STATE_PROVIDER,
          useClass: AppUIStateProvider,
        },
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
