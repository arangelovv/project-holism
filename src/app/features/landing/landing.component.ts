import { Component } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { landingPageData } from "./landing.data";

@Component({
	selector: "app-landing",
	imports: [LucideAngularModule, RouterLink],
	templateUrl: "./landing.component.html",
})
export class LandingComponent {
	features = landingPageData.features;
	testimonials = landingPageData.testimonials;
	pricingDetails = landingPageData.pricingDetails;
	productLinks = landingPageData.productLinks;
	companyLinks = landingPageData.companyLinks;
	legalLinks = landingPageData.legalLinks;
	currentYear: number = new Date().getFullYear();
}
