import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AlertStateType, ERROR_ALERT, SUCCESS_ALERT } from "../index";

@Injectable({
  providedIn: "root",
})
export class ClrTopLevelAlertService {
  private _alertState$ = new BehaviorSubject<AlertStateType | null>(null);
  public alertState$ = this._alertState$.asObservable();

  constructor() {}

  getState() {
    return this._alertState$.getValue();
  }

  setState(state: AlertStateType) {
    this._alertState$.next(state);
  }

  alert(state: AlertStateType) {
    this.setState(state);
  }

  close() {
    this._alertState$.next(null);
  }

  success(msg?: string, closeDelay?: number) {
    this.setState({
      type: SUCCESS_ALERT.type,
      msg: msg ?? SUCCESS_ALERT.msg,
      closeDelay: closeDelay ?? SUCCESS_ALERT.closeDelay,
    });
  }
  warning(msg: string, closeDelay?: number) {
    this.setState({
      type: "warning",
      msg,
      closeDelay: closeDelay ?? 5000,
    });
  }
  danger(msg: string, closeDelay?: number) {
    this.setState({
      type: ERROR_ALERT.type,
      msg: msg ?? ERROR_ALERT.msg,
      closeDelay: closeDelay ?? ERROR_ALERT.closeDelay,
    });
  }
  info(msg: string, closeDelay?: number) {
    this.setState({
      type: "info",
      msg,
      closeDelay,
    });
  }
}
