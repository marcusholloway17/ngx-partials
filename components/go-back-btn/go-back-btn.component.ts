import { Component, Input, TemplateRef } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";

@Component({
  selector: "app-go-back-btn",
  templateUrl: "./go-back-btn.component.html",
  styleUrls: ["./go-back-btn.component.css"],
})
export class GoBackBtnComponent {
  @Input() public disableBtn: boolean =
    this.navigationService.history.length == 0 ? true : false;
  @Input() btnContainerClass: string = "btn btn-primary";
  @Input() btnClass: string = "btn btn-primary";
  @Input() btnLabel: string = "Go Back";
  @Input() iconShape: string = "angle";
  @Input() iconDirection: string = "left";
  @Input()
  template!: TemplateRef<unknown>;

  constructor(private navigationService: NavigationService) {}

  goBack() {
    this.navigationService.back();
  }
}
