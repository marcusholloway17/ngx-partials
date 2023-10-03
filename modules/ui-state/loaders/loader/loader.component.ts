import { Component, Inject, OnDestroy } from "@angular/core";
import {
  UIStateConfig,
  UI_STATE_CONFIG_PROVIDER,
  UI_STATE_PROVIDER,
} from "../../types";
import { AppUIStateProvider } from "src/app/views/partial/ui-state/core";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"],
})
export class LoaderComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  state$ = this.uistate.uiState.pipe(takeUntil(this.destroy$));
  public loader = this.uistateConfig?.loader;

  constructor(
    private uistate: AppUIStateProvider,
    @Inject(UI_STATE_CONFIG_PROVIDER) private uistateConfig: UIStateConfig
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
