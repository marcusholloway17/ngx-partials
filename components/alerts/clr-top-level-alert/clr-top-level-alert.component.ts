import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ClrTopLevelAlertService } from "./clr-top-level-alert.service";

@Component({
  selector: "app-clr-top-level-alert",
  templateUrl: "./clr-top-level-alert.component.html",
  styleUrls: ["./clr-top-level-alert.component.css"],
})
export class ClrTopLevelAlertComponent implements OnDestroy, OnDestroy {
  alertState$ = this.alert$.alertState$;
  private destroy$ = new Subject<void>();
  constructor(private alert$: ClrTopLevelAlertService) {}

  ngOnInit(): void {
    this.alertState$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (value) => {
        if (value?.closeDelay !== undefined) {
          if (value?.closeDelay !== -1) {
            setTimeout(() => {
              this.onClose();
            }, value?.closeDelay);
          }
        }
      },
    });
  }

  onClose() {
    this.alert$.close();
  }

  ngOnDestroy(): void {
    this.onClose();
    this.destroy$.next();
  }
}
