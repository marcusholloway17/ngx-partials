import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface UIState {
  performingAction: boolean;
  uiMessage?: string;
  hasError?: boolean;
  status?: number;
}

export enum UIStateStatusCode {
  UNAUTHORIZED = 401,
  AUTHENTICATED = 202,
  UNAUTHENTICATED = 403,
  BAD = 400,
  OK = 200,
  CREATED = 201,
  ERROR = 500,
}

export interface UIStateProvider {
  uiState: Observable<UIState>;

  startAction(message?: string): void;

  endAction(message?: string, status?: UIStateStatusCode | any): void;

  resetState(): void;
}

/**
 * @description Provider for the UI state service
 *
 * @var UIStateProvider
 */
export const UI_STATE_PROVIDER = new InjectionToken<UIStateProvider>(
  "UI State Provider"
);

export const UI_STATE_CONFIG_PROVIDER = new InjectionToken<UIStateConfig>(
  "UI STATE CONFIG PROVIDER"
);

export type UIStateConfig = {
  loader: string;
};
