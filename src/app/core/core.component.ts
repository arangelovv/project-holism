import { Component, HostListener } from "@angular/core";
import { NavigationEnd, RouterOutlet } from "@angular/router";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-core",
  imports: [RouterOutlet, SidebarComponent, ToolbarComponent],
  templateUrl: "./core.component.html",
})
export class CoreComponent {
  screenWidth: number = window.innerWidth;
  showToolbar = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.showToolbar =
          currentRoute.includes("/meals") ||
          currentRoute.includes("/exercises");
      }
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    console.warn(this.screenWidth);
  }
}
