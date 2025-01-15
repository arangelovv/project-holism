import { Component, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: "app-core",
  imports: [RouterOutlet, SidebarComponent, ToolbarComponent],
  templateUrl: "./core.component.html",
})
export class CoreComponent {
  screenWidth: number = window.innerWidth;

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    console.warn(this.screenWidth);
  }
}
