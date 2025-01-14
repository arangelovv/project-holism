import { Component, input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
@Component({
  selector: "app-nav-button",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./nav-button.component.html",
})
export class NavButtonComponent {
  title = input<string>("default");
  route = input<string>("default");
  icon = input<string>("gamepad");
}
