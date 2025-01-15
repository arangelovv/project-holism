import { Component, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { Router } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-core",
  imports: [RouterOutlet, SidebarComponent, ToolbarComponent, NgIf],
  templateUrl: "./core.component.html",
})
export class CoreComponent {
  screenWidth: number = window.innerWidth;
  isHomeRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === "/home";
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    console.warn(this.screenWidth);
  }
}
