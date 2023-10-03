import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, startWith } from "rxjs";
import { UIState, UIStateStatusCode } from "../types";

const initialUIState: UIState = {
  performingAction: false,
  uiMessage: undefined,
  hasError: false,
  status: undefined,
};

@Injectable()
export class AppUIStateProvider {
  store$ = new ReplaySubject<UIState>(1);

  get uiState(): Observable<UIState> {
    return this.store$.pipe(startWith(initialUIState));
  }

  startAction(message?: string): void {
    this.store$.next({
      performingAction: true,
      uiMessage: message,
      hasError: false,
      status: undefined,
    });
  }

  endAction(message?: string, status?: UIStateStatusCode): void {
    this.store$.next({
      performingAction: false,
      uiMessage: message,
      hasError: status === UIStateStatusCode.ERROR ? true : false,
      status,
    });
  }

  resetState(): void {
    this.store$.next(initialUIState);
  }
}
