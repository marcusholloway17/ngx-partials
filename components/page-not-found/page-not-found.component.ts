import { Component, Input, TemplateRef } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"],
})
export class PageNotFoundComponent {
  @Input() custom!: TemplateRef<unknown>;
  @Input() imgSrc?: string;
  @Input() imgContainerClass?: string;

  constructor(
    private router: Router,
    private navigation: NavigationService,
  ) {}

  ngOnInit(): void {}

  back(): void {
    this.navigation.back();
  }

  backToDashboard(): void {
    this.router.navigateByUrl("/");
  }

  backToLogin(): void {
    this.router.navigate(["login"]);
  }
}
