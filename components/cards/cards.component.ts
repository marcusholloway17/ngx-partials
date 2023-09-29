import { Component, Input, TemplateRef } from "@angular/core";
import { Card } from ".";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent {
  @Input() public cards: Card[] = [];
  @Input() customTemplate!: TemplateRef<unknown>;
  @Input() customTemplateContainerClass?: string;
}
